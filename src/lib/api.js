export const manageUser = /* GraphQL */ `
  mutation ManageUser($action: API_ACTIONS!, $input: UserInput!) {
    manageUser(action: $action, input: $input) {
      success
      message
      items {
        id
        name
        phoneNo
        email
        instagramDetails {
          id
          userId
          profilePictureUrl
          username
          name
          accountType
          followersCount
          followsCount
          mediaCount
          isInstagramSubscribed
          instagramRefreshTokenUpdatedAt
          updatedAt
        }
        createdAt
        updatedAt
      }
    }
  }
`;

export const linkInstagramAccount = /* GraphQL */ `
  mutation LinkInstagramAccount($input: LinkInstagramAccountInput!) {
    linkInstagramAccount(input: $input) {
      success
      message
    }
  }
`;

export const getMediaFromInstagramAccount = /* GraphQL */ `
  query GetMediaFromInstagramAccount($userId: String!, $nextPageToken: String) {
    getMediaFromInstagramAccount(
      userId: $userId
      nextPageToken: $nextPageToken
    ) {
      success
      message
      items {
        id
        caption
        mediaType
        mediaProductType
        mediaUrl
        thumbnailUrl
        permalink
        timestamp
        commentsCount
        likeCount
        shortcode
        __typename
      }
      nextPageToken
      __typename
    }
  }
`;

export const getMediaCommentsFromInstagramAccount = /* GraphQL */ `
  query GetMediaCommentsFromInstagramAccount(
    $userId: String!
    $mediaId: String!
    $nextPageToken: String
  ) {
    getMediaCommentsFromInstagramAccount(
      userId: $userId
      mediaId: $mediaId
      nextPageToken: $nextPageToken
    ) {
      success
      message
      items {
        id
        text
        senderId
        senderUsername
        isHidden
        timestamp
        likeCount
        replies {
          id
          text
          senderId
          senderUsername
          isHidden
          timestamp
          likeCount
          replies {
            id
            text
            senderId
            senderUsername
            isHidden
            timestamp
            likeCount
            replies {
              id
              text
              senderId
              senderUsername
              isHidden
              timestamp
              likeCount
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      nextPageToken
      __typename
    }
  }
`;

export const deleteCommentFromInstagramAccount = /* GraphQL */ `
  mutation DeleteCommentFromInstagramAccount(
    $userId: String!
    $commentId: String!
  ) {
    deleteCommentFromInstagramAccount(userId: $userId, commentId: $commentId) {
      success
      message
      __typename
    }
  }
`;
export const hideCommentFromInstagramAccount = /* GraphQL */ `
  mutation HideCommentFromInstagramAccount(
    $userId: String!
    $commentId: String!
  ) {
    hideCommentFromInstagramAccount(userId: $userId, commentId: $commentId) {
      success
      message
      __typename
    }
  }
`;
export const sendReplyToComment = /* GraphQL */ `
  mutation SendReplyToComment(
    $userId: String!
    $commentId: String!
    $replyContent: String!
  ) {
    sendReplyToComment(
      userId: $userId
      commentId: $commentId
      replyContent: $replyContent
    ) {
      success
      message
      __typename
    }
  }
`;
