import * as React from "react";

type QuestionLabelProps = {
  currentQuestionIndex: number;
  questions: QuizQuestion[];
};

export type QuizQuestion = {
  question: string;
  answer: string;
};

export const QuestionLabel: React.FunctionComponent<QuestionLabelProps> = (
  props
) => {
  return <h3>{props.questions[props.currentQuestionIndex].question}</h3>;
};
