import React from "react";

const Welcome = () => {
  const username = localStorage.getItem("username");
  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black d-flex align-items-center">
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <h1>Welcome to Strangers' Things {username}</h1>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="https://i.pinimg.com/originals/d8/1a/d9/d81ad99189e2af59a260d96499b61ddd.png"
              alt="Login image"
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
