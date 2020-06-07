import * as React from "react";
import { QuizQuestion, QuestionLabel } from "./questionLabel";
import { AppContext } from "../../store";
import { PlayerAnswer } from "./playerAnswerInput";

type QuizProps = {};

export const Quiz: React.FunctionComponent<QuizProps> = (props) => {
  const { state } = React.useContext(AppContext);
  let questions: QuizQuestion[] = [
    { question: "Question 1", answer: "answer to question 1" },
    { question: "Question 2", answer: "answer to question 2" },
    { question: "Question 3", answer: "answer to question 3" }
  ];
  return state?.players && state.players.length > 0 ? (
    <>
      <QuestionLabel questions={questions} currentQuestionIndex={0} />
      <PlayerAnswer />
    </>
  ) : (
    <p>No players</p>
  );
};
