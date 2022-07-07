import React from "react";
import { getPosts } from "../api";
import DeleteButton from "./DeleteButton";

const fetchMyPosts = (props) => {
  const { setShowMyPosts, token, setPostsList, posts } = props;

  async function handleClick() {
    await getPosts()
      .then((posts) => {
        setPostsList(posts.data.posts);
      })
      .catch((error) => {
        console.log("There was an error", error);
      });
    setShowMyPosts(false);
  }

  return (
    <div>
      Show My Posts
      <button onClick={handleClick}>Show all Posts</button>
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
            />
          </div>
        ) : null;
      })}
    </div>
  );
};

export default fetchMyPosts;
