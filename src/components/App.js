import React, { useState, useEffect } from "react";
import {BrowserRouter, Route, Link, NavLink, Routes} from 'react-router-dom';
import Post from "./Post";
import Register from "./Register";
import Login from "./Login";
import MakePost from "./makePost";
import MyPosts from "./MyPosts";
import MyMessages from "./myMessages";
import SearchForm from "./SearchForm";
import NavBar from "./NavBar"

import { getPosts } from "../api";
import Logout from "./Logout";

const App = () => {
  const [posts, setPostsList] = useState([]);
  const [token, setToken] = useState("");
  const [showMyPosts, setShowMyPosts] = useState(false);
  const [showMyMessages, setShowMyMessages] = useState(false);

  useEffect(() => {
    getPosts()
      .then((posts) => {
        setPostsList(posts.data.posts);
      })
      .catch((error) => {
        console.log("There was an error", error);
      });
  }, []);

  return (
    <BrowserRouter>
    <Routes>

      <NavBar />

      {posts ? <SearchForm posts={posts} setShowMyPosts={setShowMyPosts} token={token} setPostsList={setPostsList}/>: null}

      {token ? <Logout setToken={setToken} /> : 
      <Login setToken={setToken} />}
      

      <Register setToken={setToken} />
      {token ? (
        <MakePost
          getPosts={getPosts}
          token={token}
          setPostsList={setPostsList}
        />
      ) : null}
      {showMyPosts ? (
        <MyPosts
          setShowMyPosts={setShowMyPosts}
          token={token}
          setPostsList={setPostsList}
          posts={posts}
        />
      ) : (
        <Post
          posts={posts}
          setPostsList={setPostsList}
          setShowMyPosts={setShowMyPosts}
          token={token}
        />
      )}
      <button onClick={()=>{setShowMyMessages(true)}}>My Messages</button>

      {
        showMyMessages && token ? <MyMessages token={token} posts={posts}/> : null
      }
    </Routes>
    </BrowserRouter>
  );
};

export default App;
