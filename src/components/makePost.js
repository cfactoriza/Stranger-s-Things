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
    <div style={{backgroundImage: 'url("https://www.ivins.com/wp-content/uploads/2017/02/website-design-background.png")', minHeight: "900px", minWidth: "1000px"}}>
    <form onSubmit={handleSubmit}style={{
      display: "flex",
      justifyContent: "center"
    }}>
  <div
              className="card text-white bg-dark mb-3 "
              style={{
                minWidth: "400px",
                minHeight: "350px",
                marginTop: "5rem",
                textAlign: "center"
              }}
            >
                <h5 style={{textAlign: "center", marginTop: "1rem"}}>Post your item to sell</h5>
              <div className="card-header">{localStorage.getItem("username")}</div>
              <div className="card-body">
                <p className="card-text"><input className="form-control" id="title" placeholder="Type Title here..."></input></p>
                <p className="card-text"><input className="form-control" id="description" placeholder="Type Description here..."></input></p>
                <p className="card-text">
                <input id="price" placeholder="Type price here..." className="form-control"></input>
                </p>
                <button className="btn btn-secondary btn-sm" style={{marginTop: "2rem"}} type="submit">Create Post</button>
              </div>
            </div>
    </form>
    </div>
  );
};

export default MakePost;

