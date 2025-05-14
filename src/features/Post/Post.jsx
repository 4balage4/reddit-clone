// Renders a single post.
import {Link} from 'react-router'
import { getPostDate } from '../../utils/postDateConverter';
import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineThumbDownAlt } from "react-icons/md";
import { MdOutlineLink } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";


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
  selftext
}) {


  return (
    <div className="post-card">
      <Link to={`/:${score}`} state={{fetchPostUrl: permalink}}>
      <h3>{title}</h3>
      <div className='post-details'>
        <p className='created-author'>
          in /🌐{subReddit}
          </p>
          <p>
            posted by <span className='post-author'> {author}</span>
            <span> • {getPostDate(created)} </span>
            </p>
      </div>
      <div className='post-details'>
        <p>{selftext}</p>
      </div>
      <div className='post-image-container'>
      <img className="post-image" src={url} alt="" />
      </div>
    </Link>
      <div className="post-buttons">
        <div className="likes">
          <div className='like-container'>
            <MdOutlineThumbUp />
             <p>
              {ups}
              </p>
            <MdOutlineThumbDownAlt />
            </div>
        </div>
        <Link to={`/:${score}`} state={{fetchPostUrl: permalink}}>
        <p className='post-comment-container'><AiOutlineComment/> ({comments})</p>
        </Link>
        <a href={url} target="_blank">
         <MdOutlineLink/>
         share
        </a>
      </div>
    </div>
  );
}

export default Post;
