import React from 'react';

const Quiz = (props) => {
    return (
        <div>
            <h1>
                {props.question}
            </h1>
            <button onClick={() => props.finalAnswer(props.choice1)}>{props.choice1}</button>
            <button onClick={() => props.finalAnswer(props.choice2)}>{props.choice2}</button>
            <button onClick={() => props.finalAnswer(props.choice3)}>{props.choice3}</button>
            <button onClick={() => props.finalAnswer(props.choice4)}>{props.choice4}</button>
            <button onClick={props.counter}>next</button>
        </div >
    )
}

export default Quiz