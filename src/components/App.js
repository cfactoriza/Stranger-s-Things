import React, { useState, useEffect } from 'react'

import { getPosts } from '../api'

const App = () => {
    const [posts, setPostsList] = useState([]);

    useEffect(() => {
        getPosts()
          .then(posts => {
            setPostsList(posts.data.posts)
          })
          .catch(error => {
            console.log("There was an error", error)
          });
      }, []);
      
      console.log(posts)      
    return(
    <div>
        <h1>Posts</h1>
        { 
            posts.map((post, idx)=>{
                return (
                    <div key={idx}>
                    <h3>{post.title}</h3>
                    <h4>{post.author.username}</h4>
                    <p>{post.description}</p>
                    </div>
                )
            })
        }
    </div>
    )

}

export default App