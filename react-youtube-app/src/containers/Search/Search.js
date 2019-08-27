import React, { useState } from 'react';
import { connect } from 'react-redux';
import classes from './Search.module.css';
import ResultList from '../../components/ResultList/ResultList';
import * as actions from '../../redux/actions/index';
import Loader from 'react-loader-spinner';
import SelectedVideo from '../../components/SelectedVideo/SelectedVideo';
import FavoritesList from '../../components/FavoritesList/FavoritesList';
import SearchForm from '../../components/SearchForm/SearchForm';


const Search = props => {
    const [ searchDisabled, setSearchDisabled ] = useState(true);
    const [ showModal, setShowModal ] = useState(false);
    const [ selectedVidInfo, setSelectedVidInfo ] = useState({});
    const [ showFavs, setShowFavs ] = useState(false);

    function submitHandler(event){
        event.preventDefault();
        props.ytSearch(event.target.query.value);
    };

    function inputHandler(event){
        event.target.value.length === 0 ? setSearchDisabled(true) : setSearchDisabled(false)
    };

    function favoritesHandler(event) {
        event.preventDefault();
        setShowFavs(!showFavs);
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
        content = <Loader style={{textAlign: "center"}} type="Hearts" color="#FFC0CB" height={200} width={200} />;
    }else{
        if(props.youtubeResults !== []){
            content = <ResultList clickedOnResult={modalToggleHandler} results={props.youtubeResults} />;
        }
        if(props.youtubeError){
            content = <h1>{props.youtubeError}</h1>
        }
    }

    const modal = !showModal ? null : <SelectedVideo selectedVideo={selectedVidInfo} />;
    const favoritesList = showFavs ? <FavoritesList favsList={props.favoritesList} /> : null;
    
    return (
        <div>
            <SearchForm 
                buttonSubmit={submitHandler}
                changedInput={inputHandler}
                searchIsDisabled={searchDisabled}
                seeFavorites={favoritesHandler}
                favList={props.favoritesList}
            />
            <div className={classes.Results} onClick={modalCloseHandler}>
                {content}
            </div>
            {favoritesList}
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