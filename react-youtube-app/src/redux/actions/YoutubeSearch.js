import * as actionTypes from '../actionTypes';
import axios from 'axios';

export function youtubeSearch(query) {
    return dispatch => {
        dispatch(youtubeSearching());
        axios({        
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${query}&key=${process.env.REACT_APP_API_KEY}`})
        .then(response => {
            dispatch(youtubeSearchSuccess(response.data.items));
        })
        .catch(error => {
            console.log(error);
            dispatch(youtubeSearchFail(error));
        });
    };
};

function youtubeSearching() {
    return { type: actionTypes.YOUTUBE_SEARCH };
}

function youtubeSearchSuccess(results) {
    return { type: actionTypes.YOUTUBE_SEARCH_SUCCESS, results};
}

function youtubeSearchFail(error) {
    return { type: actionTypes.YOUTUBE_SEARCH_FAIL, error};
}