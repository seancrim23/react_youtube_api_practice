import React, { useState } from 'react';
import { connect } from 'react-redux';
import classes from './Search.module.css';
import ResultList from '../../components/ResultList/ResultList';
import * as actions from '../../redux/actions/index';
import Loader from 'react-loader-spinner';
import SelectedVideo from '../../components/SelectedVideo/SelectedVideo';


const Search = props => {
    const [ searchDisabled, setSearchDisabled ] = useState(true);
    const [ showModal, setShowModal ] = useState(false);
    const [ selectedVidInfo, setSelectedVidInfo ] = useState({});

    function submitHandler(event){
        event.preventDefault();
        props.ytSearch(event.target.query.value);
    };

    function inputHandler(event){
        event.target.value.length === 0 ? setSearchDisabled(true) : setSearchDisabled(false)
    };

    function favoritesHandler(event) {
        event.preventDefault();
        console.log('Will be implemented to show all of a users favorites.');
    };

    function modalToggleHandler(event) {
        if(!showModal){
            const clickedResult = props.youtubeResults.filter(youtubeResult => {
                return youtubeResult.id.videoId === event.currentTarget.id;
            });
            if(clickedResult !== 0){
                setSelectedVidInfo(clickedResult[0]);
                setShowModal(true);
            }
        }
    };

    function modalCloseHandler() {
        if(showModal){
            setShowModal(false);
            setSelectedVidInfo({});
        }
    };

    let content = null;

    if(props.searchIsSearching){
        content = <Loader type="Hearts" color="#FFC0CB" height={200} width={200} />;
    }else{
        if(props.youtubeResults !== []){
            content = <ResultList clickedOnResult={modalToggleHandler} results={props.youtubeResults} />;
        }
        if(props.youtubeError){
            content = <h1>{props.youtubeError}</h1>
        }
    }

    let modal = !showModal ? null : <SelectedVideo selectedVideo={selectedVidInfo} />;

    return (
        <div>
            <form className={classes.Search} onSubmit={submitHandler}>
                <h1>Search for a video on Youtube!</h1>
                <input className={classes.SearchBox} type="text" name="query" onChange={inputHandler}/>
                <input className={classes.SearchButton} type="submit" value="SEARCH" disabled={searchDisabled} />
                <button className={classes.FavoritesButton} onClick={favoritesHandler}>MY FAVORITES ({props.favoritesList.length})</button>
            </form>
            <div onClick={modalCloseHandler}>
                {content}
            </div>
            {modal}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        youtubeResults: state.youtubeSearch.searchResults,
        youtubeError: state.youtubeSearch.error,
        searchIsSearching: state.youtubeSearch.isSearching,
        favoritesList: state.favs.favList 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        ytSearch: (query) => dispatch(actions.youtubeSearch(query))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);