export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Missing search query 'q'" });
  }

  try {
    console.log(`https://www.reddit.com/search.json?q=${encodeURIComponent(q)}`,
      )


      // ${encodeURIComponent(q)}
    const redditRes = await fetch(
      `https://www.reddit.com/search.json?q=banana`,
      {
        headers: {
          "User-Agent": "reddit-clone-app/1.0 (by /u/yourusername)"
        }
      }

    );

    if (!redditRes.ok) {
      const text = await redditRes.text();
      return res.status(500).json({
        error: `Reddit API failed`,
        status: redditRes.status,
        message: text
      });
    }

    const data = await redditRes.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch from Reddit",
      details: err.message
    });
  }
}
