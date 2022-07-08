import React, { useState, useEffect } from "react";
import {showMyMessages} from '../api'

const MyMessages = (props) => {
    const {token, posts} = props
    const [messages, setMessages] = useState([])
    const [sentMessages, setSentMessages] = useState([])
    const [receivedMessages, setReceivedMessages] = useState([])
    let myId = ""

    useEffect(()=>{
        async function getMyInfo(){
            const data = await showMyMessages(token)
            myId = data._id
            const messages = data.messages
            setMessages(messages)
            const messagesFromMe = messages.filter(item => item.fromUser._id === myId)
            setSentMessages(messagesFromMe)
            const messagesToMe = messages.filter(item => item.fromUser._id !== myId)
            setReceivedMessages(messagesToMe)
            
        }
        getMyInfo()
    }, [])
     
    

    return (
    <div> 
        <h1>Messages to Me</h1>
        {
            receivedMessages.map((message, idx)=>{
                return (
                    <div key={idx}>
                        <h3>From: {message.fromUser.username}</h3>
                        <p>{message.content}</p>
                        <p><b>Post:</b> {message.post.title}</p>
                    </div>
                )
            })
        }
        <h1>Messages From Me</h1>
        {
            sentMessages.map((message, idx)=>{
                return (
                    <div key={idx}>
                        <p>{message.content}</p>
                        <p><b>Post:</b> {message.post.title}</p>
                    </div>
                )
            })
        }
    </div>
    )
}


export default MyMessages;