// Renders a single post.
import {Link} from 'react-router'
import { getPostDate } from '../../utils/postDateConverter';
import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineThumbDownAlt } from "react-icons/md";
import { MdOutlineLink } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
import {useToast} from '../../components/ToastNotification/ToastProvider'
import {useSelector} from 'react-redux'


function Post({
  id,
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
  selftext,
  disabledToClick
}) {

 const active = useSelector(state => state.active)



  const {addToast} = useToast()

  return (
    <div className="post-card">
      <Link to={disabledToClick ? '' : `${id}`} state={{postId: id, sub: subReddit}}>
        <p className='created-in'>
          in /🌐{subReddit}
          </p>
      <h3>{title}</h3>
      <div className='post-details'>
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
            {/* style in the index */}

            <MdOutlineThumbUp className='thumb-up' onClick={() => {addToast("You liked the post but only locally", "success" )}} />
             <p>
              {ups}
              </p>
            <MdOutlineThumbDownAlt className='thumb-down'onClick={() => {addToast("You disliked the post but only locally", "alert" )}} />
            </div>
        </div>
        <Link to={disabledToClick ? '' : `${id}`} state={{postId: id}}>
        <p className='post-comment-container'><AiOutlineComment/> {comments}</p>
        </Link>
        <a href={url} target="_blank" >
         <MdOutlineLink/>
         Reddit
        </a>
      </div>
    </div>
  );
}

export default Post;
