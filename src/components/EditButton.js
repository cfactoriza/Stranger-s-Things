import React from "react";

const EditButton = ()=>{
    async function handleClick(event){
        event.preventDefault()
        
    }
    return (
        <button className="btn btn-warning btn-sm" onClick={handleClick}>Edit</button>
    )
}

export default EditButton;