import * as React from "react";
import { AppContext } from "../../store";
import { CurrentQuestionAnswer } from "../../Reducer";

type PlayerAnswerProps = {};

export const PlayerAnswer: React.FunctionComponent<PlayerAnswerProps> = (
  props
) => {
  const { state, dispatch } = React.useContext(AppContext);
  console.log("player ansmwers about to be generated");
  console.log(state?.players);
  return (
    <>
      {state?.players && state.players.length > 0 ? (
        state.players.map((player, index) => {
          return (
            <div key={index}>
              <label>{player.name}</label>
              <input
                onChange={(event) =>
                  dispatch({
                    type: "Add_PLAYER_ANSWER_TO_CURRENT_QUESTION",
                    payload: {
                      answerToCurrentQuestion: event.target.value,
                      currentPlayerIndex: index
                    } as CurrentQuestionAnswer
                  })
                }
                type="text"
              />
            </div>
          );
        })
      ) : (
        <div>No players</div>
      )}
    </>
  );
};
