import {getAccessToken} from './accessToken'


app.get('/reddit/search', async (req, res) => {

  try {
    const token = await getAccessToken();
    console.log('🟢 Got access token:', token.slice(0, 10)); // show part of token

    const query = req.query.q;
    console.log('🔍 Query:', query);

    if (!query) {
      console.log('⛔ Missing query');
      return res.status(400).json({ error: 'Missing search query' });
    }

    const redditRes = await fetch(`https://oauth.reddit.com/search?q=${encodeURIComponent(query)}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': 'web:PicDit:v1.0 (by /u/balage4)',
      },
    });

    const data = await redditRes.json();
    console.log('✅ Reddit search response received');
    res.json(data);

  } catch (err) {
    console.error('❌ Search error:', err.message);
    res.status(500).json({ error: 'Reddit search failed', message: err.message });
  }
});
