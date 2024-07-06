

 export default function Game({email, text, onRemove}){
    return (
        <div>
            <h3>{email}</h3>
            <p>{text}</p>
            <button onClick={onRemove}>remove</button>
          </div>
    )
 }