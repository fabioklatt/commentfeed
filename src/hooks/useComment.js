import { useState } from "react"


export default function useComment(){
    const [comments, setComments] = useState(() => {
        const storedComments = localStorage.getItem("comment")
        if (!storedComments) return []
        return JSON.parse(storedComments)
        
      })

    
    const addComment = ({email, text}) => {
       
        const id = Math.floor(Math.random() * 100000000000)
        const newComment = {id, email, text}
        setComments(currentState => {
          const newState = [newComment, ...currentState]
          localStorage.setItem("comment", JSON.stringify(newState))
          return newState
        })
        
    }

    
    const removeComment = (id) => {
      setComments(currentState => {
        const newState = currentState.filter(comment => comment.id !== id)
        localStorage.setItem("comment", JSON.stringify(newState))
        return newState
      })
    }

    return {comments, removeComment, addComment}

}

