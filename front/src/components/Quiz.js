import React from 'react';
import '../App.css';

const Quiz = (props) => {
    return (
        <div className="content">
            <div className="header">
                <h1>Carti Season</h1>
            </div>
            <button className="rstButton" id="rstBtn" onClick={props.reset}>reset</button>
            <h1 className="title">
                {props.question}
            </h1>
            <button className="buttons" id="button1" onClick={() => props.finalAnswer(props.choice1)}>{props.choice1}</button>
            <button className="buttons" id="button2" onClick={() => props.finalAnswer(props.choice2)}>{props.choice2}</button>
            <button className="buttons" id="button3" onClick={() => props.finalAnswer(props.choice3)}>{props.choice3}</button>
            <button className="buttons" id="nxtBtn" onClick={props.counter}>next</button>

        </div >
    )
}

export default Quiz