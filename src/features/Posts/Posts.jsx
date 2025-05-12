//  Renders the posts. Posts container
import {useEffect} from 'react'
import Post from '../Post/Post'
import {useSelector, useDispatch} from 'react-redux'
import {fetchAll} from '../../features/menuSlices/allSlice'
import {fetchPopular} from '../../features/menuSlices/popularSlice'
import {fetchAmazing} from '../../features/menuSlices/amazingSlice'
import TemporaryPost from '../Post/TemporaryPost'
import {placeholderGenerator} from '../../utils/placeHolderGenerator'


function Posts() {
  const dispatch = useDispatch()
  const active = useSelector(state => state.active)
  const {status} = useSelector(state=> state.all)
  const amazingStatus = useSelector(state=> state.amazing.status)
  const popularStatus = useSelector(state=> state.popular.status)


  // here is the problem, somehow the popular and the amazing does not work

  useEffect(() => {
    if (active === 'popular') {
      dispatch(fetchPopular())

    }
    else if (active === 'all') {
      dispatch(fetchAll())
    }
    else if (active === 'amazing') {
      dispatch(fetchAmazing())

    }
  }, [active, dispatch])

  // chaining. state[active] -> returns all, amazing, popular state.
  const activePosts = useSelector(state => {
    return state[active]?.posts ?? []
  })




  if (status === 'loading' || amazingStatus === 'loading'|| popularStatus === 'loading') {

    return placeholderGenerator(<TemporaryPost/>)
  }


  return (
    <div className='posts-container'>
      {activePosts?.map((post) => {

        if (post.is_video) {
          return ;
        }
        if ( !post.preview?.enabled) {
          return ;
        }
        if (post.post_hint !== 'image') {
          return ;
        }
        // console.log(post.title, post.permalink)
        return (
          <Post title={post.title}
          key={post.id}
          score={post.score}
          ups={post.ups}
          author={post.author}
          created={post.created}
          url={post.url}
          subReddit={post.subreddit}
          images={post.preview}
          comments={post.num_comments}
          over18={post.over_18}
          permalink={post.permalink}
          />
        )
      })}
    </div>
  )
}

export default Posts
