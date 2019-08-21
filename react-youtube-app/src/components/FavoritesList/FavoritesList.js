import React from 'react';
import Favorite from './Favorite/Favorite';

const FavoriteList = props => {
    return (
        <div> 
            <h3>Your Favorites:</h3> 
            <Favorite />
            <Favorite />
            <Favorite />
        </div>
    );
};

export default FavoriteList;