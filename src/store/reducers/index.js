import { combineReducers } from "redux";
import soapReducer from "./soapReducer";
// import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  soapReducer,
  // loginReducer,
});

export default rootReducer;
