import React, { useState } from 'react';
import './App.css';
//import components
import Quiz from './components/Quiz';
import Final from './components/Final';

function App() {
  //states
  const [question, setQuestion] = useState("Ready to start?");

  //what question we are on
  const [counter, setCounter] = useState(0);

  //buttons that display the available answers to choose from 
  const [choice1, setChoice1] = useState("choice1");
  const [choice2, setChoice2] = useState("choice2");
  const [choice3, setChoice3] = useState("choice3");
  const [choice4, setChoice4] = useState("choice4");

  // final answer for each question
  const [answer1, setAnswer1] = useState()
  const [answer2, setAnswer2] = useState()
  const [answer3, setAnswer3] = useState()
  const [answer4, setAnswer4] = useState()
  const [answer5, setAnswer5] = useState()

  //songs 
  const songs = [
    { Title: "Long Time", TimeOfDay: "Night", DesiredMood: "Reflective", WhereAreYouListening: "Bedroom", OverallSound: "Psyched Out", OfficialRelease: "Yes", Pic: "https://images-na.ssl-images-amazon.com/images/I/81V0tXRMxtL._AC_SL1500_.jpg", Link: <iframe width="560" height="315" src="https://www.youtube.com/embed/tkPoOvVnbRk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { Title: " @ Meh", Mood: "Playful" }
  ];

  //working list of songs that is updated depending on what the user clicks during the quiz
  let finalSongs = [];

  //final song
  const [finalSong, setFinalSong] = useState("")


  //changes the question text for each question 
  const nextQuestion = () => {
    if (counter === 0) {
      setQuestion((prev) => "Time of Day?")
      setChoice1("Morning");
      setChoice2("Afternoon");
      setChoice3("Evening");
      setChoice4("Night")
    } else if (counter === 1) {
      setQuestion((prev) => "Desired Mood?")
      setChoice1("Relaxed");
      setChoice2("Euphoric");
      setChoice3("Reflective");
      setChoice4("Wild");
    } else if (counter === 2) {
      setQuestion((prev) => "Where are You Listening?")
      setChoice1("Car");
      setChoice2("Bedroom");
      setChoice3("Party");
      setChoice4("With Someone Special");
    } else if (counter === 3) {
      setQuestion((prev) => "Overall Sound?")
      setChoice1("Psyched Out");
      setChoice2("Playful");
      setChoice3("Futuristic");
      setChoice4("Other");
    } else if (counter === 4) {
      setQuestion((prev) => "Does it need to be an Official Release?")
      setChoice1("Yes");
      setChoice2("No");
      document.getElementById("button3").style.opacity = 0;
      document.getElementById("button4").style.opacity = 0;
    } else {
      setQuestion((prev) => "complete")
      //run a function that gives us the final answer
      songChoice();
    }
  }

  //algorithm that determines what song we listen to 
  const songChoice = () => {
    var i;
    for (i = 0; i < songs.length; i++) {
      if (songs[i].TimeOfDay === answer1 && songs[i].DesiredMood === answer2 && songs[i].WhereAreYouListening === answer3
        && songs[i].OverallSound === answer4 && songs[i].OfficialRelease === answer5) {
        finalSongs.push(songs[i]);
        console.log(finalSongs);
      }
    }
    setFinalSong(finalSongs[Math.floor(Math.random() * finalSongs.length)])
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

  //resets everything
  const reseter = () => {
    setCounter(0);
    incrementer();
    setQuestion("Time of Day?")
    setChoice1("Morning");
    setChoice2("Afternoon");
    setChoice3("Evening");
    setChoice4("Night")
    document.getElementById("button3").style.opacity = 1;
    document.getElementById("button4").style.opacity = 1;
    finalSongs = [];
    console.log(finalSongs);
  }

  return (
    <div className="App">
      {//included are the props that I am passing down so that the quiz component can interact with its parent
      }
      <Quiz question={question} counter={incrementer}
        nextQuestion={nextQuestion} choice1={choice1}
        choice2={choice2} choice3={choice3} choice4={choice4} finalAnswer={finalAnswer}
        reset={reseter} />
      <Final finalSong={finalSong} />
    </div>
  );
}

export default App;
