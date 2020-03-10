import { combineReducers } from "redux";
import stories from "./stories";
import description from "./description";

export default combineReducers({
  stories,
  description
});
