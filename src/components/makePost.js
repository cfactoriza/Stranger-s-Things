import React from "react";
import { createPost } from "../api";

const MakePost = (props) => {
  const { token, getPosts, setPostsList, setShowMyPosts } = props;
  async function handleSubmit(event) {
    event.preventDefault();
    const title = event.target[0].value;
    const description = event.target[1].value;
    const price = event.target[2].value;
    await createPost(token, title, description, price);
    event.target[0].value = "";
    event.target[1].value = "";
    event.target[2].value = "";
    setShowMyPosts(false)
  }

  return (
    <form onSubmit={handleSubmit}style={{
      display: "flex",
      justifyContent: "center"
    }}>
  <div
              className="card text-white bg-dark mb-3 "
              style={{
                maxWidth: "18rem"
              }}
            >
              <div className="card-header">{localStorage.getItem("username")}</div>
              <div className="card-body" style={{textAlign: "center"}}>
                <p className="card-text"><input id="title" placeholder="Type Title here..."></input></p>
                <p className="card-text"><input id="description" placeholder="Type Description here..."></input></p>
                <p className="card-text">
                <input id="price" placeholder="Type price here..."></input>
                </p>
                <button className="btn btn-secondary btn-sm" type="submit">Create Post</button>
              </div>
            </div>
    </form>
  );
};

export default MakePost;

