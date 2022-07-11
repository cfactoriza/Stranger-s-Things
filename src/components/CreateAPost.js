import React from "react";
import NavBar from "./NavBar";
import MakePost from "./makePost";

const CreateAPost = (props) => {
  const { setToken, token, getPosts, setPostsList, setShowMyPosts } = props;
  return (
    <div>
      <NavBar setToken={setToken} token={token} />
      <MakePost
        getPosts={getPosts}
        setToken={setToken}
        setPostsList={setPostsList}
        setShowMyPosts={setShowMyPosts}
        token={token}
      />
    </div>
  );
};

export default CreateAPost;
