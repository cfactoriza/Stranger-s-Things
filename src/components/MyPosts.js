import React from "react";
import DeleteButton from "./DeleteButton";


const MyPosts = (props) => {
  const { token, setPostsList, posts, setShowMyPosts } = props;
  function handleClick(event){
    event.preventDefault;
    setShowMyPosts(false)
  }

  
  return (
    <div>
      <button onClick = {handleClick}>Hide my Posts</button>
      {posts.map((post, idx) => {
        let postId = post._id;
        let postStatus = post.active;
        return postStatus ? (
          <div key={idx}>
            <h3>{post.title}</h3>
            <h4>{post.description}</h4>
            <p>{post.price}</p>
            <DeleteButton
              setPostsList={setPostsList}
              token={token}
              postId={postId}
              setShowMyPosts={setShowMyPosts}
            />
          </div>
        ) : null;
      })}
    </div>
  );
};

export default MyPosts;
