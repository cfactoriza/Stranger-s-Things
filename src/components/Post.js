import React from 'react'


const Post = (props) => {
    const {posts} = props

    return (
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


export default Post;