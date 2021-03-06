import axios from "axios";

const BASE = "https://strangers-things.herokuapp.com/api/";
const cohortName = "2206-FTB-ET-WEB-FT";

export async function getPosts() {
  try {
    const { data } = await axios.get(`${BASE}${cohortName}/posts`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(userName, passWord, setToken) {
  try {
    const data = await fetch(`${BASE}${cohortName}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: userName,
          password: passWord,
        },
      }),
    });
    const response = await data.json();
    const userToken = response.data.token;
    localStorage.setItem("Token", userToken);
    setToken(userToken);
  } catch (error) {
    throw error;
  }
}

export async function loginUser(userName, passWord, setToken) {
  fetch(`${BASE}${cohortName}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: userName,
        password: passWord,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      const userToken = result.data.token;
      localStorage.setItem("Token", userToken);
      setToken(userToken);
    })
    .catch(console.error);
}

export async function createPost(token, title, description, price, location) {
  fetch(`${BASE}${cohortName}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: title,
        description: description,
        price: price,
        location: location,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
}

export async function showMyPosts(token) {
  try {
    const data = await axios.get(`${BASE}${cohortName}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data.data.posts;
  } catch (error) {
    console.error(error);
  }
}

export async function deletePost(token, postId) {
  try {
    await axios.delete(`${BASE}${cohortName}/posts/${postId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

export async function postMessage(token, postId, content) {
  await fetch(`${BASE}${cohortName}/posts/${postId}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      message: {
        content: content,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
}

export async function showMyMessages(token) {
  try {
    const data = await axios.get(`${BASE}${cohortName}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data.data;
  } catch (error) {
    console.error(error);
  }
}

export async function editPost(
  token,
  postId,
  title,
  description,
  price,
  location
) {
  fetch(`${BASE}${cohortName}/posts/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: title,
        description: description,
        price: price,
        location: location,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
}
