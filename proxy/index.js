import dotenv from 'dotenv';

 dotenv.config({ path: 'proxy/.env' });

import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';


const app = express();
const PORT = 3000;

app.use(cors());

app.use((req, res, next) => {
  console.log(`[REQ] ${req.method} ${req.url}`);
  next();
});


async function getAccessToken() {
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

  return data.access_token;
}

app.get('/reddit/search', async (req, res) => {

  try {
    const token = await getAccessToken();

    const query = req.query.q;

    if (!query) {

      return res.status(400).json({ error: 'Missing search query' });
    }

    const redditRes = await fetch(`https://oauth.reddit.com/search?q=${encodeURIComponent(query)}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': 'web:PicDit:v1.0 (by /u/balage4)',
      },
    });

    const data = await redditRes.json();

    res.json(data);

  } catch (err) {

    res.status(500).json({ error: 'Reddit search failed', message: err.message });
  }
});


app.get('/reddit/:subreddit', async (req, res) => {
  try {
    const token = await getAccessToken();
    const { subreddit } = req.params;

    const redditRes = await fetch(`https://oauth.reddit.com/r/${subreddit}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': 'web:PicDit:v1.0 (by balage4)',
      },
    });

    const data = await redditRes.json();
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Reddit API call failed', message: err.message });
  }
});







app.listen(PORT, () => {
  console.log(`🚀 Reddit proxy running at http://localhost:${PORT}`);
});
