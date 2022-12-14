import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import Questions from "../Questions";
import "./Quiz.css";

const Quiz = ({ name, Score, Question, No, Setscore }) => {
  const [Option, Setoption] = useState("");
  const [CurrQuestion, Setcurrquestion] = useState(0);
  

  useEffect(() => {
    if (Question.length > 0) {
     
      Setoption(
        Handeloption([
          Question[CurrQuestion]?.correct_answer,
          ...Question[CurrQuestion]?.incorrect_answers,
        ])
      );
    }
  }, [Question, CurrQuestion]);

  const Handeloption = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <p className="name">WELCOME, {name}</p>

      {Question.length > 0 ? (
        <>
          <div className="quizinfo">
            <p className="cat">{Question[CurrQuestion].category}</p>
            <p className="score">Score:{Score}</p>
          </div>
          <Questions
            question={Question}
            option={Option}
            curqus={CurrQuestion}
            SetcurrQus={Setcurrquestion}
            correct={Question[CurrQuestion]?.correct_answer}
            Score={Score}
            Setscore={Setscore}
            No={No}
          />
        </>
      ) : (
        <CircularProgress className="Loading" />
      )}
    </div>
  );
};

export default Quiz;
