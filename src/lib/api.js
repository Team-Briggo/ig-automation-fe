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
        instagramUsername
        instagramUserId
        instagramDetails {
          profilePictureUrl
          username
          name
          accountType
          followersCount
          followsCount
          mediaCount
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;

export const linkInstagramAccount = /* GraphQL */ `
  mutation LinkInstagramAccount($input: LinkInstagramAccountInput!) {
    linkInstagramAccount(input: $input) {
      status
      message
      __typename
    }
  }
`;
