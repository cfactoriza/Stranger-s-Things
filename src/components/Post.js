import React from "react";
import Messages from "./Messages";

const Post = (props) => {
  const { posts, token } = props;

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post, idx) => {
        let postId = post._id;
        let ownerStatus = false

        if (token) {
          const owner = localStorage.getItem("username")
        if (post.author.username === owner){
          ownerStatus = true
        }
        }
        return (
          <div key={postId}>
            <h3>{post.title}</h3>
            <h4>{post.description}</h4>
            <p>{post.price}</p>
            {token && !ownerStatus ? 
            <Messages token={token} postId={postId}/>
            :null}
            
          </div>
        );
      })}
    </div>
  );
};

export default Post;
