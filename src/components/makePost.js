import React from 'react'
import {createPost} from '../api'


const MakePost = (props) => {
    const {token, getPosts, setPostsList} = props
    // NEEDS TO PASS A TOKEN
    async function handleSubmit(event) {
        event.preventDefault()
        const title = event.target[0].value;
        const description = event.target[1].value;
        const price = event.target[2].value;
        await createPost(token, title, description, price)
        getPosts()
          .then(posts => {
            setPostsList(posts.data.posts)
          })
          .catch(error => {
            console.log("There was an error", error)
          });
        event.target[0].value = ""
        event.target[1].value = ""
        event.target[2].value = ""
    }

    return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input id="title"></input>
      <label>Description</label>
      <input id="description"></input>
      <label>Price</label>
      <input id="price"></input>
      <button type="submit">Create Post</button>
    </form>
    )

}


export default MakePost;