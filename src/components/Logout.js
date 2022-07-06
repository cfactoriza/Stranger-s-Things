import React from 'react';

const Logout = (props) => {
    const setToken= props.setToken;
    function clearToken(){
        setToken("");
        localStorage.clear();

    }
    return (
        <button onClick={clearToken}>Sign Out</button>
    )

}

export default Logout;