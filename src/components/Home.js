import React from 'react'
import NavBar from './NavBar'
import Login from './Login'
import Register from './Register'

const Home = (props)=>{
    const { token, setToken} = props;
    return (
        <>
        <NavBar setToken={setToken} token={token} />
        <Login setToken={setToken}/>
        <Register setToken={setToken} />
        </>
    )
}

export default Home;