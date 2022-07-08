import React, { useState, useEffect } from "react";
import Post from './Post'

const SearchForm = (props) => {
  const [searchPost, setSearchPost] = useState([]);
  const { posts, setShowMyPosts, token, setPostsList } = props;
  function handleChange(event) {
    const searchTerm = event.target.value;
    function postMatches(post, text) {
      if (post.title.includes(text)) {
        return true;
      } else if (post.description.includes(text)) {
        return true;
      } else {
        return false;
      }
    }

    const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
    const postsToDisplay = searchTerm.length ? filteredPosts : posts;
    setSearchPost(postsToDisplay);
  }

  return (
    <div>
      <div>
        <label>Search Form</label>
        <input onChange={handleChange} placeholder="Enter keywords..."></input>
      </div>
        <Post posts={searchPost} setShowMyPosts={setShowMyPosts} token={token} setPostsList={setPostsList}/>
    
    </div>
  );
};

// const [posts, setPosts] = useState([]);
// const [searchTerm, setSearchTerm] = useState('');

export default SearchForm;