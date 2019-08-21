import React, { Component } from 'react';
import Search from '../../components/Search/Search';
import ResultList from '../../components/ResultList/ResultList';
import classes from './YoutubeSearch.module.css';

class YoutubeSearch extends Component {
    render() {
        return (
            <div>
                <Search />
                <div className={classes.ResultsSection}>
                    <ResultList />
                </div>
            </div>
        );
    };
};

export default YoutubeSearch;
