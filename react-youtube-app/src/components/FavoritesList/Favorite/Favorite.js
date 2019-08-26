import React from 'react';
import classes from './Favorite.module.css';

const Favorite = props => {
    return (
        <div className={classes.Favorite}>
            <h2>{props.videoTitle}</h2>
            <a target="_blank" rel="noopener noreferrer" href={`http://youtube.com/watch?v=${props.id}`}>WATCH ME!</a>
        </div>
    );
};

export default Favorite;