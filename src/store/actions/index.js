// thinking about actions to be taken:
// login: {type: 'LOGIN', payload: user}
// logout: {type: 'LOGOUT', payload: user}
// register: {type: 'REGISTER', payload: form}
// soap cart: {type: 'ADD_CART', payload: soapId}

import { FETCH_SOAPS, CREATE_SOAP, EDIT_SOAP } from "./type";

export const fetchSoaps = () => {
  //como eu nao tenho API estou inicializando o SoapProducts diretamente no reducer initialState
  //senao teria que usar async await com axios request e passar o resultado pro payload
  return {
    type: FETCH_SOAPS,
    payload: [],
  };
};

export const createSoap = (newSoap) => {
  return {
    type: CREATE_SOAP,
    payload: newSoap,
  };
};

export const editSoap = (modifiedSoap, id) => {
  return {
    type: EDIT_SOAP,
    payload: modifiedSoap,
    id: id,
  };
};

// export const deleteSoap = (id) => {
//   return {
//     type: DELETE_SOAP,
//     payload: id,
//   };
// };
