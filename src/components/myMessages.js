import React, { useState, useEffect } from "react";
import { showMyMessages } from "../api";

const MyMessages = (props) => {
  const { token, posts } = props;
  const [messages, setMessages] = useState([]);
  const [sentMessages, setSentMessages] = useState([]);
  const [receivedMessages, setReceivedMessages] = useState([]);
  let myId = "";

  useEffect(() => {
    async function getMyInfo() {
      const data = await showMyMessages(token);
      myId = data._id;
      const messages = data.messages;
      setMessages(messages);
      const messagesFromMe = messages.filter(
        (item) => item.fromUser._id === myId
      );
      setSentMessages(messagesFromMe);
      const messagesToMe = messages.filter(
        (item) => item.fromUser._id !== myId
      );
      setReceivedMessages(messagesToMe);
    }
    getMyInfo();
  }, []);

  return (
    <div>
      <h4 style={{paddingLeft: "2rem"}}>Messages to Me</h4>
      <div className="list-group">
      {
        receivedMessages.length === 0 ? <p style={{marginLeft: "2rem"}}>You don't have any messages</p> : null
      }
        {receivedMessages.map((message, idx) => {
          return (
            <div key={idx}>
                <a href="#" className="list-group-item list-group-item-action" aria-current="true">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">From: {message.fromUser.username}</h5>
              </div>
              <p className="mb-1">{message.content}</p>
              <small>
                <b>Post:</b> {message.post.title}
              </small>
              </a>
            </div>
          );
        })}
      </div>
      <h4 style={{paddingLeft: "2rem"}}>Messages From Me</h4>
      <div className="list-group">
      {
        sentMessages.length === 0 ? <p style={{marginLeft: "2rem"}}>You haven't sent any messages</p> : null
      }
      {sentMessages.map((message, idx) => {
        return (
          <div key={idx}>
            <a href="#" className="list-group-item list-group-item-action" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
              </div>
              <small>
                <b>Post:</b> {message.post.title}
              </small>
              <p className="mb-1">Message: {message.content}</p>
              
            </a>
          </div>
        );
      })}</div>
    </div>
  );
};

export default MyMessages;
