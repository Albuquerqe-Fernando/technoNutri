import { createContext, useReducer } from 'react';
import PropType from 'prop-types';
import { reducer } from './reducer';
import { globalState } from './data';

export const Context = createContext();

export const AppContext = ({ children }) => {
  const Context = createContext();
  const [state, dispatch] = useReducer(reducer, globalState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

AppContext.propTypes = {
  children: PropType.node.isRequired,
};
