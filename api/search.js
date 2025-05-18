export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Missing search query 'q'" });
  }

  try {
    const redditRes = await fetch(
      `https://www.reddit.com/search.json?q=${encodeURIComponent(q)}`,
      {
        headers: {
          "User-Agent": "reddit-clone-app/1.0"
        }
      }
    );

    const contentType = redditRes.headers.get("content-type");
    const status = redditRes.status;

    if (!redditRes.ok) {
      const text = await redditRes.text();
      console.error("Reddit response not ok:", { status, contentType, text });
      return res.status(500).json({
        error: `Reddit API failed`,
        status,
        contentType,
        message: text
      });
    }

    const data = await redditRes.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error("Reddit fetch error:", err.message);
    return res.status(500).json({
      error: "Failed to fetch from Reddit",
      details: err.message
    });
  }
}
