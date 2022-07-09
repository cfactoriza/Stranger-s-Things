import React from "react";
import { showMyPosts } from "../api";
import { deletePost } from "../api";


const DeleteButton = (props) => {
  const { token, postId, setPostsList } = props;
  async function handleClick(event) {
    event.preventDefault();
    await deletePost(token, postId);
    const data = await showMyPosts(token);
    setPostsList(data);
  }

  return <button onClick={handleClick}>Delete</button>;
};

export default DeleteButton;
