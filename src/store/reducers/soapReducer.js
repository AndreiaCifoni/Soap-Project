import { FETCH_SOAPS } from "../actions/type";

const soapReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SOAPS:
      return { ...state, soaps: action.payload };
    default:
      return state;
  }
};

export default soapReducer;
