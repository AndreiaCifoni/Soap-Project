import { FETCH_SOAPS, CREATE_SOAP } from "../actions/type";
import { v4 as uuidv4 } from "uuid";
import SoapProducts from "../../components/soap/SoapProducts";

const initialState = { soaps: SoapProducts };

const soapReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SOAPS:
      return state;
    case CREATE_SOAP:
      const newArray = [...state.soaps];
      const id = uuidv4();
      newArray.push({ ...action.payload, id });

      return { ...state, soaps: newArray };
    default:
      return state;
  }
};

export default soapReducer;
