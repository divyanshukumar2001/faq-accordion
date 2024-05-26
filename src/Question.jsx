import React from 'react'
import { useState } from 'react'
import "./index.css"

const Question = ({faqObject: {question, answer}}) => {

  const minusButton = "./src/assets/icon-minus.svg"
  const plusButton = "./src/assets/icon-plus.svg"

  const [currentIcon, setIcon] = useState(plusButton)

  const handleClick = ()=>{
    setIcon(currentIcon === plusButton ? minusButton : plusButton);
  }

  return (
    <div>
      <div className="question">
        <h4 className="ques" onClick={handleClick}>{question}</h4>
        <img className="plus-minus" src={currentIcon} onClick={handleClick} />
      </div>

      <p className={`answer ${currentIcon === plusButton ? "hidden" : ""}`}>
        {answer}
      </p>
    </div>
  )
}

export default Question