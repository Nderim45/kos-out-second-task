import {React, useState} from "react";
import { RiArrowUpSLine,RiArrowDownSLine } from "react-icons/ri";
import "./question.css";
const Question = (props) => {
  const [clicked, setClicked] = useState(true)

  const handleClicked = () => {
    setClicked(!clicked)
  }
  return (
    <div className={props.type === "subQuestion" ? "subQuestion" : "question-container"} >
      <div className={props.type === "subQuestion" ? 'sub-question' : "question"} onClick={handleClicked}>
        <h6>{props.question}</h6>
          {clicked ? <RiArrowDownSLine /> :<RiArrowUpSLine />}
      </div>
      <div className={clicked ? "answer" : "answerOut"} >
        <p>{props.answer}</p>
      </div>
    </div>
  );
};

export default Question;
