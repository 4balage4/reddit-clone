import React from 'react'
import Button from '../../components/Button'

// contain the 3 information of the poster, text, time. That is it.
// also should contain the likes-dislikes. comment.data.ups.
// have the styling

function Comment({author, ups, body, replies, created, replies_id}) {
  const [show, setShow] = React.useState(false)

  const getPostDate = (created) => {
    const date = Date.now() / 1000
    let ago = date - created

    const minutes = Math.floor(ago / 60)
    const hours = Math.floor(minutes/60)
    const days = Math.floor(hours/24)
    const months = Math.floor(days/30)
    const years = Math.floor(months/12)

    if (minutes < 60 && minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    if (hours < 24 && hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`
    if (days < 30 && days > 0) return  `${days} day${days > 1 ? 's' : ''} ago`
    if (months < 12 && months > 0) return `${months} month${months > 1 ? 's' : ''} ago`
    if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`
 }


 function handleClick(id) {
    const comment = document.getElementById(id)
    comment.classList.toggle('hidden')
    setShow(prev => !prev)
 }

  return (
    <div className='comment-container'>
      <div className='header-comment'>
        <p>{author}</p>
        <p>💬 "{getPostDate(created)}"</p>
      </div>
      <p>{body}</p>
    <div className='comment-social'>
      <p>👍🏻 {ups} 👎🏻</p>
      {replies_id &&
        <Button className='show-replies' onClick={() => handleClick(replies_id)} >{!show ? 'Show replies' : "Hide replies"}</Button>
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
