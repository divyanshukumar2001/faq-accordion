import React from "react"
import Question from "./Question"

const Content = () => {
  const quesAns = [
    {
      question: "question 1",
      answer: "answer 1",
    },
    {
      question: "question 2",
      answer: "answer 2",
    },
    {
      question: "question 3",
      answer: "answer 3",
    },
    {
      question: "question 4",
      answer: "answer 4",
    },
  ]

  return (
    <section>
      {quesAns.map((que) => (
        <Question faqObject={que} key={que.question} />
      ))}
    </section>
  )
}

export default Content
