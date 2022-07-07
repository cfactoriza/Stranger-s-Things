import React, { useState, useEffect } from 'react'
import Post from './Post'
import Register from './Register'
import Login from './Login'
import MakePost from './makePost'
import MyPosts from './MyPosts'


import { getPosts } from '../api'
import Logout from './Logout'

const App = () => {
    const [posts, setPostsList] = useState([]);
    const [token, setToken] = useState("");
    const [showMyPosts, setShowMyPosts] = useState(false)

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
        {
          token ? <MakePost getPosts={getPosts} token={token} setPostsList={setPostsList}/> : null
        }
        {showMyPosts ? <MyPosts setShowMyPosts ={setShowMyPosts} /> : <Post posts={posts} setShowMyPosts ={setShowMyPosts}/>}
        
        </div>
    )

}

export default App