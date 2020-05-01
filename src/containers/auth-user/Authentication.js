import React, { Component, useEffect, useState } from "react";
import "../../components/authentication/authentication.css";
import {
  authentication,
  logon,
} from "../../redux/actions/registration-action";
import Authentication from "../../components/authentication/authentication";
import { connect } from "react-redux";

const  state=(state)=>({
  error:state.registration.error
})
const mapDispatchToProps = (dispatch) => ({
  auth:(email,pasword)=>dispatch(authentication(email,pasword)),
  logon:()=>dispatch(logon())
})
export default connect(state,mapDispatchToProps)(Authentication);
