import axios from 'axios';

const BASE = 'https://strangers-things.herokuapp.com/api/'
const cohortName = '2206-FTB-ET-WEB-FT';


export async function getPosts(){
    try {
        const { data } = await axios.get(`${BASE}${cohortName}/posts`);
        return data;
    } catch (error) {
        throw error;
    }
}
export async function registerUser(userName, passWord){
    try {
        const data = await fetch (`${BASE}${cohortName}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify ({
                user: {
                    username: userName,
                    password: passWord
                }
            })

        })
        const response = await data.json()
        const userToken = response.data.token
        localStorage.setItem("Token", userToken)
        console.log(localStorage.getItem("Token"))

    } catch (error){
        throw error;
    }
}