import React, { createContext, useContext, useReducer } from "react"

const initialState = {
  audioPlaying: false,
  dispatch: () => {
    throw new Error("No Context")
  }
}

const GlobalContext = createContext(initialState);

const GlobalState = ({ children }) => {

const [state, dispatch] = useReducer((state, action) => {
  switch (action.type) {
    case "audioPlaying":
      return {
        ...state,
        audioPlaying: action.data,
      };

    case "theme":
      return {
        ...state,
        theme: action.data,
      };

    case "clear":
      return {
      };
    default:
      return state;
  }
}, initialState)

  return <GlobalContext.Provider value={{ ...state, dispatch }}>{children}</GlobalContext.Provider>;
};

const useGlobalState = () => useContext(GlobalContext);

export { useGlobalState, GlobalState };