import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import AnsweredQustion from './AnsweredQustion';
import QuestionToAnswer from './QuestionToAnswer';

const QuestionForm = (props) => {
    const params = useParams();
    const { authedUser, users } = props;
    const { answers } = users[authedUser];
    const [wasAnswered, setWasAnswered] = useState(false);

    useEffect(() => {
        if (Object.keys(answers).includes(params.question_id)) {
            setWasAnswered(true);
        }
    }, [answers, params.question_id])
    return (
        wasAnswered ? <AnsweredQustion answer={answers[params.question_id]} id={params.question_id} /> : <QuestionToAnswer id={params.question_id} />
    )
}

const mapStateToProps = ({ authedUser, users }) => {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(QuestionForm);