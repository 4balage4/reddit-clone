import { getAccessToken } from "./_utils.js";

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
