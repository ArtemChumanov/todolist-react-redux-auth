import {
  ADD_ITEM_ERROR,
  ADD_ITEM_SUCCESS,
  DELETE_ITEM_ERROR,
  DELETE_ITEM_SUCCESS,
  GET_ALL_ITEMS_ERROR,
  GET_ALL_ITEMS_SUCCESS,
  SET_VISIBILITY_FILTER,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_ERROR,
} from "../types/todos-types";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  error: null,
};
const todos = createReducer(initialState, {
  [GET_ALL_ITEMS_SUCCESS]: (state, action) => ({ todos: action.payload }),
  [GET_ALL_ITEMS_ERROR]: (state, action) => ({ error: action.payload }),
  [ADD_ITEM_SUCCESS]: (state, action) => ({
    todos: [
      ...state.todos,
      {
        id: Date.now(),
        userId: action.payload.userId,
        text: action.payload.text,
        important: false,
        done: false,
      },
    ],
  }),
  [ADD_ITEM_ERROR]: (state, action) => ({ error: action.payload }),
  [UPDATE_ITEM_SUCCESS]: (state, action) => ({
    todos: state.todos.map((item) =>
      item.id === action.payload.id ? action.payload.newTodo : item
    ),
  }),
  [UPDATE_ITEM_ERROR]: (state, action) => ({ error: action.payload }),
  [DELETE_ITEM_ERROR]: (state, action) => ({ error: action.payload }),
  [DELETE_ITEM_SUCCESS]: (state, action) => ({
    todos: state.todos.filter((el) => el.id !== action.id),
  }),
});
// function todos(state = initialState, action) {
//   switch (action.type) {
//     case GET_ALL_ITEMS_SUCCESS:
//       return {
//         ...state,
//         todos: action.payload,
//       };
//     case GET_ALL_ITEMS_ERROR:
//       return {
//         error: action.payload,
//       };
//
//     case ADD_ITEM_SUCCESS:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             id: Date.now(),
//             userId: action.userId,
//             text: action.text,
//             important: false,
//             done: false,
//           },
//         ],
//       };
//     case ADD_ITEM_ERROR:
//       return {
//         error: action.payload,
//       };
//
//     case UPDATE_ITEM_SUCCESS: {
//       return {
//         ...state.todos,
//         todos: state.todos.map((item) =>
//           item.id === action.payload.id ? action.payload.newTodo : item
//         ),
//       };
//     }
//     case UPDATE_ITEM_ERROR: {
//       return { error: action.payload };
//     }
//
//     case DELETE_ITEM_ERROR:
//       return { error: action.payload };
//     case DELETE_ITEM_SUCCESS:
//       return { todos: state.todos.filter((el) => el.id !== action.id) };
//     default:
//       return state;
//   }
// }
export default todos;
