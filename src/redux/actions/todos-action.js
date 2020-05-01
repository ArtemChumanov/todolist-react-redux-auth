import {
  ADD_ITEM_SUCCESS,
  SET_VISIBILITY_FILTER,
  DELETE_ITEM_SUCCESS,
  GET_ALL_ITEMS_SUCCESS,
  GET_ALL_ITEMS_ERROR,
  UPDATE_ITEM_SUCCESS,
  URL,
  DELETE_ITEM_ERROR,
  ADD_ITEM_ERROR,
  UPDATE_ITEM_ERROR,
} from "../types/todos-types";
import { createAction } from "@reduxjs/toolkit";
import { AUTHENTICATION_ERROR } from "../types/registratin-types";

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});
const getToken = () => {
  const obj = JSON.parse(localStorage.getItem("token"));
  const token = obj.token;
  const userId = obj.id;
  return {
    token: token,
    userId: userId,
  };
};
//================================================

export const getAllItemsError = createAction(GET_ALL_ITEMS_ERROR, (error) => ({
  payload: error,
}));
export const getAllItemsSuccess = createAction(
  GET_ALL_ITEMS_SUCCESS,
  (data) => ({
    payload: data,
  })
);
export const getAllItems = () => (dispatch) => {
  const obj = getToken();
  fetch(`${URL}/posts/?userId=${obj.userId}`, {
    //method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${obj.token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      debugger;
      console.log(res);
      dispatch(getAllItemsSuccess(res));
    })
    .catch((e) => {
      dispatch(getAllItemsError(e));
    });
};

//================================================
export const updateTodoSuccess = createAction(
  UPDATE_ITEM_SUCCESS,
  (id, newTodo) => ({
    payload: {
      id,
      newTodo,
    },
  })
);
export const updateTodoError = createAction(UPDATE_ITEM_ERROR,(error)=>({payload:error}));
export const updateTodo = (id, todo) => (dispatch) => {
  const obj = getToken();
  fetch(`${URL}/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${obj.token}`,
    },
    body: JSON.stringify(todo),
  })
    .then(() => dispatch(updateTodoSuccess(id, todo)))
    .catch((e) => dispatch(updateTodoError(e)));
};

//==================================================================

export const addNewItemSuccess = createAction(
  ADD_ITEM_SUCCESS,
  (userId, text, important, done) => ({
    payload: {
      userId: userId,
      text: text,
      important: important,
      done: done,
    },
  })
);
export const addNewItemError = createAction(ADD_ITEM_ERROR, (error) => ({
  payload: error,
}));

export const addNewItem = (text, important, done) => (dispatch) => {
  const obj = getToken();
  fetch(`${URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${obj.token}`,
    },
    body: JSON.stringify({
      userId: obj.userId,
      text: text,
      important: important,
      done: done,
    }),
  })
    .then(() => dispatch(addNewItemSuccess(obj.userId, text, important, done)))
    .catch((e) => dispatch(addNewItemError(e)));
};

//==================================================================

//export const onDeletedSuccess=createAction(DELETE_ITEM_SUCCESS,(id)=>({payload:id}));
export const onDeletedSuccess = (id) => ({
  type: DELETE_ITEM_SUCCESS,
  id,
});
export const onDeletedError = (error) => ({
  type: DELETE_ITEM_ERROR,
  error,
});
export const onDeleted = (id) => (dispatch) => {
  const obj = getToken();
  fetch(`${URL}/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${obj.token}`,
    },
  })
    .then(() => dispatch(onDeletedSuccess(id)))
    .catch((e) => {
      dispatch(onDeletedError(e));
    });
};
