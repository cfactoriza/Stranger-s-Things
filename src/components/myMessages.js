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
    //         <div class="list-group">
    //   <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    //     <div class="d-flex w-100 justify-content-between">
    //       <h5 class="mb-1">List group item heading</h5>
    //       <small>3 days ago</small>
    //     </div>
    //     <p class="mb-1">Some placeholder content in a paragraph.</p>
    //     <small>And some small print.</small>
    //   </a>
    //   <a href="#" class="list-group-item list-group-item-action">
    //     <div class="d-flex w-100 justify-content-between">
    //       <h5 class="mb-1">List group item heading</h5>
    //       <small class="text-muted">3 days ago</small>
    //     </div>
    //     <p class="mb-1">Some placeholder content in a paragraph.</p>
    //     <small class="text-muted">And some muted small print.</small>
    //   </a>
    //   <a href="#" class="list-group-item list-group-item-action">
    //     <div class="d-flex w-100 justify-content-between">
    //       <h5 class="mb-1">List group item heading</h5>
    //       <small class="text-muted">3 days ago</small>
    //     </div>
    //     <p class="mb-1">Some placeholder content in a paragraph.</p>
    //     <small class="text-muted">And some muted small print.</small>
    //   </a>
    // </div>
    <div>
      <h4 style={{paddingLeft: "2rem"}}>Messages to Me</h4>
      <div class="list-group">
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
      <div class="list-group">
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
