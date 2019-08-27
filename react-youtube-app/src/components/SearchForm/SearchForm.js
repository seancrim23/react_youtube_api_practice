import React from 'react';
import classes from './SearchForm.module.css';

const SearchForm = props => {
    return (
        <form className={classes.Search} onSubmit={props.buttonSubmit}>
            <h1>Search for a video on Youtube!</h1>
            <input className={classes.SearchBox} type="text" name="query" onChange={props.changedInput}/>
            <input className={classes.SearchButton} type="submit" value="SEARCH" disabled={props.searchIsDisabled} />
            <button className={classes.FavoritesButton} onClick={props.seeFavorites}>MY FAVORITES ({props.favList.length})</button>
        </form>
    );
};

export default SearchForm;