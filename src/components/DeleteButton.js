import React from "react";
import { showMyPosts } from "../api";
import { deletePost } from "../api";


const DeleteButton = (props) => {
  const { token, postId, setPostsList, setShowMyPosts } = props;
  async function handleClick(event) {
    event.preventDefault();
    await deletePost(token, postId);
    const data = await showMyPosts(token);
    setPostsList(data);
    setShowMyPosts(false)
  }

  return <button class="btn btn-danger" onClick={handleClick}>Delete</button>;
};

export default DeleteButton;
