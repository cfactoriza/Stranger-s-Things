import React from "react";
import {postMessage} from '../api'

const sendMessage = (props)=> {
    const {token, postId} = props
    async function handleSubmit(event){
        event.preventDefault();
        const content = event.target[0].value;
        postMessage(token, postId, content)
        event.target[0].value = ""

    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Message</label>
            <input type="text" id="content"></input>
            <button >Send Message</button>
        </form>
    )

} 
export default sendMessage