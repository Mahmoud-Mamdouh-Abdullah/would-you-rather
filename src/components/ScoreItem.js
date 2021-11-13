import React from 'react';
import { connect } from 'react-redux';


const ScoreItem = (props) => {

    const { users, userId, score } = props;
    const userDetails = users[userId];

    return (
        <div className="card p-3 mt-3 mb-2" style={{ width: "700px" }}>
            <div className="row">

                <div className="col-3 border-end">
                    <img src={userDetails.avatarURL} alt="avatar" className="avatar" width="120" height="120" />
                </div>

                <div className="col-6 text-start">
                    <h3 className="fw-bold">{userDetails.name}</h3>
                    <div className="d-flex flex-row justify-content-between">
                        <span className="fw-bold">Answered questions </span>
                        <span className="fw-bold">{Object.keys(userDetails.answers).length}</span>
                    </div>
                    <hr />
                    <div className="d-flex flex-row justify-content-between">
                        <span className="fw-bold">Created questions </span>
                        <span className="fw-bold">{userDetails.questions.length}</span>
                    </div>
                </div>

                <div className="col-3">
                    <div className="card">
                        <div className="card-header">
                            <span className="fw-bold">Score</span>
                        </div>
                        <div className="card-body d-flex flex-row justify-content-center">
                            <p className="d-flex flex-column justify-content-center circle-score fw-bold text-white card-text">{score}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ users }, props) => {
    return {
        users,
        userId: props.userId,
        score: props.score
    }
}

export default connect(mapStateToProps)(ScoreItem);