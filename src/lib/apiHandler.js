import { generateClient } from "@aws-amplify/api";
import {
  deleteCommentFromInstagramAccount,
  getMediaCommentsFromInstagramAccount,
  getMediaFromInstagramAccount,
  hideCommentFromInstagramAccount,
  linkInstagramAccount,
  manageIgMediaAutomation,
  manageUser,
  publishInstagramContent,
  sendReplyToComment,
} from "./api";

const client = generateClient();

export const manageUserAPI = async (action, data) => {
  try {
    const response = await client.graphql({
      query: manageUser,
      variables: { action: action, input: data },
      authMode: "userPool",
    });
    return response.data.manageUser;
  } catch (error) {
    console.log("Error:", error);
    return error;
  }
};

export const linkInstagramAccountAPI = async (data) => {
  try {
    const response = await client.graphql({
      query: linkInstagramAccount,
      variables: { input: data },
      authMode: "userPool",
    });
    return response.data.linkInstagramAccount;
  } catch (error) {
    console.log("Error:", error);
    return error;
  }
};

export const getMediaFromInstagramAccountAPI = async (
  userId,
  nextPageToken
) => {
  try {
    const response = await client.graphql({
      query: getMediaFromInstagramAccount,
      variables: { userId: userId, nextPageToken: nextPageToken },
      authMode: "userPool",
    });
    return response.data.getMediaFromInstagramAccount;
  } catch (error) {
    console.log("Error:", error);
    return error;
  }
};

export const getMediaCommentsFromInstagramAccountAPI = async ({
  userId,
  mediaId,
  nextPageToken,
}) => {
  try {
    const response = await client.graphql({
      query: getMediaCommentsFromInstagramAccount,
      variables: {
        userId: userId,
        mediaId: mediaId,
        nextPageToken: nextPageToken,
      },
      authMode: "userPool",
    });
    return response.data.getMediaCommentsFromInstagramAccount;
  } catch (error) {
    console.log("Error:", error);
    return error;
  }
};

export const hideCommentFromInstagramAccountAPI = async (
  userId,
  commentId,
  hide
) => {
  try {
    const response = await client.graphql({
      query: hideCommentFromInstagramAccount,
      variables: { userId: userId, commentId: commentId, hide: hide },
      authMode: "userPool",
    });
    return response.data.hideCommentFromInstagramAccount;
  } catch (error) {
    console.log("Error:", error);
    return error;
  }
};

export const sendReplyToCommentAPI = async (
  userId,
  commentId,
  replyContent
) => {
  try {
    const response = await client.graphql({
      query: sendReplyToComment,
      variables: {
        userId: userId,
        commentId: commentId,
        replyContent: replyContent,
      },
      authMode: "userPool",
    });
    return response.data.sendReplyToComment;
  } catch (error) {
    console.log("Error:", error);
    return error;
  }
};

export const deleteCommentFromInstagramAccountAPI = async (
  userId,
  commentId
) => {
  try {
    const response = await client.graphql({
      query: deleteCommentFromInstagramAccount,
      variables: { userId: userId, commentId: commentId },
      authMode: "userPool",
    });
    return response.data.deleteCommentFromInstagramAccount;
  } catch (error) {
    console.log("Error:", error);
    return error;
  }
};

export const manageIgMediaAutomationAPI = async (action, data) => {
  try {
    const response = await client.graphql({
      query: manageIgMediaAutomation,
      variables: { action: action, input: data },
      authMode: "userPool",
    });
    return response.data.manageIgMediaAutomation;
  } catch (error) {
    console.log("Error:", error);
    return error;
  }
};

export const publishInstagramContentAPI = async (userId, media) => {
  try {
    const response = await client.graphql({
      query: publishInstagramContent,
      variables: { userId: userId, media: media },
      authMode: "userPool",
    });
    return response.data.publishInstagramContent;
  } catch (error) {
    console.log("Error:", error);
    return error;
  }
};
