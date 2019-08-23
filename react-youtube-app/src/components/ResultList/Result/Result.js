import React from 'react';
import classes from './Result.module.css';

const Result = props => {
    const { thumbnail, description, title, id } = props;
    return (
        <div className={classes.Result} id={id} onClick={props.clickResult}>
            <img src={thumbnail} alt={description} style={{width: "100%"}} />
            <div className={classes.ResultInfo}>
                <h1>{title}</h1>
                <p>{description}</p>
                <a target="_blank" rel="noopener noreferrer" href={`http://youtube.com/watch?v=${id}`}>Watch this video!</a>
            </div>
        </div>
    );
};

export default Result;