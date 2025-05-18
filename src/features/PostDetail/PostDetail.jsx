// Post page with comments. Just the details of the post.
import { useLocation, useNavigate, Navigate } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostDetails } from "./postDetailSlice";
import PostComments from "./PostComments";
import Post from "../Post/Post";
import TemporaryPost from "../Post/TemporaryPost";
import TemporaryComment from "../PostDetail/TemporaryComment";
import { placeholderGenerator } from "../../utils/placeHolderGenerator";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import Button from "../../components/Button";

function PostDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  const { fetchPostUrl } = location.state || {};

  const urlToFetch = `https://www.reddit.com${fetchPostUrl}.json`;

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchPostUrl) {
      dispatch(fetchPostDetails(urlToFetch));
    }
  }, [dispatch, fetchPostUrl]);

  const { post, comments, error, status } = useSelector(
    (state) => state.postDetail
  );

  const {
    title,
    id,
    score,
    ups,
    author,
    created,
    url,
    subreddit,
    preview,
    num_comments,
    over_18,
    permalink,
    selftext,
  } = post;

  if (status === "loading") {
    return (
      <>
        <TemporaryPost />
        {placeholderGenerator(<TemporaryComment />)}
      </>
    );
  }



  // if (!id) {
  //   return <Navigate to='/not-found'/>
  // }

  return (
    <div className="post-details-card">
      <Button className="back-button-details" onClick={() => navigate(-1)}>
        <IoChevronBackCircleSharp />
        back
      </Button>

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
        disabledToClick={true}
      />
      <PostComments />
    </div>
  );
}

export default PostDetail;
