"use client";

import { useUser } from "@/contexts/UserContext";
import { publishInstagramContentAPI } from "@/lib/apiHandler";
import { getMediaUrl } from "@/utils/getMediaUrl";
import { uploadData } from "aws-amplify/storage";
import { useCallback, useRef, useState } from "react";
import {
  FiCamera,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiGrid,
  FiImage,
  FiPlay,
  FiUpload,
  FiVideo,
  FiX,
} from "react-icons/fi";

const Publish = () => {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState([]);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [mediaType, setMediaType] = useState("IMAGE");
  const [caption, setCaption] = useState("");
  const [currentPreview, setCurrentPreview] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [videoThumbnails, setVideoThumbnails] = useState({});
  const { user } = useUser();

  const fileInputRef = useRef(null);
  const videoRefs = useRef({});

  const dataURLtoFile = (dataUrl, filename) => {
    const arr = dataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  // Generate video thumbnail
  const generateVideoThumbnail = useCallback((videoFile, fileId) => {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      video.crossOrigin = "anonymous";
      video.muted = true;

      video.onloadedmetadata = () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        video.currentTime = Math.min(1, video.duration / 4); // Get frame at 1 second or 1/4 of video
      };

      video.onseeked = () => {
        try {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const thumbnailUrl = canvas.toDataURL("image/jpeg", 0.8);

          setVideoThumbnails((prev) => ({
            ...prev,
            [fileId]: thumbnailUrl,
          }));

          //   setVideoThumbnails((prev) => ({
          //     ...prev,
          //     [fileId]: { preview: thumbnailUrl, file: thumbnailFile },
          //   }));
          resolve(thumbnailUrl);
        } catch (error) {
          console.error("Error generating thumbnail:", error);
          resolve(null);
        } finally {
          URL.revokeObjectURL(video.src);
        }
      };

      video.onerror = () => {
        console.error("Error loading video for thumbnail generation");
        resolve(null);
      };

      video.src = URL.createObjectURL(videoFile);
    });
  }, []);

  const handleFileSelect = useCallback(
    (selectedFiles) => {
      const fileArray = Array.from(selectedFiles);
      const processedFiles = fileArray.map((file, index) => ({
        id: Date.now() + index,
        file,
        preview: URL.createObjectURL(file),
        type: file.type.startsWith("video/") ? "VIDEO" : "IMAGE",
      }));

      setFiles(processedFiles);

      // Generate thumbnails for videos
      processedFiles.forEach((fileObj) => {
        if (fileObj.type === "VIDEO") {
          generateVideoThumbnail(fileObj.file, fileObj.id);
        }
      });

      // Determine media type
      if (processedFiles.length > 1) {
        setMediaType("CAROUSEL");
      } else {
        setMediaType(processedFiles[0].type);
      }

      if (processedFiles.length > 0) {
        setStep(2);
      }
    },
    [generateVideoThumbnail]
  );

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      const droppedFiles = e.dataTransfer.files;
      handleFileSelect(droppedFiles);
    },
    [handleFileSelect]
  );

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const removeFile = (id) => {
    setFiles((prev) => {
      const updated = prev.filter((f) => f.id !== id);
      if (updated.length === 0) {
        setStep(1);
        setMediaType("IMAGE");
      } else if (updated.length === 1) {
        setMediaType(updated[0].type);
      }
      return updated;
    });

    // Clean up video thumbnail
    setVideoThumbnails((prev) => {
      const newThumbnails = { ...prev };
      delete newThumbnails[id];
      return newThumbnails;
    });
  };

  const handleCustomThumbnail = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];

      if (file) {
        setSelectedThumbnail(file);
        setThumbnailPreview(URL.createObjectURL(file));
      }
    };
    input.click();
  };

  const uploadToS3 = async (file, fileType, progressCallback) => {
    const result = await uploadData({
      path: `public/ig-content-publish/${Date.now()}::${
        file.name
      }::${fileType}`,
      data: file,
      options: {
        contentType: file.type,
        onProgress: progressCallback,
      },
    }).result;

    return result;
  };

  const handlePublish = async () => {
    setUploading(true);
    setUploadProgress(0);

    try {
      const uploadResults = [];
      let completedUploads = 0;
      const totalUploads = files.length + (selectedThumbnail ? 1 : 0);

      // Upload main media files
      for (const fileObj of files) {
        const progressCallback = ({ transferredBytes, totalBytes }) => {
          if (totalBytes) {
            const fileProgress = (transferredBytes / totalBytes) * 100;
            const overallProgress =
              ((completedUploads + fileProgress / 100) / totalUploads) * 100;
            setUploadProgress(Math.min(overallProgress, 100));
          }
        };

        try {
          const result = await uploadToS3(
            fileObj.file,
            fileObj.type,
            progressCallback
          );
          uploadResults.push({
            fileId: fileObj.id,
            type: fileObj.type,
            s3Key: result.path,
            url: result.url,
          });
          completedUploads++;

          // Update progress after completing each file
          const overallProgress = (completedUploads / totalUploads) * 100;
          setUploadProgress(Math.min(overallProgress, 100));
        } catch (fileError) {
          console.error(
            `Failed to upload file ${fileObj.file.name}:`,
            fileError
          );
          throw new Error(
            `Upload failed for ${fileObj.file.name}: ${fileError.message}`
          );
        }
      }

      // Upload custom thumbnail if selected
      let thumbnailResult = null;

      if (selectedThumbnail) {
        const progressCallback = ({ transferredBytes, totalBytes }) => {
          if (totalBytes) {
            const fileProgress = (transferredBytes / totalBytes) * 100;
            const overallProgress =
              ((completedUploads + fileProgress / 100) / totalUploads) * 100;
            setUploadProgress(Math.min(overallProgress, 100));
          }
        };

        try {
          thumbnailResult = await uploadToS3(
            selectedThumbnail,
            "thumbnail",
            progressCallback
          );

          completedUploads++;
        } catch (thumbnailError) {
          console.error("Failed to upload custom thumbnail:", thumbnailError);
        }
      } else {
        const progressCallback = ({ transferredBytes, totalBytes }) => {
          if (totalBytes) {
            const fileProgress = (transferredBytes / totalBytes) * 100;
            const overallProgress =
              ((completedUploads + fileProgress / 100) / totalUploads) * 100;
            setUploadProgress(Math.min(overallProgress, 100));
          }
        };

        const firstVideo = files.find((f) => f.type === "VIDEO");

        if (firstVideo && videoThumbnails[firstVideo.id]) {
          const thumbnailFile = dataURLtoFile(
            videoThumbnails[firstVideo.id],
            `${firstVideo.id}-auto.jpg`
          );

          try {
            thumbnailResult = await uploadToS3(
              thumbnailFile,
              "thumbnail",
              progressCallback
            );

            completedUploads++;
          } catch (err) {
            console.error("Failed to upload auto-thumbnail:", err);
          }
        }
      }

      // Final progress update
      setUploadProgress(100);

      const payload = {
        caption,
        mediaType,
        mediaUrl:
          mediaType !== "CAROUSEL" ? getMediaUrl(uploadResults[0].s3Key) : null,
        thumbnailUrl: thumbnailResult?.path
          ? getMediaUrl(thumbnailResult.path)
          : null,
        children:
          mediaType === "CAROUSEL"
            ? uploadResults.map((result) => ({
                mediaType: result.type,
                mediaUrl: getMediaUrl(result.s3Key),
              }))
            : [],
      };

      console.log("payload", payload);
      const response = await publishInstagramContentAPI(user?.id, payload);

      // Show success message (you might want to add a success state)
      if (response.success) {
        alert(response.message);

        // Reset form
        setFiles([]);
        setStep(1);
        setCaption("");
        setSelectedThumbnail(null);
        setThumbnailPreview(null);
        setMediaType("image");
        setUploadProgress(0);
        setVideoThumbnails({});
      } else {
        alert(response.message + " Post published failed!");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert(`Upload failed: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  const MediaPreview = ({ fileObj, index, isActive, showControls = true }) => (
    <div
      className={`relative w-full h-full ${
        isActive ? "ring-2 ring-blue-500" : ""}`}
    >
      {fileObj.type === "VIDEO" ? (
        <>
          <video
            ref={(el) => (videoRefs.current[fileObj.id] = el)}
            src={fileObj.preview}
            className="object-contain w-full h-full rounded-lg"
            muted
            loop
            autoPlay
            preload="metadata"
            controls
          />
        </>
      ) : (
        <img
          src={fileObj.preview}
          alt={`Preview ${index + 1}`}
          className="object-contain w-full h-full rounded-lg"
        />
      )}

      {showControls && (
        <button
          onClick={() => removeFile(fileObj.id)}
          className="absolute top-2 right-2 p-1 text-white bg-red-500 rounded-full transition-colors hover:bg-red-600"
        >
          <FiX size={16} />
        </button>
      )}
    </div>
  );

  const StepIndicator = () => (
    <div className="flex justify-center items-center mb-8">
      {[1, 2, 3].map((stepNum, idx) => (
        <div key={stepNum} className="flex items-center">
          {/* Step circle */}
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300
          ${
            step >= stepNum
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-500"
          }
        `}
          >
            {step > stepNum ? <FiCheck size={16} /> : stepNum}
          </div>

          {/* Connector line */}
          {idx < 2 && (
            <div
              className={`w-12 h-0.5 mx-2 transition-colors duration-300 
            ${step > stepNum ? "bg-blue-500" : "bg-gray-200"}
          `}
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="px-4 py-4 min-h-screen bg-gray-50 sm:py-8">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-2xl font-bold text-gray-800 sm:text-3xl">
            Create Post
          </h1>
          <p className="text-gray-600">Share your content with the world</p>
        </div>

        <StepIndicator />

        {/* Step 1: Upload */}
        {step === 1 && (
          <div className="p-6 bg-white rounded-xl shadow-lg sm:p-8">
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="p-8 text-center rounded-xl border-2 border-gray-300 border-dashed transition-colors cursor-pointer sm:p-12 hover:border-blue-400"
              onClick={() => fileInputRef.current?.click()}
            >
              <FiUpload className="mx-auto mb-4 text-4xl text-gray-400 sm:text-6xl" />
              <h3 className="mb-2 text-lg font-semibold sm:text-xl">
                Upload your media
              </h3>
              <p className="mb-4 text-gray-500">
                Drag and drop or click to select files
              </p>
              <p className="text-sm text-gray-400">
                Support images, videos, and multiple files for carousel
              </p>

              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={(e) => handleFileSelect(e.target.files)}
                className="hidden"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              <div className="flex flex-col items-center">
                <FiImage className="mb-2 text-2xl text-blue-500" />
                <span className="text-sm font-medium">Image</span>
              </div>
              <div className="flex flex-col items-center">
                <FiVideo className="mb-2 text-2xl text-green-500" />
                <span className="text-sm font-medium">Video</span>
              </div>
              <div className="flex flex-col items-center">
                <FiGrid className="mb-2 text-2xl text-purple-500" />
                <span className="text-sm font-medium">Carousel</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Thumbnail Selection */}
        {step === 2 && files.length > 0 && (
          <div className="p-6 bg-white rounded-xl shadow-lg sm:p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Preview & Thumbnail</h2>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 text-sm text-blue-800 bg-blue-100 rounded-full">
                  {mediaType.charAt(0).toUpperCase() + mediaType.slice(1)}
                </span>
              </div>
            </div>

            {/* Main Preview */}
            <div className="overflow-hidden relative mb-6 bg-gray-100 rounded-xl aspect-square">
              <MediaPreview
                fileObj={files[currentPreview]}
                index={currentPreview}
                isActive={true}
              />

              {files.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentPreview((prev) =>
                        prev > 0 ? prev - 1 : files.length - 1
                      )
                    }
                    className="absolute left-2 top-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full -translate-y-1/2 hover:bg-opacity-70"
                  >
                    <FiChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentPreview((prev) =>
                        prev < files.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="absolute right-2 top-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full -translate-y-1/2 hover:bg-opacity-70"
                  >
                    <FiChevronRight size={20} />
                  </button>
                  <div className="flex absolute bottom-4 left-1/2 space-x-1 -translate-x-1/2">
                    {files.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentPreview
                            ? "bg-white"
                            : "bg-white bg-opacity-50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Grid for Carousel */}
            {files.length > 1 && (
              <div className="grid grid-cols-3 gap-2 mb-6 sm:grid-cols-5">
                {files.map((fileObj, index) => (
                  <button
                    key={fileObj.id}
                    onClick={() => setCurrentPreview(index)}
                    className={`aspect-square rounded-lg overflow-hidden transition-all ${
                      currentPreview === index
                        ? "ring-2 ring-blue-500"
                        : "hover:ring-1 hover:ring-gray-300"
                    }`}
                  >
                    <div className="relative w-full h-full">
                      {fileObj.type === "VIDEO" ? (
                        videoThumbnails[fileObj.id] ? (
                          <img
                            src={videoThumbnails[fileObj.id]}
                            alt={`Video thumbnail ${index + 1}`}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <div className="flex justify-center items-center w-full h-full bg-gray-200">
                            <FiVideo className="text-gray-400" />
                          </div>
                        )
                      ) : (
                        <img
                          src={fileObj.preview}
                          alt={`Thumbnail ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                      )}
                      {fileObj.type === "VIDEO" && (
                        <div className="flex absolute inset-0 justify-center items-center">
                          <FiPlay className="text-lg text-white opacity-80" />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Thumbnail Selection for Videos */}
            {(mediaType === "VIDEO" ||
              (mediaType === "CAROUSEL" &&
                files.some((f) => f.type === "VIDEO"))) && (
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">
                  Video Thumbnail
                </label>
                <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <button
                    className="px-4 py-2 text-sm bg-gray-100 rounded-lg transition-colors hover:bg-gray-200"
                    onClick={() => {
                      setSelectedThumbnail(null);
                      setThumbnailPreview(null);
                    }}
                  >
                    Use Auto-generated
                  </button>
                  <button
                    onClick={handleCustomThumbnail}
                    className="px-4 py-2 text-sm text-blue-800 bg-blue-100 rounded-lg transition-colors hover:bg-blue-200"
                  >
                    <FiCamera className="inline mr-1" />
                    Upload Custom
                  </button>
                </div>

                {thumbnailPreview && (
                  <div className="mt-3">
                    <p className="mb-2 text-sm font-medium text-green-600">
                      Custom thumbnail selected:
                    </p>
                    <div className="overflow-hidden w-24 h-24 rounded-lg border">
                      <img
                        src={thumbnailPreview}
                        alt="Custom thumbnail preview"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="flex space-x-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-3 font-medium rounded-lg border border-gray-300 transition-colors hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 py-3 font-medium text-white bg-blue-500 rounded-lg transition-colors hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Details */}
        {step === 3 && (
          <div className="p-6 bg-white rounded-xl shadow-lg sm:p-8">
            <h2 className="mb-6 text-xl font-bold">Add Details</h2>

            {/* Media Type Display */}
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">
                Media Type
              </label>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-2 text-sm font-medium bg-gray-100 rounded-lg">
                  {mediaType.charAt(0).toUpperCase() + mediaType.slice(1)}
                </span>
                <span className="text-sm text-gray-500">
                  {files.length} file{files.length > 1 ? "s" : ""}
                </span>
              </div>
            </div>

            {/* Caption */}
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">Caption</label>
              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Write a caption..."
                rows={4}
                className="p-3 w-full rounded-lg border border-gray-300 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                maxLength={2200}
              />
              <div className="mt-1 text-sm text-right text-gray-500">
                {caption.length}/2200
              </div>
            </div>

            {/* Upload Progress */}
            {uploading && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Publishing...</span>
                  <span className="text-sm text-gray-500">
                    {Math.round(uploadProgress)}%
                  </span>
                </div>
                <div className="overflow-hidden w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}

            <div className="flex space-x-3">
              <button
                onClick={() => setStep(2)}
                disabled={uploading}
                className="flex-1 py-3 font-medium rounded-lg border border-gray-300 transition-colors hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Back
              </button>
              <button
                onClick={handlePublish}
                disabled={uploading || !caption.trim()}
                className="flex-1 py-3 font-medium text-white bg-blue-500 rounded-lg transition-colors hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {uploading ? "Publishing..." : "Publish"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Publish;
