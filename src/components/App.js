import React, { useState, useEffect } from 'react'
import Post from './Post'

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
       
    return(
        <Post posts={posts}/>
    )

}

export default App