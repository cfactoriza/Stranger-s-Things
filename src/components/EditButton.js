import React from "react";
import { useNavigate } from "react-router-dom";

const EditButton = (props) => {
  const {
    postId,
    title,
    description,
    location,
    price,
    setTitle,
    setDescription,
    setPrice,
    setLocation,
  } = props;
  let navigate = useNavigate();

  async function handleClick(event) {
    event.preventDefault();
    setTitle(title);
    setDescription(description);
    setPrice(price);
    setLocation(location);
    navigate(`/editpost/${postId}`);
  }
  return (
    <button className="btn btn-warning btn-sm" onClick={handleClick}>
      Edit
    </button>
  );
};

export default EditButton;
