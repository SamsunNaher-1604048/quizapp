import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import "./Questions.css";
import { useNavigate } from "react-router-dom";

const Questions = ({
  question,
  option,
  curqus,
  SetcurrQus,
  correct,
  Score,
  Setscore,
  No,
}) => {
  const [Select, Setselect] = useState("");
  const [Error, Seterror] = useState(false);
  const navigate = useNavigate();

  const Handelselect = (i) => {
    if (Select === i && Select === correct) {
      return "correct";
    } else if (Select === i && Select !== correct) {
      return "worng";
    } else if (i === correct) {
      return "correct";
    }
  };

  const Handelsubmit = (i) => {
    Setselect(i);
    if (i === correct) {
      Setscore(Score + 1);
    }
    Seterror(false);
  };

  const quit = () => {
    navigate("/");
  };

  const Nextquestion = (no) => {
    console.log(curqus)
    if (curqus===(no-1)) {
      navigate("/result");
    } else if (Select && (curqus<=no)) {
      SetcurrQus(curqus + 1);
      Setselect();
    } else {
      Seterror("Plese select a option");
    }
  };

  return (
    <div>
      <p className="QuestionNo">Question:{curqus + 1}</p>
      <div className="singlequestion">
        <h3 className="question">{question[curqus].question}</h3>
        <div className="error">{Error && <ErrorMessage>{Error}</ErrorMessage>}</div>
        <div className="option">
          {option.length > 0 &&
            option.map((i) => {
              return (
                <button
                  className={`btn ${Select && Handelselect(i)}`}
                  onClick={() => {
                    Handelsubmit(i);
                  }}
                  key={i}
                  disabled={Select}
                >
                  {i}
                </button>
              );
            })}
        </div>

        <div className="option2">
          <button className="btn2" onClick={quit}>
            Quit
          </button>
          <button
            className="btn2"
            onClick={() => {
              Nextquestion(No);
            }}
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
