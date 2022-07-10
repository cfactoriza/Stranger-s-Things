import React from "react";
import {postMessage} from '../api'

const sendMessage = (props)=> {
    const {token, postId} = props
    async function handleSubmit(event){
        event.preventDefault();
        const content = event.target[0].value;
        postMessage(token, postId, content)
        event.target[0].value = ""
        alert("Your message has been sent.")
    }
    return(
        <form onSubmit={handleSubmit}>
            <label style={{color: "#D3D3D3", fontSize: "14px"}}>Send a message</label>
            <div className="input-group input-group-sm mb-3">
            <input  className="form-control" type="text" style={{paddingBottom: "0.5rem"}}></input>
            </div>
            <button className="btn btn-secondary btn-sm" >Send</button>
        </form>
    )

} 
export default sendMessage