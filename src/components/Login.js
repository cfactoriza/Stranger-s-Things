import React from "react";
import { loginUser } from "../api";

const Login = (props) => {
  const { setToken } = props;
  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    localStorage.setItem("username", username);
    loginUser(username, password, setToken);
  }

  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: "23rem" }} onSubmit={handleSubmit}>
                <h3
                  className="fw-normal mb-3 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Log in
                </h3>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="userLogin"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="userLogin">
                    Username
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="passLogin"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="passLogin">
                    Password
                  </label>
                </div>

                <div className="pt-1 mb-4">
                  <button
                    className="btn btn-info btn-lg btn-block"
                    type="submit"
                  >
                    Login
                  </button>
                </div>

                <p className="small mb-5 pb-lg-2">
                  <a className="text-muted" href="#!">
                    Forgot password? (Function coming up soon)
                  </a>
                </p>
                <p>
                  Don't have an account?{" "}
                  <a href="/register" className="link-info">
                    Register here
                  </a>
                </p>
              </form>
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

export default Login;
