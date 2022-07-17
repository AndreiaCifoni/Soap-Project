export const getSoaps = (state) => {
  return state.soapReducer.soaps ? state.soapReducer.soaps : [];
};
