import { useState } from "react"
import Card from "./shared/Card"

function FeedbackForm(){

    const[text,setText] = useState('')

    const handleTextChange = (e) =>{
        setText(e.target.value)
    }
    return(
        <Card>
            <form>
                <h2>How wOuld you Rate your service with us?</h2>
                <div className="input-group">
                    <input onchange={handleTextChange} type="text" placeholder="Write a Review" value={text}  ></input>
                    <button type="submit">Send</button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm