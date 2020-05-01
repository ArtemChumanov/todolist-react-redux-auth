import {
  AUTHENTICATION_ERROR,
  AUTHENTICATION_SUCCESS,
  ADD_USER_SUCCESS,
  EXIT_SUCCESS,
  ADD_USER_ERROR,
  GET_INFO_SUCCESS,
} from "../types/registratin-types";
import { GET_ALL_ITEMS_SUCCESS, URL } from "../types/todos-types";
import { history } from "../../routes/history";
import axios from "axios";
import { createAction } from "@reduxjs/toolkit";

export const authenticationSuccess = createAction(
  AUTHENTICATION_SUCCESS,
  (email, password) => ({
    payload: {
      email: email,
      password: password,
    },
  })
);
export const authenticationError = createAction(AUTHENTICATION_ERROR);
export const authentication = (email, password) => (dispatch) => {
  axios
    .post(`${URL}/auth/login`, {
      email: email,
      password: password,
    })
    .then((res) => {
      if (res.data.access_token != undefined) {
        localStorage.setItem(
          "token",
          JSON.stringify({
            token: res.data.access_token,
            id: res.data.userId,
          })
        );
        // login(res.access_token, res.userId)
        dispatch(authenticationSuccess(email, password));
        history.push("/");
      } else {
        throw res;
      }
    })
    .catch((e) => {
      dispatch(authenticationError(e));
    });
};
//=============================================

export const addNewUserSuccess = createAction(
  ADD_USER_SUCCESS,
  (email, password) => ({
    payload: {
      email: email,
      password: password,
    },
  })
);
export const addNewUserError = createAction(ADD_USER_ERROR);
export const addNewUser = (name, email, password) => (dispatch) => {
  axios
    .post(`${URL}/auth/register`, {
      name: name,
      email: email,
      password: password,
    })
    .then((res) => {
      if (res.data.access_token != undefined) {
        localStorage.setItem("token", res.data.access_token);
        dispatch(addNewUserSuccess(name, email, password));
      } else {
        throw res;
      }
    })
    .catch((e) => dispatch(addNewUserError(e)));
};

///====================================
export const logon = () => {
  localStorage.removeItem("token");
  return { type: EXIT_SUCCESS };
};
