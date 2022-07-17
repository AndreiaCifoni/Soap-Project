export const getSoaps = (state) => {
  return state.soapReducer.soaps ? state.soapReducer.soaps : [];
};

export const getSoapById = (state, id) => {
  const soaps = getSoaps(state);
  return soaps.find((soap) => soap.id === id) || null;
};
