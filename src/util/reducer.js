import actions from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.DATA_CALC: {
      const newState = { ...state };
      newState.isValid = action.isValid;
      newState.data = action.data;
      // console.log('redulce', action.data);
      return { ...newState };
    }
    case actions.OBJECTIVE: {
      const newState = { ...state };
      newState.objective = action.objective;
      // console.log('redulce', newState);
      return { ...newState };
    }
    case actions.DIVISION_MACROS: {
      const newState = { ...state };
      newState.macrosDivision = action.macrosDivision;
      // console.log('redulce', newState);
      return { ...newState };
    }
  }
  return { ...state };
};
