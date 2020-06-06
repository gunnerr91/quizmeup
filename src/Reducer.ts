export type AppState = {
  players?: player[];
};

export type player = {
  name: string;
  score?: number;
};

export type ADD_PLAYERS = "ADD_PLAYERS";
export type GET_PLAYERS = "GET_PLAYERS";

export type AppActions = {
  type: ADD_PLAYERS | GET_PLAYERS;
  payload?: player[];
};

const Reducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case "ADD_PLAYERS":
      console.log(action.payload);
      console.log(state);
      return {
        ...state,
        players: action.payload
          ? state.players?.concat(action.payload)
          : state.players
      };
    default:
      return state;
  }
};

export default Reducer;
