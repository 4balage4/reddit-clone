import React from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";

function PostComments() {
  const { comments } = useSelector((state) => state.postDetail);

  if (!comments || comments.length === 0) {
    return <div> No comments yet</div>;
  }


  // const renderComments = (commentList) => commentList.map((comment) => {
  //   const {id, author, ups, body, created, reply } = comment.data
  //   return (
  //     <div style={{background: 'gray'}}>
  //       <Comment
  //       key={id}
  //       author={author}
  //       ups={ups}
  //       body={body}
  //       created={created}
  //       />
  //       {/* I do reply, because, I am passing in a new array of comments. If reply returns true
  //       I have a comments array
  //       if reply returns false, does not do anything.
  //        */}
  //       {Array.isArray(reply) && reply.length > 0 && (
  //         <div style={{margin: "15px 10px", backgroundColor: 'blue'}}>
  //           {renderComments(reply)}
  //         </div>
  //       )}
  //     </div>
  //   )
  // });

  const renderComments = commentList => {


    return commentList
    // I filter out the ones which are not 't1', because every comment has a .kind === 'more'. Which is an empty
    .filter((comment) => comment.kind === 't1')
    .map(comment => {
      const {
        id,
        author,
        ups,
        body,
        created_utc,
        replies
      } = comment.data;


      return (
        <div key={id} className='whole-comment-container'>
          <Comment
            author={author}
            ups={ups}
            body={body}
            created={created_utc}
            replies={replies ? true : false}
            replies_id={replies.data?.children[0].data.id}
          />
          {/* if replies exist and there is an array conditionally render this */}
          {replies && Array.isArray(replies.data?.children) > 0  && (

            // style is in the Comment
            //
            <div id={replies.data?.children[0].data.id} className="sub-comments  hidden">
              {renderComments(replies.data.children)}
            </div>
          )}
        </div>
      );
    });
  };


  // console.log(commentsArray)

  return <div className="comments-container">
    {renderComments(comments)}
    </div>;
}

export default PostComments;
