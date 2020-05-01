import React from "react";
import { connect } from "react-redux";
import { addNewUser, logon } from "../../redux/actions/registration-action";
import Registration from "../../components/registration/registration";

const state = (state) => ({
  error: state.registration.error,
});
const mapDispatchToProps = (dispatch) => ({
  addUser: (name, email, password) => {
    dispatch(addNewUser(name,email, password));
  },
  logon: () => dispatch(logon()),
});
export default connect(state, mapDispatchToProps)(Registration);
