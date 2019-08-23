import * as actionTypes from '../actionTypes';

const initialState = {
    searchResults: [],
    error: null,
    isSearching: false
};

export default function youtubeSearchReducer(state = initialState, action) {
    switch(action.type){
        case actionTypes.YOUTUBE_SEARCH:
            return {
                ...state,
                error: null,
                isSearching: true
            };
        case actionTypes.YOUTUBE_SEARCH_SUCCESS:
            return {
                ...state,
                searchResults: action.results,
                isSearching: false
            };
        case actionTypes.YOUTUBE_SEARCH_FAIL:
            return {
                ...state,
                error: action.error,
                isSearching: false
            };
        default:
            return state;
    };
};

