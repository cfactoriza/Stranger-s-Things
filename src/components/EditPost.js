import React from "react";
import { editPost } from "../api";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditPost = (props) => {
  const { token, setToken, title, description, price, location } = props;
  let navigate = useNavigate();
  const params = useParams();
  const postId = params.postId;

  async function handleSubmit(event) {
    event.preventDefault();
    const newTitle = event.target[0].value;
    const newDescription = event.target[1].value;
    const newPrice = event.target[2].value;
    const newLocation = event.target[3].value;
    await editPost(
      token,
      postId,
      newTitle,
      newDescription,
      newPrice,
      newLocation
    );
    navigate("/profile");
  }

  return (
    <div>
      <NavBar setToken={setToken} token={token} />
      <div
        style={{
          backgroundImage:
            'url("https://www.ivins.com/wp-content/uploads/2017/02/website-design-background.png")',
          minHeight: "900px",
          minWidth: "1000px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="card text-white bg-dark mb-3 "
            style={{
              minWidth: "400px",
              minHeight: "350px",
              marginTop: "5rem",
              textAlign: "center",
            }}
          >
            <h5 style={{ textAlign: "center", marginTop: "1rem" }}>
              Post your item to sell
            </h5>
            <div className="card-header">
              {localStorage.getItem("username")}
            </div>
            <div className="card-body">
              <p className="card-text">
                <input
                  className="form-control"
                  id="title"
                  placeholder={title}
                  autoComplete="off"
                ></input>
              </p>
              <p className="card-text">
                <input
                  className="form-control"
                  id="description"
                  placeholder={description}
                  autoComplete="off"
                ></input>
              </p>
              <p className="card-text">
                <input
                  id="price"
                  placeholder={price}
                  className="form-control"
                  autoComplete="off"
                ></input>
              </p>
              <p className="card-text">
                <input
                  id="location"
                  placeholder={location}
                  className="form-control"
                  autoComplete="off"
                ></input>
              </p>
              <button
                className="btn btn-secondary btn-sm"
                style={{ marginTop: "2rem" }}
                type="submit"
              >
                Update Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
