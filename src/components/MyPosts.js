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
        </div>
    )
}

export default fetchMyPosts