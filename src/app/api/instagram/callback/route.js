export async function POST(req) {
  try {
    const { code } = await req.json();

    // Step 1: Exchange code for short-lived token
    const tokenResponse = await fetch(
      "https://api.instagram.com/oauth/access_token",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID,
          client_secret: process.env.NEXT_PUBLIC_INSTAGRAM_APP_SECRET,
          grant_type: "authorization_code",
          redirect_uri: process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI,
          code,
        }),
      }
    );

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json();
      console.error("Instagram token exchange error:", errorData);
      return new Response(
        JSON.stringify({ error: "Failed to exchange code for token" }),
        { status: 400 }
      );
    }

    const tokenData = await tokenResponse.json();

    // Step 2: Exchange short-lived token for long-lived token
    const longLivedTokenResponse = await fetch(
      `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTAGRAM_APP_SECRET}&access_token=${tokenData.access_token}`
    );

    if (!longLivedTokenResponse.ok) {
      const errorData = await longLivedTokenResponse.json();
      console.error("Instagram long-lived token error:", errorData);
      return new Response(
        JSON.stringify({ error: "Failed to get long-lived token" }),
        { status: 400 }
      );
    }

    const longLivedTokenData = await longLivedTokenResponse.json();

    // Save the token in DB
    return new Response(JSON.stringify(longLivedTokenData), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
