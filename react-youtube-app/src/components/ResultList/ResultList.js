import React from 'react';
import Result from './Result/Result';
import classes from './ResultList.module.css';

const ResultList = props => {
    return (
        <div className={classes.ResultList}>
            <Result />
            <Result />
            <Result />
        </div>
    );
};

export default ResultList;