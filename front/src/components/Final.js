import React from 'react';
import '../App.css';

const Final = (props) => {
    return (
        <div className="content">
            <h1 className="finalTitle" id="finalTitle">LISTEN TO: {props.finalSong.Title}</h1>
            <img src={props.finalSong.Pic} className="finalPicture"></img>
            <p className="finalText">{props.finalSong.Link}</p>
        </div >
    )
}

export default Final;