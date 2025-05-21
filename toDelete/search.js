import {getAccessToken} from './accessToken'


export default async function handler(req, res) {
// '/reddit/search
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
    console.error('❌ Search error:', err.message);
    res.status(500).json({ error: 'Reddit search failed', message: err.message });
  }
};
