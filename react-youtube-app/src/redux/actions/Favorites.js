import * as actionTypes from '../actionTypes';

export function addFavorite(favorite){
    return { type: actionTypes.ADD_FAVORITE, favorite };
};

export function removeFavorite(id){
    return { type: actionTypes.REMOVE_FAVORITE, id };
};