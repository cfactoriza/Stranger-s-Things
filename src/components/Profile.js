import React, {useEffect, useState} from 'react'
import MyPosts from './MyPosts';
import MakePost from './makePost'
import MyMessages from './myMessages';
import NavBar from './NavBar'
import { showMyPosts } from "../api";

const Profile = (props)=>{
    const { posts, setShowMyPosts, token, setPostsList, setToken, getPosts, showMyPost } = props;
    const [myPosts, setMyPosts] = useState([])

    async function handleClick() {
        const data = await showMyPosts(token);
        setMyPosts(data);
        setShowMyPosts(true);
      }
useEffect(()=>{
  setShowMyPosts(false)
},[])
    return (
    <>
    <NavBar setToken={setToken} token={token} />
    <MakePost
    getPosts={getPosts}
    token={token}
    setPostsList={setPostsList}
    setShowMyPosts={setShowMyPosts}
    />
    { showMyPost ? 
    <MyPosts
    setShowMyPosts={setShowMyPosts}
    token={token}
    setPostsList={setPostsList}
    posts={myPosts}
    />
    : <button onClick={handleClick}>Show my Posts</button>
    }

    <MyMessages token={token} posts={posts}/>
    </>
    )
}


export default Profile;