import { _getQuestions } from "../utils/_DATA";
import { showLoading, hideLoading } from 'react-redux-loading';


export const GET_QUESTIONS = 'GET_QUESTIONS';
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

const getQuestionsAction = (questions) => {
    return {
        type: GET_QUESTIONS,
        payload: questions
    }
}

export const createQuestionAction = (question) => {
    return {
        type: CREATE_QUESTION,
        payload: question
    }
}

export const addQuestionAnswerAction = (authedUser, qid, answer) => {
    return {
        type: ADD_QUESTION_ANSWER,
        payload: {
            authedUser,
            qid,
            answer
        }
    }
}

export const handleGetQuestion = () => {
    return (dispatch) => {
        dispatch(showLoading());
        return _getQuestions().then(questions => {
            dispatch(getQuestionsAction(questions));
            dispatch(hideLoading());
        })
    }
}