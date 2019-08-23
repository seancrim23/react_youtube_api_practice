import * as actionTypes from '../actionTypes';

const initialState = {
    favList: []
};

export default function favoriteReducer(state = initialState, action) {
    switch(action.type){
        case actionTypes.ADD_FAVORITE:
            console.log(state.favList);
            console.log(action.favorite);
            console.log(state.favList.concat(action.favorite));
            return{
                favList: state.favList.concat(action.favorite)
            };
        case actionTypes.REMOVE_FAVORITE:
            const copiedFavList = [...state.favList];
            console.log(copiedFavList);
            const removeFavIndex = copiedFavList.findIndex(fav => fav.id === action.id);
            console.log(removeFavIndex);
            const updatedFavList = copiedFavList.splice(removeFavIndex, 1);
            console.log(updatedFavList);
            return{
                favList: updatedFavList
            };
        default:
            return state;
    }
}