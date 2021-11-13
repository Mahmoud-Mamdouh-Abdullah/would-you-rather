import {
    GET_QUESTIONS,
    CREATE_QUESTION,
    ADD_QUESTION_ANSWER
} from "../actions/questions"

const questions = (questions = {}, action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            return action.payload;
        case CREATE_QUESTION:
            return {
                ...questions,
                [action.payload.id]: action.payload
            };
        case ADD_QUESTION_ANSWER:
            const { authedUser, qid, answer } = action.payload;
            return {
                ...questions,
                [qid]: {
                    ...questions[qid],
                    [answer]: {
                        ...questions[qid][answer],
                        votes: questions[qid][answer].votes.concat([authedUser])
                    }
                }
            }
        default:
            return questions;
    }
}

export default questions;