"use client";

export default function StepConfigureReplies({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  const reply = formData.replyConfig;

  const updateField = (field, value) => {
    setFormData({
      ...formData,
      replyConfig: { ...reply, [field]: value },
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Configure Replies</h2>

      {/* Type selection */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Reply to:</label>
        <select
          value={reply.type}
          onChange={(e) => updateField("type", e.target.value)}
          className="border rounded-lg p-2 w-full"
        >
          <option value="all">All comments</option>
          <option value="keywords">
            Comments containing specific keywords
          </option>
        </select>
      </div>

      {reply.type === "keywords" && (
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Keywords (comma separated)
          </label>
          <input
            type="text"
            value={reply.keywords}
            onChange={(e) => updateField("keywords", e.target.value)}
            className="border rounded-lg p-2 w-full"
          />
        </div>
      )}

      {/* Message */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Reply Message</label>
        <textarea
          value={reply.message}
          onChange={(e) => updateField("message", e.target.value)}
          className="border rounded-lg p-2 w-full"
          rows={4}
        />
      </div>

      <div className="flex justify-between">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-lg">
          Back
        </button>
        <button
          onClick={nextStep}
          className="px-6 py-2 bg-pink-600 text-white rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}
