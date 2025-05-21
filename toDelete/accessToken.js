
let cachedToken = null;
let tokenExpiresAt = 0;



async function getAccessToken() {

  const now = Date.now();

 if (cachedToken && now < tokenExpiresAt) {
    return cachedToken;
  }

  const auth = Buffer.from(`${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_SECRET_ID}`).toString('base64');

  const response = await fetch('https://www.reddit.com/api/v1/access_token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=password&username=${process.env.REDDIT_USERNAME}&password=${process.env.REDDIT_PASSWORD}`,
  });

  const data = await response.json();

  if (!data.access_token) {
    throw new Error(`Failed to get token: ${JSON.stringify(data)}`);
  }


  // the token will be refreshed to the cashed
  //
  cachedToken = data.access_token
  tokenExpiresAt = now + (data.expires_in * 1000) - 10000


  return cachedToken;
}


export {getAccessToken}
