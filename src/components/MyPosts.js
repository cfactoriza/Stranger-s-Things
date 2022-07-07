import React from 'react';

const fetchMyPosts = (props) => {
    const {setShowMyPosts} = props
    function handleClick(){
        setShowMyPosts(false)}
    return (
        <div>
            Show My Posts
            <button onClick={handleClick} >Show all Posts</button>
        </div>
    )
}

export default fetchMyPosts