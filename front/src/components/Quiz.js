import React from 'react';

const Quiz = (props) => {
    return (
        <div>
            <h1>
                {props.question}
            </h1>
            <button id="button1" onClick={() => props.finalAnswer(props.choice1)}>{props.choice1}</button>
            <button id="button2" onClick={() => props.finalAnswer(props.choice2)}>{props.choice2}</button>
            <button id="button3" onClick={() => props.finalAnswer(props.choice3)}>{props.choice3}</button>
            <button id="nxtBtn" onClick={props.counter}>next</button>
            <button id="rstBtn" onClick={props.reset}>reset</button>
        </div >
    )
}

export default Quiz