import React from 'react'
import NavBar from './NavBar'
import Login from './Login'
const Home = (props)=>{
    const { token, setToken} = props;
    return (
        <>
        <NavBar setToken={setToken} token={token} />
        <Login setToken={setToken}/>
        </>
    )
}

export default Home;