import * as actionTypes from '../actionTypes';

const initialState = {
    favList: []
};

export default function favoriteReducer(state = initialState, action) {
    switch(action.type){
        case actionTypes.ADD_FAVORITE:
            return{
                favList: [...state.favList, action.favorite]
            };
        case actionTypes.REMOVE_FAVORITE:
            const copiedFavList = [...state.favList];
            const removeFavIndex = copiedFavList.findIndex(fav => fav.id === action.id);
            copiedFavList.splice(removeFavIndex, 1);
            return{
                favList: [...copiedFavList]
            };
        default:
            return state;
    }
}