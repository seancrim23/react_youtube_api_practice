import * as actionTypes from '../actionTypes';

const initialState = {
    isAuth: false,
    response: null,
    error: null
};

export default function authReducer(state = initialState, action) {
    switch(action.type){
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                isAuth: true,
                response: action.response,
                error: null
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                isAuth: false,
                response: null,
                error: action.error
            };
        default:
            return state;
    };
};

