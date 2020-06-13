import React, { createContext, useReducer, Dispatch } from "react";
import Reducer, { AppState, AppActions } from "./Reducer";

const initialState: AppState = {
  players: [],
  currentQuestionAnswered: false,
  currentQuestionIndex: 0,
  questions: []
};

interface AppContextProps {
  state?: AppState;
  dispatch: React.Dispatch<AppActions>;
}

export const AppContext = createContext<AppContextProps>({
  state: initialState,
  dispatch: () => null
});

type StoreArgs = {
  children?: any;
};

const Store = ({ children }: StoreArgs) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default Store;
