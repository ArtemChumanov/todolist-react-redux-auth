import Navbar from "../navbar/navbar_auth";
import React, { useEffect } from "react";

const Registration = ({ logon, addUser, error }) => {
  useEffect(() => {
    localStorage.removeItem("token");
    logon();
  });
  let input1;
  let input2;let input3;
  if (error) {
    alert("Email and Password already exist");
  }

  const changeSubmit = (e) => {
    e.preventDefault();
    if (!input1.value.trim() && !input2.value.trim() && !input3.value.trim()) {
      return;
    }
    addUser(input1.value, input2.value,input3.value);
    input1.value = "";
    input2.value = "";
    input3.value = "";
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Registration</h1>
        <form onSubmit={changeSubmit}>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                name="email"
                ref={(node) => (input1 = node)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputPassword3"
                name="password"
                ref={(node) => (input2 = node)}
              />
            </div>
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                name="password"
                ref={(node) => (input3 = node)}
              />
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Registration;
