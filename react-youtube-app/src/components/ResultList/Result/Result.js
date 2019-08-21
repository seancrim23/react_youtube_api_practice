import React from 'react';
import classes from './Result.module.css';
import bigFrog from '../../../assets/images/big_frog.jpg';

const Result = props => {
    return (
        <div className={classes.Result}>
            <img src={bigFrog} alt="Big Frog" style={{width: "100%"}} />
            <div className={classes.ResultInfo}>
                <h1>Random result!</h1>
            </div>
        </div>
    );
};

export default Result;