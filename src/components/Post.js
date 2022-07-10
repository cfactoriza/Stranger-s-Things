import React, { useState } from "react";
import Messages from "./Messages";

const Post = (props) => {
  const { posts, token } = props;

  return (
    <div
      style={{
        backgroundColor: "#000514",
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/grey-washed-wall.png")',
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "flex-start",
        flexGrow: "1",
        padding: "1.5rem",
      }}
    >
      {posts.map((post, idx) => {
        let postId = post._id;
        let ownerStatus = false;

        if (token) {
          const owner = localStorage.getItem("username");
          if (post.author.username === owner) {
            ownerStatus = true;
          }
        }
        return (
          <div
            key={postId}
            style={{
              flex: "1 0 2rem",
              marginRight: "12px",
              display: "flex",
              flexDirection: "column",
              padding: "0.5rem",
              minWidth: "250px",
              minHeight: "250px",
            }}
          >
            <div
              className="card text-white bg-dark mb-3 "
              style={{
                maxWidth: "18rem",
              }}
            >
              <div className="card-header">{post.author.username}</div>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <p className="card-text" style={{ color: "green" }}>
                  {post.price}
                </p>
                {token && !ownerStatus ? (
                  <Messages token={token} postId={postId} />
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;

{
  /* <section>
          <div key={postId}>
            <h1>{post.title}</h1>
            <h3>{post.description}</h3>
            <h3>{post.price}</h3>
            {token && !ownerStatus ? 
            <Messages token={token} postId={postId}/>
            :null}
          </div>
          </section> */
}
{
  /* <div class="list-group list-group-light">
  <a
    href="#"
    class="list-group-item list-group-item-action px-3 border-0 active ripple"
    aria-current="true"
    >Ripple</a
  >
  <a
    href="#"
    class="list-group-item list-group-item-action px-3 border-0 ripple"
    >Dapibus ac facilisis in</a
  >
  <a
    href="#"
    class="list-group-item list-group-item-action px-3 border-0 ripple"
    >Morbi leo risus</a
  >
  <a
    href="#"
    class="list-group-item list-group-item-action px-3 border-0 ripple"
    >Porta ac consectetur ac</a
  >
</div> */
}
