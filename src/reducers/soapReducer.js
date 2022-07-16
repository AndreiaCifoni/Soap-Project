import { SHOW_SOAP } from "../actions/type";

export default (state = {}, action) => {
  switch (action.type) {
    case SHOW_SOAP:
      return { ...state, soaps: action.payload };
  }
};
