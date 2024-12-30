import React, { useReducer } from "react";
import Context from "./Context";
import { reducer } from "./reducer";
import initialState from "./initialState";

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;
