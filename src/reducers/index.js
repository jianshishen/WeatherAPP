import { combineReducers } from "redux";
import currentcity from "./currentcity";
import data from "./data";
export default combineReducers({
  data,
  currentcity
});
