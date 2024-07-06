import { useState } from "react"

 export default function NewCommentForm({addComment}){

    const [email, setEmail] = useState("")
    const [text, setText] = useState("")

    const handleSubmit = (ev) => {
      ev.preventDefault()
       if (email == "" || text == "") {
         alert('Fill in the blanks')
       } else { 
        addComment({email, text})
        setEmail("")
        setText("")
       }

      
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
        <h2>COMMENT SECTION</h2>
        <div className="email">
         <label htmlFor="email">E-mail </label>
         <input 
         type="email"
         value={email} 
         onChange={(event) => setEmail(event.target.value) }
         />
        </div>
        <div className="comment">
         <label htmlFor="comment">Comment </label>
         <textarea 
           name="text" 
           id="text" 
           cols="50" 
           rows="10"
           value={text}
           onChange={(event) => setText(event.target.value)}
           >
         </textarea>
        </div>
       
        <button type="submit">SEND</button>
      </form>
    )
 }