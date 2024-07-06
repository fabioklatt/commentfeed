
import useComment from "./hooks/useComment"
import NewCommentForm from "./components/NewCommentForm"
import Comment from "./components/Comment"

export default function App(){

  const {comments, removeComment, addComment} = useComment()

  
  return(
    <div className="container">
      <NewCommentForm addComment={addComment}/>
      <div id="commentFeed">
        {comments.map(comment => (
          <Comment
            key={comment.id}
            email={comment.email}
            text={comment.text}
            onRemove={() => removeComment(comment.id)}
          />

        ))}
      </div>
    </div>
  )
}
