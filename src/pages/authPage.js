import React from "react";
import NavbarAuth from "../components/navbar/navbar_auth";

import Authentication from "../containers/auth-user/Authentication";

const Auth=()=>{
  return(
    <div>
      <NavbarAuth/>
      <Authentication/>
    </div>
  )
}
export default Auth;
