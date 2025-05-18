//  Renders the posts. Posts container
import {useEffect} from 'react'
import Post from '../Post/Post'
import {useSelector, useDispatch} from 'react-redux'
import {fetchAll} from '../../features/menuSlices/allSlice'
import {fetchPopular} from '../../features/menuSlices/popularSlice'
import {fetchAmazing} from '../../features/menuSlices/amazingSlice'
import {fetchSearch} from '../menuSlices/searchSlice'
import TemporaryPost from '../Post/TemporaryPost'
import {placeholderGenerator} from '../../utils/placeHolderGenerator'
import {useLocation} from 'react-router'


function Posts() {
  const dispatch = useDispatch()
  const active = useSelector(state => state.active)
  const {status} = useSelector(state=> state.all)
  const amazingStatus = useSelector(state=> state.amazing.status)
  const popularStatus = useSelector(state=> state.popular.status)
  const searchStatus = useSelector(state=> state.search.status)

  // getting the search params. The routing happened when the user clicked to search
  const location = useLocation()
  const query = new URLSearchParams(location.search).get('q')

  // const {error} = useSelector(state=> state.all)
  // const amazingError = useSelector(state=> state.amazing.error)
  // const popularError = useSelector(state=> state.popular.error)
  // const searchError = useSelector(state=> state.search.error)


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
    /* checking is there a query */
    else if (active === 'search' && query) {
      dispatch(fetchSearch(query))
    }

  }, [active, dispatch, query])

  // chaining. state[active] -> returns all, amazing, popular state.
  const activePosts = useSelector(state => {
    return state[active]?.posts ?? []
  })


  console.log(query)




  if (status === 'loading' || amazingStatus === 'loading'|| popularStatus === 'loading' || searchStatus === 'loading') {

    return placeholderGenerator(<TemporaryPost />)
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
