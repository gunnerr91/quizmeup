export type AppState = {
  players: player[];
  currentQuestionIndex: number;
  questions: string[];
  currentQuestionAnswered: Boolean;
};

export type player = {
  name: string;
  score: number;
  answerToCurrentQuestion?: string;
};

export type ADD_PLAYERS = "ADD_PLAYERS";
export type GET_PLAYERS = "GET_PLAYERS";
export type Add_PLAYER_ANSWER_TO_CURRENT_QUESTION = "Add_PLAYER_ANSWER_TO_CURRENT_QUESTION";
export type UPDATE_PLAYERS = "UPDATE_PLAYERS";
export type UPDATE_CURRENT_QUEST_INDEX = "UPDATE_CURRENT_QUEST_INDEX";
export type UPDATE_PLAYER = "UPDATE_PLAYER";

export type AppActions = {
  type:
    | ADD_PLAYERS
    | GET_PLAYERS
    | Add_PLAYER_ANSWER_TO_CURRENT_QUESTION
    | UPDATE_PLAYERS
    | UPDATE_CURRENT_QUEST_INDEX
    | UPDATE_PLAYER;
  payload?: player[] | CurrentQuestionAnswer | string | player;
};

export type CurrentQuestionAnswer = {
  currentPlayerIndex: number;
  answerToCurrentQuestion: string;
};

const Reducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case "ADD_PLAYERS":
      return {
        ...state,
        players: action.payload
          ? state.players?.concat(action.payload as player[])
          : state.players
      };
    case "UPDATE_PLAYERS":
      return {
        ...state,
        players: action.payload as player[]
      };
    case "UPDATE_PLAYER":
      let updatedPlayer = action.payload as player;
      let newState = { ...state };
      newState.players[
        newState.players.findIndex((p) => p.name === updatedPlayer.name)
      ] = updatedPlayer;
      return {
        ...newState
      };
    case "UPDATE_CURRENT_QUEST_INDEX":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1
      };
    default:
      return state;
  }
};

export default Reducer;
