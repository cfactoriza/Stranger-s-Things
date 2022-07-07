import React, { useState, useEffect } from 'react'
import Post from './Post'
import Register from './Register'
import Login from './Login'
import MakePost from './makePost'


import { getPosts } from '../api'
import Logout from './Logout'

const App = () => {
    const [posts, setPostsList] = useState([]);
    const [token, setToken] = useState("")

    useEffect(() => {
        getPosts()
          .then(posts => {
            setPostsList(posts.data.posts)
          })
          .catch(error => {
            console.log("There was an error", error)
          });
      }, []);
       
    return(
        <div>
        {
          token ? <Logout setToken={setToken}/> : <Login setToken={setToken}/>
        }

        {/* <Register setToken={setToken} /> */}
        <Post posts={posts}/>
        <MakePost getPosts={getPosts} token={token} setPostsList={setPostsList}/>
        
        </div>
    )

}

export default App