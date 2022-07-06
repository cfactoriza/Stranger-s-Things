import React from 'react';
import { registerUser } from '../api';

const Register = () => {
    async function handleSubmit(event) {
        event.preventDefault();
        const username = event.target[0].value
        const password = event.target[1].value
        const confirmPassword = event.target[2].value
if (password != confirmPassword)
{
    return (
        alert("Passwords do not match")
    )
}
registerUser(username, password)
}

    return (
        <form onSubmit={handleSubmit}>
            <label >Username</label>
            <input id="username"></input>
            <label >Password (8 characters minimum):</label>
            <input id="password" type="password" minlength="8" required></input>
            <label >Confirm Password</label>
            <input id="passwordconfirmation" type="password"></input>
            <button type="submit">Register</button>
        </form>

    )
};

export default Register