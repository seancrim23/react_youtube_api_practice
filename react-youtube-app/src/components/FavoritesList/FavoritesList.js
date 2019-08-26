import React from 'react';
import Favorite from './Favorite/Favorite';
import classes from './FavoritesList.module.css';

const FavoriteList = props => {

    const favorites = props.favsList.length === 0 ? <h1>No Favorites!</h1> : props.favsList.map(fav => {
        return <Favorite key={fav.id} videoTitle={fav.title} id={fav.id} />
    });

    return (
        <div className={classes.FavoritesList}> 
            <h3>Your Favorites:</h3> 
            {favorites}
        </div>
    );
};

export default FavoriteList;