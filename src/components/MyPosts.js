import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from './EditButton'

const MyPosts = (props) => {
  const { token, setPostsList, posts, setShowMyPosts, setTitle, setDescription, setPrice, setLocation } = props;
  function handleClick(event){
    event.preventDefault;
    setShowMyPosts(false)
  }

  
  return (
    <div  style={{
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "flex-start",
      flexGrow: "1",
      padding: "1.5rem",
    }}>
      <button className="btn btn-secondary btn-sm" style={{margin:"auto"}} onClick = {handleClick}>Hide my Posts</button>
      {
        posts.length === 0 ? <p style={{margin: "auto"}}>You don't have any posts</p> : null
      }
      {posts.map((post, idx) => {
        let postId = post._id;
        let postStatus = post.active;
        return postStatus ? (
          <div key={idx} style={{
            flex: "1 0 2rem",
            marginRight: "12px",
            display: "flex",
            flexDirection: "column",
            padding: "0.5rem",
           
            
          }}>
            <div
              className="card text-white bg-dark mb-3 "
              style={{
                maxWidth: "18rem",
                margin: "auto",
                minWidth: "250px",
                minHeight: "175px",
              }}
            >
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <p className="card-text">{post.location}</p>
                <p className="card-text" style={{ color: "green" }}>
                  {post.price}
                </p>
            <div style={{justifyContent: "space-between", display: "flex"}}>
            <DeleteButton
              setPostsList={setPostsList}
              token={token}
              postId={postId}
              setShowMyPosts={setShowMyPosts}
            />
            <EditButton
              postId={postId}
              title={post.title}
              description={post.description}
              location={post.location}
              price = {post.price}
              setPrice={setPrice}
              setTitle={setTitle}
              setDescription={setDescription}
              setLocation={setLocation}
            />
            </div>
          </div>
          </div>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default MyPosts;
