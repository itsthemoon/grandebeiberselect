import React, { useState } from 'react';
import './App.css';
//import components
import Quiz from './components/Quiz'

function App() {
  //states
  const [question, setQuestion] = useState("Ready to start?");

  //what question we are on
  const [counter, setCounter] = useState(0);

  //buttons that display the available answers to choose from 
  const [choice1, setchoice1] = useState("choice1");
  const [choice2, setchoice2] = useState("choice2");
  const [choice3, setchoice3] = useState("choice3");
  const [choice4, setchoice4] = useState("choice4");

  // final answer for each question
  const [answer1, setAnswer1] = useState()
  const [answer2, setAnswer2] = useState()
  const [answer3, setAnswer3] = useState()
  const [answer4, setAnswer4] = useState()
  const [answer5, setAnswer5] = useState()



  //changes the question text for each question 
  const nextQuestion = () => {
    if (counter === 0) {
      setQuestion((prev) => "question 1")
    } else if (counter === 1) {
      setQuestion((prev) => "question 2")
    } else if (counter === 2) {
      setQuestion((prev) => "question 3")
    } else if (counter === 3) {
      setQuestion((prev) => "question 4")
    } else if (counter === 4) {
      setQuestion((prev) => "question 5")
    } else {
      setQuestion((prev) => "complete")
    }

  }

  //obtains the final answer for each question
  const finalAnswer = (param) => {
    if (counter === 1) {
      setAnswer1(param);
      console.log(param);
    } else if (counter === 2) {
      setAnswer2(param);
      console.log(param);
    } else if (counter === 3) {
      setAnswer3(param);
      console.log(param);
    } else if (counter === 4) {
      setAnswer4(param);
      console.log(param);
    } else if (counter === 5) {
      setAnswer5(param);
      console.log(param);
    }
  }

  //counter keeps track of what question we are on
  const incrementer = () => {
    setCounter((prev) => prev + 1);
    console.log(counter);
    nextQuestion();
  }

  return (
    <div className="App">
      {//included are the props that I am passing down so that the quiz component can interact with its parent
      }
      <Quiz question={question} counter={incrementer}
        nextQuestion={nextQuestion} choice1={choice1}
        choice2={choice2} choice3={choice3} choice4={choice4} finalAnswer={finalAnswer} />

    </div>
  );
}

export default App;
