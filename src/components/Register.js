import React from "react";
import { registerUser } from "../api";
import NavBar  from "./NavBar";

const Register = (props) => {
  const {setToken, token} = props;
  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    const confirmPassword = event.target[2].value;
    if (password != confirmPassword) {
      return alert("Passwords do not match");
    }
    registerUser(username, password, setToken);
    event.target[0].value = "";
    event.target[1].value = "";
    event.target[2].value = "";
  }

  return (
    <>
    <NavBar setToken={setToken} token={token} />

<section className="text-center">

  <div className="p-5 bg-image" style={{ 
    backgroundImage: "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c481b312-aa21-45a9-8424-f545d73950d5/deqq5z4-9dbc9e5c-1da5-49e8-ae62-5eb439555fed.png/v1/fill/w_1920,h_720,strp/banner_stranger_things_by_alfalfabeta_deqq5z4-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M0ODFiMzEyLWFhMjEtNDVhOS04NDI0LWY1NDVkNzM5NTBkNVwvZGVxcTV6NC05ZGJjOWU1Yy0xZGE1LTQ5ZTgtYWU2Mi01ZWI0Mzk1NTVmZWQucG5nIiwiaGVpZ2h0IjoiPD03MjAiLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9jNDgxYjMxMi1hYTIxLTQ1YTktODQyNC1mNTQ1ZDczOTUwZDVcL2FsZmFsZmFiZXRhLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.PFOUivQOBX4YkVoV3GPMKaXFb-FejRfYulcVpilMw2E')",
    height: "400px"
  }}>
  </div>
htmlFor <div className="card mx-4 mx-md-5 shadow-5-strong" style={{
        marginTop: "-100px",
        background: "hsla(0, 0%, 100%, 0.8)",
        backdropFilter: "blur(30px)"
  }}>
    <div className="card-body py-5 px-md-5">

      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h2 className="fw-bold mb-5">Sign up now</h2>
          <form onSubmit={handleSubmit}>

            <div className="row">
              <div className="mb-4">
                <div className="form-outline">
                  <input type="text" id="userReg" className="form-control" />
                  <label className="form-label" htmlFor="userReg">Username</label>
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="passReg" className="form-control" />
              <label className="form-label" htmlFor="passReg">Password</label>
            </div>


            <div className="form-outline mb-4">
              <input type="password" id="passConf" className="form-control" />
              <label className="form-label" htmlFor="passConf">Please confirm your password</label>
            </div>


            <div className="form-check d-flex justify-content-center mb-4">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33"/>
              <label className="form-check-label" htmlFor="form2Example33">
                Subscribe to our newsletter (Coming up soon)
              </label>
            </div>


            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign up
            </button>

          </form>
        </div>
      </div>
    </div>
  </div>
</section>



    {/* <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input></input>
      <label>Password (8 characters minimum):</label>
      <input type="password" minLength="8" required></input>
      <label>Confirm Password</label>
      <input id="passwordconfirmation" type="password"></input>
      <button type="submit">Register</button>
    </form> */}


    </>
  );
};

export default Register;
