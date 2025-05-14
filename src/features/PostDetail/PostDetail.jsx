// Post page with comments. Just the details of the post.
import {useLocation, Link} from 'react-router'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPostDetails} from './postDetailSlice'
import PostComments from './PostComments'
import Post from '../Post/Post'
import TemporaryPost from '../Post/TemporaryPost'
import TemporaryComment from '../PostDetail/TemporaryComment'
import {placeholderGenerator} from '../../utils/placeHolderGenerator'
import { IoChevronBackCircleSharp } from "react-icons/io5";


function PostDetail() {

  const location = useLocation()

  const {fetchPostUrl} = location.state || {}

  const urlToFetch = `https://www.reddit.com${fetchPostUrl}.json`

  const dispatch = useDispatch()

      useEffect(() => {
        if (fetchPostUrl) {
          // https://www.reddit.com/r/all
          //

          dispatch(fetchPostDetails(urlToFetch))
          // dispatch(fetchPostDetails("https://www.reddit.com/r/pics/comments/1khg9o1/waited_until_i_was_45_to_get_a_nice_car_this_dick.json"))
          // console.log('this runs with the fetchPostUrl and runs forward')
        }
      }, [dispatch, fetchPostUrl])







      const {post, comments, error, status} = useSelector(state => state.postDetail)

      const {title, id, score, ups, author, created, url, subreddit, preview, num_comments, over_18, permalink , selftext} = post

      // console.log('posturl: ',fetchPostUrl)
    //   console.log('POST details: ', post)
    console.log('COMMENTS details: ', comments)




  if (status === 'loading' ) {
    return (
      <>
        <TemporaryPost/>
        {placeholderGenerator(<TemporaryComment/>)}
      </>
    )
  }





  return (
        <div className='post-details-card'>
        <Link to='/'>
        <div className='back-button-details'>
          <IoChevronBackCircleSharp />
          <p>Back</p>
        </div>
        </Link>

          <Post
              title={title}
              key={id}
              score={score}
              ups={ups}
              author={author}
              created={created}
              url={url}
              subReddit={subreddit}
              images={preview}
              comments={num_comments}
              over18={over_18}
              permalink={permalink}
              selftext={selftext}
              />
          <PostComments/>
        </div>


  )

}

export default PostDetail
