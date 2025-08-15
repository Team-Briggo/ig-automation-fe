import { generateClient } from "@aws-amplify/api";
import { linkInstagramAccount, manageUser } from "./api";

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
