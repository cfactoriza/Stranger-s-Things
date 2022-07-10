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
          <section>
          <div key={postId}>
            <h1>{post.title}</h1>
            <h3>{post.description}</h3>
            <h3>{post.price}</h3>
            {token && !ownerStatus ? 
            <Messages token={token} postId={postId}/>
            :null}
          </div>
          </section>
          
        );
      })}
    </div>
  );
};

export default Post;
{/* <div class="list-group list-group-light">
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
</div> */}
