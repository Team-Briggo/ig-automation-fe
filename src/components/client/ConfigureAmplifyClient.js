"use client";

import { Amplify } from "aws-amplify";

const config = {
  Auth: {
    Cognito: {
      region: process.env.NEXT_PUBLIC_AWS_REGION,
      userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
      userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID,
      identityPoolId: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID,
      signUpVerificationMethod: "code",
      loginWith: {
        username: false,
        email: true,
      },
    },
  },
  API: {
    GraphQL: {
      endpoint: process.env.NEXT_PUBLIC_APPSYNC_ENDPOINT,
      region: process.env.NEXT_PUBLIC_AWS_REGION,
      defaultAuthMode: "userPool",
    },
  },
  Storage: {
    S3: {
      bucket: process.env.NEXT_PUBLIC_S3_BUCKET,
      region: process.env.NEXT_PUBLIC_AWS_REGION,
    },
  },
};

Amplify.configure(config, { ssr: true });

export default function ConfigureAmplifyClient() {
  return null;
}
