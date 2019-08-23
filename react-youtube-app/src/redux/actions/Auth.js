import * as actionTypes from '../actionTypes';

export function authSuccess(response) {
    return { type: actionTypes.AUTH_SUCCESS, response };
}

export function authFail(error) {
    return { type: actionTypes.AUTH_FAIL, error };
}