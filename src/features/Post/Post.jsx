// Renders a single post.
import {Link} from 'react-router'


function Post({
  title,
  score,
  ups,
  author,
  created,
  url,
  subReddit,
  images,
  over18,
  comments,
  permalink,
}) {

  return (
    <div className="post-card">
      <Link to={`/:${score}`} state={{fetchPostUrl: permalink}}>
      <h3>{title}</h3>
      <p>
        in /🌐{subReddit} by 🤵🏻{author}, 2 hours ago...
      </p>
      <img className="post-image" src={url} alt="" />
    </Link>
      <div className="post-buttons">
        <div className="likes">
          <p>👍🏻{ups}👎🏻</p>
        </div>
        <Link to={`/:${score}`} state={{fetchPostUrl: permalink}}>
        <p>🗨️ ({comments})</p>
        </Link>
        <a href={url} target="_blank">
          Share 🔗
        </a>
      </div>
    </div>
  );
}

export default Post;
