// thinking about actions to be taken:
// login: {type: 'LOGIN', payload: user}
// logout: {type: 'LOGOUT', payload: user}
// register: {type: 'REGISTER', payload: form}
// create soap: {type: 'CREATE_SOAP', payload: soapForm}
// edit soap: {type: 'EDIT_SOAP', payload: soapId}
// delete soap: {type: 'DELETE_SOAP', payload: soapId}
// soap list: {type: 'SHOW_SOAP', payload: soapId}
// soap info: {type: 'SOAP_INFO', payload: soapId}
// soap cart: {type: 'ADD_CART', payload: soapId}

import { SHOW_SOAP } from "./type";
import SoapProducts from "../components/soap/SoapProducts";
