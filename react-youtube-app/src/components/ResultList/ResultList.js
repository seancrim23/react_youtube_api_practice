import React from 'react';
import Result from './Result/Result';
import classes from './ResultList.module.css';

const ResultList = props => {
    return (
        <div className={classes.ResultList}>
            {props.results.map(result => {
                return <Result key={result.id.videoId} 
                title={result.snippet.title}
                description={result.snippet.description}
                thumbnail={result.snippet.thumbnails.medium.url}
                id={result.id.videoId}
                />
            })}
        </div>
    );
};

export default ResultList;