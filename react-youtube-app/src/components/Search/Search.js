import React, { useState } from 'react';
import axios from 'axios';
import classes from './Search.module.css';

const Search = props => {
    const [ searchDisabled, setSearchDisabled ] = useState(true);


    //update this because the code needs to look nicer
    //need to pull the access token from an env file
    let options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key='
    };

    function submitHandler(event){
        event.preventDefault();
        options['url'] = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${event.target.query.value}&key=`;
        axios(options)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    };

    function inputHandler(event){
        if(event.target.value.length === 0){
            setSearchDisabled(true);
        }else{
            setSearchDisabled(false);
        }
    };

    function favoritesHandler(event) {
        event.preventDefault();
        console.log('Will be implemented to show all of a users favorites.');
    };

    return (
        <form className={classes.Search} onSubmit={submitHandler}>
            <h1>Search for a video on Youtube!</h1>
            <input className={classes.SearchBox} type="text" name="query" onChange={inputHandler}/>
            <input className={classes.SearchButton} type="submit" value="SEARCH" disabled={searchDisabled} />
            <button className={classes.FavoritesButton} onClick={favoritesHandler}>MY FAVORITES</button>
        </form>
    );
};

export default Search;