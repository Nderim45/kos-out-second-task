import { React, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import "./bigQuestion.css";
import Questions from "./Questions";

const BigQuestion = () => {
  const [clicked, setClicked] = useState(true);

  const handleClicked = () => {
    setClicked(!clicked)
  }

  return (
    <div className="bigQuestion-container">
      <div className="bigQuestion" onClick={handleClicked}>
        <div className='questionIcon'>
          <CgProfile className='aboutUs'/>
          <h6>About Us</h6>
        </div>
        <RiArrowUpSLine />
      </div>
      <div className={clicked ? "bigAnswer" : "bigAnswerOut"}>
        <Questions type='subQuestion'/>
      </div>
    </div>
  );
};

export default BigQuestion;
