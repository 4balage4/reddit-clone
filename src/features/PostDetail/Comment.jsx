import {useState} from 'react'
import Button from '../../components/Button'
import {getPostDate} from '../../utils/postDateConverter'
import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineThumbDownAlt } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
import {useToast} from '../../components/ToastNotification/ToastProvider'


// contain the 3 information of the poster, text, time. That is it.
// also should contain the likes-dislikes. comment.data.ups.
// have the styling

function Comment({author, ups, body, replies, created, replies_id}) {
  const [show, setShow] = useState(false)

  const {addToast} = useToast()


  getPostDate(created)

 function handleClick(id) {
    const comment = document.getElementById(id)
    comment.classList.toggle('hidden')
    setShow(prev => !prev)
 }


  return (
    <div className='comment-container'>
      <div className='header-comment'>
        <p>by <span className='comment-author-text'>{author}</span> •
        <span className='ago'> {getPostDate(created)}</span>
         </p>
         <div className='comment-header-line'></div>
      </div>
      <p className='comment-body'>{body}</p>
    <div className='comment-social'>
      <div className='comment-section-likes '>

      <MdOutlineThumbUp className='thumb-up' onClick={() => {addToast("You liked this comment but only locally", "success" )}} />
             <p>
              {ups}
              </p>
            <MdOutlineThumbDownAlt className='thumb-down'onClick={() => {addToast("You disliked this comment but only locally", "alert" )}} />
        </div>
      {replies_id &&
        <Button className={`show-replies ${!show ? '' : 'active'}`} onClick={() => handleClick(replies_id)} >{!show ? 'Show replies' : "Hide replies"} <AiOutlineComment />
</Button>
      }
    </div>
    </div>
  )
}

export default Comment





{/* <p>
{ comment.data.body}
 </p>
 <p>
 {comment.data.author}
 </p>
 <p>
 {comment.data.replies?.data.children.length ?? 'no data'}
 </p> */}
