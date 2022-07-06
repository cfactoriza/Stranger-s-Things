import React from 'react';
import { registerUser } from '../api';

const Register = () => {
    async function handleSubmit(event) {
        event.preventDefault();
        console.log(event)
        const username = event.target[0].value
        const password = event.target[1].value
        const confirmPassword = event.target[2].value
if (password != confirmPassword)
{
    return (
        console.log("Passwords do not match")
    )
}
registerUser(username, password)
}

    return (
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input name="username"></input>
            <label>Password</label>
            <input name="password"></input>
            <label>Confirm Password</label>
            <input name="passwordconfirmation"></input>
            <button type="submit">Register</button>


        </form>

    )
};

export default Register