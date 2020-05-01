import React, { useEffect } from "react";

const Authentication = ({logon,auth, error}) => {
  useEffect(() => {
    localStorage.removeItem("token");
    logon();
  });


  let input1;
  let input2;

  if(error){
    alert("login or password incorrect");
  }
  const changeSubmit = (e) => {
    e.preventDefault();
    if (!input1.value.trim() && !input2.value.trim()) {
      return;
    }

    auth(input1.value, input2.value);
    input1.value = "";
    input2.value = "";
  };

  return (
    <div className="container">
      <h1>Authentication</h1>
      <form onSubmit={changeSubmit}>
        <div className="form-group row">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className='form-control '
              id="inputEmail3"
              name="email"
              ref={(node) => (input1 = node)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              name="password"
              ref={(node) => (input2 = node)}
            />
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Authentication;
