export type AppState = {
  players?: player[];
  currentQuestionIndex?: number;
  questions?: string[];
};

export type player = {
  name: string;
  score?: number;
  answerToCurrentQuestion?: string;
};

export type ADD_PLAYERS = "ADD_PLAYERS";
export type GET_PLAYERS = "GET_PLAYERS";
export type Add_PLAYER_ANSWER_TO_CURRENT_QUESTION = "Add_PLAYER_ANSWER_TO_CURRENT_QUESTION";

export type AppActions = {
  type: ADD_PLAYERS | GET_PLAYERS | Add_PLAYER_ANSWER_TO_CURRENT_QUESTION;
  payload?: player[] | CurrentQuestionAnswer;
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
    case "Add_PLAYER_ANSWER_TO_CURRENT_QUESTION":
      var currentAnswer = action.payload as CurrentQuestionAnswer;
      if (state.players) {
        state.players[
          currentAnswer.currentPlayerIndex
        ].answerToCurrentQuestion = currentAnswer.answerToCurrentQuestion;
      }
      return state;
    default:
      return state;
  }
};

export default Reducer;
