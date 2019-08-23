import React from 'react';
import classes from './Result.module.css';

const Result = props => {
    return (
        <div className={classes.Result}>
            <img src={props.thumbnail} alt={props.description} style={{width: "100%"}} />
            <div className={classes.ResultInfo}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <a target="_blank" rel="noopener noreferrer" href={`http://youtube.com/watch?v=${props.id}`}>Watch this video!</a>
                <button style={{width: "100%", marginTop: "15px"}}>ADD TO FAVORITES</button>
            </div>
        </div>
    );
};

export default Result;