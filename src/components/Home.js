import React, { useState } from "react";
import { connect } from "react-redux";
import Question from './Question';

const Home = (props) => {
    const { questions, authedUser, users } = props;
    const [page, setPage] = useState('unans');
    const { answers } = users[authedUser];

    let sortedQuestions = Object.values(questions).sort((a, b) => (
        b.timestamp - a.timestamp
    ));

    const ifInAnswers = (id) => {
        return Object.keys(answers).includes(id);
    }


    const handleUnansweredClick = (e) => {
        setPage('unans');
    }

    const handleAnsweredClick = (e) => {
        setPage('ans');
    }

    return (
        <div className="card" style={{ width: "800px" }}>
            <div className="card-header p-0 m-0">
                <div className="row m-0">
                    <span
                        onClick={handleUnansweredClick}
                        className={"btn col-6 border-end fw-bold " + (page === 'unans' ? 'bg-white text-danger' : '')}
                    >Unanswered Questions</span>
                    <span
                        onClick={handleAnsweredClick}
                        className={"btn col-6 fw-bold " + (page === 'ans' ? 'bg-white text-danger' : '')}
                    >Answered Questions</span>
                </div>
            </div>
            <div className="card-body d-flex flex-row justify-content-center">
                <div className="d-flex flex-column justify-content-center">
                    {page === 'unans' ? (
                        sortedQuestions.filter((question) => (
                            ifInAnswers(question.id) === false
                        )).map(question => (
                            <Question id={question.id} key={question.id} />
                        ))
                    ) : (
                        sortedQuestions.filter((question) => (
                            ifInAnswers(question.id) === true
                        )).map(question => (
                            <Question id={question.id} key={question.id} />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ questions, users, authedUser }) => {
    return {
        questions,
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Home);