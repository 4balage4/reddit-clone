
// this is a function to pass the CORS

export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Missing search query `q`" });
  }

  try {
    const redditRes = await fetch(`https://www.reddit.com/search.json?q=${encodeURIComponent(q)}`);
    const data = await redditRes.json();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch from Reddit", details: err.message });
  }
}
