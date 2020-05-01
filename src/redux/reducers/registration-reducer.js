import {
  ADD_USER_ERROR,
  ADD_USER_SUCCESS,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_SUCCESS,
  EXIT_SUCCESS
} from "../types/registratin-types";
import { createReducer } from "@reduxjs/toolkit";

const registerState = {
  users: [],
  error: null,
};
const registration = createReducer(registerState, {
  [AUTHENTICATION_SUCCESS]: (state, action) => ({
    users: [
      {
        email: action.payload.email,
        password: action.payload.password,
      },
    ],
    error: null,
  }),
  [AUTHENTICATION_ERROR]: () => ({ error: true }),
  [ADD_USER_SUCCESS]: (state, action) => ({
    users: [
      {
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      },
    ],
  }),
  [ADD_USER_ERROR]: (state, action) => ({ users: [], error: action.payload }),
  [EXIT_SUCCESS]: () => ({ users: [], error: null }),
});
// function registration(state = registerState, action) {
//   switch (action.type) {
//     case AUTHENTICATION_SUCCESS: {
//       return {
//         ...state,
//         users: [
//           ...state.users,
//           {
//             email: action.email,
//             password: action.password,
//           },
//         ],
//         error: null,
//       };
//     }
//     case AUTHENTICATION_ERROR:
//       return { ...state, error: true };
//
//     case ADD_USER_SUCCESS: {
//       return {
//         ...state,
//         users: [
//           ...state.users,
//           {
//             email: action.email,
//             password: action.password,
//           },
//         ],
//       };
//     }
//     case ADD_USER_ERROR:
//       return { ...state, users: [], error: action.payload };
//     case EXIT_SUCCESS: {
//       return { users: [], error: null };
//     }
//     default:
//       return state;
//   }
// }
export default registration;
