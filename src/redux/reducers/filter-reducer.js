import { SET_VISIBILITY_FILTER, VisibilityFilters } from "../types/todos-types";
import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
const { SHOW_ALL } = VisibilityFilters;

const visibilityFilter=createReducer(SHOW_ALL,{
    [SET_VISIBILITY_FILTER]:(state,action)=>action.filter
})


// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter;
//     default:
//       return state;
//   }
// }
export default visibilityFilter;
