import { _addUser, _getUsers } from "../utils/_DATA";
import { showLoading, hideLoading } from 'react-redux-loading';


export const GET_USERS = 'GET_USERS';
export const CREATE_USER_QUESTION = 'CREATE_USER_QUESTION';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';
export const ADD_NEW_USER = 'ADD_NEW_USER';

export const getUsersAction = (users) => {
    return {
        type: GET_USERS,
        payload: users,
    }
}

const addNewUserAction = (user) => {
    return {
        type: ADD_NEW_USER,
        payload: user
    }
}

export const createUserQuesionAction = (questionId, userId) => {
    return {
        type: CREATE_USER_QUESTION,
        payload: {
            userId,
            questionId,
        }
    }
}

export const addUserAnswerAction = (authedUser, qid, answer) => {
    return {
        type: ADD_USER_ANSWER,
        payload: {
            authedUser,
            qid,
            answer
        }
    }
}

export const handleGetUsers = () => {
    return (dispatch) => {
        dispatch(showLoading());
        _getUsers().then(users => {
            dispatch(getUsersAction(users));
            dispatch(hideLoading());
        })
    }
}

export const handleAddUser = (user) => {
    return (dispatch) => {
        return _addUser(user).then(() => {
            dispatch(showLoading());
            dispatch(addNewUserAction(user));
            dispatch(hideLoading());
        })
    }
}