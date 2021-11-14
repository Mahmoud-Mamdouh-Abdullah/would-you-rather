import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import AnsweredQustion from './AnsweredQustion';
import QuestionToAnswer from './QuestionToAnswer';

const QuestionForm = (props) => {
    const params = useParams();
    const { authedUser, users, questions } = props;
    const { answers } = users[authedUser];
    const [wasAnswered, setWasAnswered] = useState(false);

    useEffect(() => {
        if (Object.keys(answers).includes(params.question_id)) {
            setWasAnswered(true);
        }
    }, [answers, params.question_id, questions]);


    if (!Object.keys(questions).includes(params.question_id)) {
        return (
            <Navigate to="/404" />
        )
    } else {
        return (
            wasAnswered ? <AnsweredQustion answer={answers[params.question_id]} id={params.question_id} /> : <QuestionToAnswer id={params.question_id} />
        )
    }
}

const mapStateToProps = ({ questions, authedUser, users }) => {
    return {
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(QuestionForm);