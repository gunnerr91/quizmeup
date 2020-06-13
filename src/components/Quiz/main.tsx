import * as React from "react";
import { QuizQuestion, QuestionLabel } from "./questionLabel";
import { AppContext } from "../../store";
import { PlayerAnswer } from "./playerAnswerInput";
import { type } from "os";

type QuizProps = {};

export const Quiz: React.FunctionComponent<QuizProps> = (props) => {
  const { state, dispatch } = React.useContext(AppContext);
  console.log(`current question index: ${state?.currentQuestionIndex}`);
  let questions: QuizQuestion[] = [
    { question: "Question 1", answer: "1" },
    { question: "Question 2", answer: "answer to question 2" },
    { question: "Question 3", answer: "answer to question 3" }
  ];
  return state?.players && state.players.length > 0 ? (
    <>
      <QuestionLabel
        questions={questions}
        currentQuestionIndex={
          state.currentQuestionIndex < questions.length
            ? state.currentQuestionIndex
            : 0
        }
      />
      <PlayerAnswer />
      <button
        onClick={() => {
          let updatedPlayers = state?.players;
          if (updatedPlayers) {
            updatedPlayers.forEach((player) => {
              if (
                player.answerToCurrentQuestion ===
                questions[state.currentQuestionIndex ?? 0].answer
              ) {
                if (player.score) {
                  player.score += 1;
                } else {
                  player.score = 1;
                }
              }
            });
          }
          dispatch({
            type: "UPDATE_PLAYERS",
            payload: updatedPlayers
          });
        }}
      >
        Check answer
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "UPDATE_CURRENT_QUEST_INDEX"
          });
        }}
      >
        Next question
      </button>
    </>
  ) : (
    <p>No players</p>
  );
};
