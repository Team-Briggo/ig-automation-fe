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
