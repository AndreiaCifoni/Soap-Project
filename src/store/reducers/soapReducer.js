import { FETCH_SOAPS, CREATE_SOAP, EDIT_SOAP } from "../actions/type";
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
    case EDIT_SOAP:
      //copy of array to be updated
      const soapsCopy = [...state.soaps];
      //find the index of the object to be updated
      const soapIndex = soapsCopy.findIndex(
        (soap) => soap.id === action.payload.id
      );
      //update the object to the modified one
      //it was created a copy of my soap object, and then modified all keys by spreading the action.payload object with modified form
      const editedSoap = { ...soapsCopy[soapIndex], ...action.payload };
      //updated the copied array with the new object
      soapsCopy[soapIndex] = editedSoap;
      //update the global state whit the updated array of soaps
      return { ...state, soaps: soapsCopy };
    default:
      return state;
  }
};

export default soapReducer;
