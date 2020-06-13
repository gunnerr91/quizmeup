import * as React from "react";
import { AppContext } from "../../store";
import { CurrentQuestionAnswer } from "../../Reducer";

type PlayerAnswerProps = {};

export const PlayerAnswer: React.FunctionComponent<PlayerAnswerProps> = (
  props
) => {
  const { state, dispatch } = React.useContext(AppContext);
  if (state?.players) {
    state?.players.forEach((player) => {
      console.log(
        `players answers:\n${player.name}, ${player.answerToCurrentQuestion}`
      );
    });
    console.log(state?.players[0].score);
  }
  return (
    <>
      {state?.players && state.players.length > 0 ? (
        state.players.map((player, index) => {
          return (
            <div key={index}>
              <label>{player.name}</label>
              <input
                onChange={(event) => {
                  let updatedPlayer = (state.players[
                    index
                  ].answerToCurrentQuestion = event.target.value);
                  dispatch({
                    type: "UPDATE_PLAYER",
                    payload: updatedPlayer
                  });
                }}
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
