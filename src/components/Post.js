import React from 'react'


const Post = (props) => {
    const {posts, setShowMyPosts} = props
    function handleClick(){
        setShowMyPosts(true)
    }
    return (
        <div>
        <h1>Posts</h1>
        <button onClick={handleClick} >Show my Posts</button>
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


export default Post;