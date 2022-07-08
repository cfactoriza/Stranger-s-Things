import React from "react";
import { showMyPosts } from "../api";
import Messages from "./Messages";

const Post = (props) => {
  const { posts, setShowMyPosts, token, setPostsList } = props;

  async function handleClick() {
    const data = await showMyPosts(token);
    setPostsList(data);
    setShowMyPosts(true);
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={handleClick}>Show my Posts</button>
      {posts.map((post, idx) => {
        let postId = post._id;
        return (
          <div key={postId}>
            <h3>{post.title}</h3>
            <h4>{post.description}</h4>
            <p>{post.price}</p>
            <Messages token={token} postId={postId}/>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
