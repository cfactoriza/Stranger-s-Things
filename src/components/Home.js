import React from 'react'
import NavBar from './NavBar'
import Login from './Login'
import Register from './Register'
import Logout from './Logout'
import Post from './Post'

const Home = (props)=>{
    const { posts, setShowMyPosts, token, setPostsList, setToken } = props;
    return (
        <>
        <NavBar setToken={setToken} token={token} />
        <Login setToken={setToken}/>
        <Register setToken={setToken} />
        </>
    )
}

export default Home;