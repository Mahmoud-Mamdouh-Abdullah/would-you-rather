import { createUserQuesionAction, addUserAnswerAction } from './users';
import { createQuestionAction, addQuestionAnswerAction } from './questions';
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { showLoading, hideLoading } from 'react-redux-loading';


export const handleCreateQuestion = (question) => {

    return (dispatch) => {
        dispatch(showLoading());
        _saveQuestion(question).then((q) => {
            dispatch(createQuestionAction(q));
            dispatch(createUserQuesionAction(q.id, q.author));
            dispatch(hideLoading())
        });
    }
}


export const handleAddQuestionAnswer = ({ authedUser, qid, answer }) => {
    return (dispatch) => {
        dispatch(showLoading());
        _saveQuestionAnswer({
            authedUser,
            qid,
            answer
        }).then(() => {
            dispatch(addQuestionAnswerAction(authedUser, qid, answer));
            dispatch(addUserAnswerAction(authedUser, qid, answer));
            dispatch(hideLoading());
        });
    }
}