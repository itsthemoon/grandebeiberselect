import React from 'react';

const Final = (props) => {
    return (
        <div>
            <h1>Your Final Song is: {props.finalSong.Title}</h1>
            <img src={props.finalSong.Pic}></img>
            {props.finalSong.Link}
        </div >
    )
}

export default Final;