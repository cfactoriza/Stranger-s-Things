import React, {useEffect} from 'react'
import Post from './Post'
import SearchForm from './SearchForm';
import NavBar from './NavBar'

const Forum = (props) => {
    const { posts, setShowMyPosts, token, setPostsList, setToken, setSearchingPost, searchingPost } = props;
    useEffect(()=>{
        setSearchingPost(false)
    },[])
    return (
    <>
    <NavBar 
    setToken={setToken} 
    token={token}
     />
    <SearchForm 
    searchingPost = {searchingPost}
    setSearchingPost={setSearchingPost}
    posts={posts} 
    setShowMyPosts={setShowMyPosts} 
    token={token} 
    setPostsList={setPostsList}
    />
    {
        !searchingPost ?    <Post
    posts={posts}
    setPostsList={setPostsList}
    setShowMyPosts={setShowMyPosts}
    token={token}
    /> : null
    }

    </>
    )
}

export default Forum;