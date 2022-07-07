import React from 'react';
import { showMyPosts } from '../api'


const fetchMyPosts = (props) => {
    const {setShowMyPosts, token, setPostsList, posts} = props
    
    
        
    function handleClick(){

        setShowMyPosts(false)
}
    
    return (
        <div>
            Show My Posts
            <button onClick={handleClick} >Show all Posts</button>
            { 
            posts.map((post, idx)=>{
                return (
                    <div key={idx}>
                    <h3>{post.title}</h3>
                    <h4>{post.description}</h4>
                    <p>{post.price}</p>
                    </div>
                )
            })
        }
        </div>
    )
}

export default fetchMyPosts