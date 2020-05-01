import { combineReducers} from '@reduxjs/toolkit'//*
import registration from "./registration-reducer";
import todos from "./todos-reducer";
import visibilityFilter from "./filter-reducer";
const todoApp=combineReducers({
  todos,
  registration,
  visibilityFilter
})
export default todoApp;
