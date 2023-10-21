/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { FC } from "react";
import { AnswerObject } from "../App";
import { ButtonWrapper, Wrapper } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className="questionNumber">
        Question:{questionNumber} /{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((item) => (
          <ButtonWrapper key={item}
          correct={userAnswer?.correctAnswer===item}
          userClicked={userAnswer?.answer===item}
          >
            <button disabled={!!userAnswer} value={item} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
