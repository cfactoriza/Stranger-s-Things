import React, { useState, useEffect } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Home"
import Profile from './Profile'
import Forum from './Forum'
import { getPosts } from "../api";
import Register from "./Register"; 
import CreateAPost from "./CreateAPost";

const App = () => {
  const [posts, setPostsList] = useState([]);
  const [token, setToken] = useState("");
  const [showMyPost, setShowMyPosts] = useState(false);
  const [searchingPost, setSearchingPost] = useState(false)

  return (
    <BrowserRouter>
    <Routes>

      <Route exact path="/" element={
      <Home 
      posts={posts}
      setPostsList={setPostsList}
      setShowMyPosts={setShowMyPosts}
      token={token}
      setToken={setToken}
      />
      } />

      <Route exact path="/profile" element={
      <Profile 
      setShowMyPosts={setShowMyPosts}
      token={token}
      setPostsList={setPostsList}
      posts={posts}
      getPosts={getPosts}
      setToken={setToken}
      showMyPost={showMyPost}
      />
      } 
      />

      <Route exact path="/posts" element={
      <Forum 
      searchingPost={searchingPost}
      setSearchingPost={setSearchingPost}
      setShowMyPosts={setShowMyPosts}
      token={token}
      setPostsList={setPostsList}
      posts={posts}
      setToken={setToken}
      />
      } 
      />
      <Route exact path="/register" element={
      <Register 
      token={token}
      setToken={setToken}
      />
      } 
      />
      <Route exact path ="/createpost" element={
      <CreateAPost 
      token={token}
      getPosts={getPosts}
      setToken={setToken}
      setPostsList={setPostsList}
      setShowMyPosts={setShowMyPosts}
      />
      }
      />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
