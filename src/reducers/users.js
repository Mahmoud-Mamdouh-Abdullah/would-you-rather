import { ADD_QUESTION_ANSWER } from "../actions/questions";
import { GET_USERS, CREATE_USER_QUESTION, ADD_NEW_USER } from "../actions/users"

const users = (users = {}, action) => {
    switch (action.type) {
        case GET_USERS:
            return action.payload;
        case ADD_NEW_USER:
            const user = action.payload;
            return {
                ...users,
                [user.id]: {
                    ...user
                }
            }
        case CREATE_USER_QUESTION:
            const { userId, questionId } = action.payload;
            console.log(userId, questionId);
            return {
                ...users,
                [userId]: {
                    ...users[userId],
                    questions: users[userId].questions.concat(questionId)
                }
            }
        case ADD_QUESTION_ANSWER:
            const { authedUser, qid, answer } = action.payload;
            return {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    answers: {
                        ...users[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        default:
            return users;
    }
}

export default users;