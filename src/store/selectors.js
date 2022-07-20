export const getSoaps = (state) => {
  return state.soapReducer.soaps ? state.soapReducer.soaps : [];
};

export const getSoapById = (state, id) => {
  const soaps = getSoaps(state);
  // .find returns undefined if it does not find any element that satisfies the condition
  // in that case return null
  return soaps.find((soap) => soap.id === id) || null;
};
