import React from 'react'
import Post from './Post'
import SearchForm from './SearchForm';
import NavBar from './NavBar'

const Forum = (props) => {
    const { posts, setShowMyPosts, token, setPostsList, setToken } = props;
    return (
    <>
    <NavBar setToken={setToken} token={token} />
    <SearchForm 
    posts={posts} 
    setShowMyPosts={setShowMyPosts} 
    token={token} 
    setPostsList={setPostsList}
    />
    <Post
    posts={posts}
    setPostsList={setPostsList}
    setShowMyPosts={setShowMyPosts}
    token={token}
    />
    </>
    )
}

export default Forum;