import React, { useState, useEffect } from 'react'
import Post from './Post'
import Register from './Register'
import Login from './Login'

import { getPosts } from '../api'

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
        <Login setToken={setToken}/>
        <Register setToken={setToken} />
        <Post posts={posts}/>
        </div>
    )

}

export default App