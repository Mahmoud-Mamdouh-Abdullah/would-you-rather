export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER';

export const setAuthedUserAction = (userId) => {
    return {
        type: SET_AUTHED_USER,
        payload: userId
    }
}

export const removeAuthedUser = () => {
    return {
        type: REMOVE_AUTHED_USER,
        payload: null
    }
}