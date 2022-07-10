import React, { useState } from "react";
import Post from "./Post";

const SearchForm = (props) => {
  const [searchPost, setSearchPost] = useState([]);
  const { posts, setShowMyPosts, token, setPostsList, setSearchingPost } =
    props;
  function handleChange(event) {
    const searchTerm = event.target.value;
    console.log(searchTerm);
    function postMatches(post, text) {
      console.log(post)
      if (post.title.includes(text)) {
        setSearchingPost(true);
        return true;
      } else if (post.description.includes(text)) {
        setSearchingPost(true);
        return true;
      } else {
        return false;
      }
    }
    const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
    const postsToDisplay = searchTerm.length ? filteredPosts : posts;
    setSearchPost(postsToDisplay);
    if (postsToDisplay.length === 0) {
      setSearchingPost(false);
    }
  }

  return (
    <div>

      <section className="intro">
  <div className="bg-image h-100" style={{
          backgroundImage: "url(https://images.creativemarket.com/0.1.0/ps/5319914/3008/1003/m1/fpnw/wm0/_dsc60102-.jpg?1541415014&s=7c8a8e0bad89065f858412e2bc2e9c06)"}}>
    <div className="mask d-flex align-items-center h-100" style={{backgroundColor: "rgba(0,0,0, 0.5)"}}>
      <div className="container">
        <p className="h2 mb-4 text-white" style={{paddingTop: "1rem", textAlign:"center"}}>Stranger's Things, the best website to shop for items </p>
        <div className="card">
          <div className="card-body p-4">
            <div className="row">
              <div className="col-12 mb-6">
                <div className="input-group">
                  <div className="form-outline flex-fill">
                    <input type="search" id="searchPosts" className="form-control form-control-lg" onChange={handleChange}/>
                    <label className="form-label" htmlFor="searchPosts">Search for Posts</label>
                    <div className="form-helper pt-2"><span className="font-weight-bold">Suggested: </span> 
                      <a href="#!" className="text-black-50">car, </a>  
                      <a href="#!" className="text-black-50">puppy, </a>  
                      <a href="#!" className="text-black-50">bike, </a>  
                      <a href="#!" className="text-black-50">phone, </a>  
                      <a href="#!" className="text-black-50">house, </a>  
                      <a href="#!" className="text-black-50">chair, </a>  
                      <a href="#!" className="text-black-50">and more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {searchPost.length > 0 ? (
        <Post
          posts={searchPost}
          setShowMyPosts={setShowMyPosts}
          token={token}
          setPostsList={setPostsList}
        />
      ) : null}

    </div>
  );
};

export default SearchForm;
