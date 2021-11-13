import React from "react";
import { connect } from "react-redux";

const AnsweredQuestion = (props) => {

    const { author, optionOne, optionTwo } = props.questions[props.id];
    const user = props.users[author];
    const op1Votes = optionOne.votes.length;
    const op2Votes = optionTwo.votes.length;
    const totalVotes = op1Votes + op2Votes;

    const getPercentage = (votes, total) => {
        return ((votes / total) * 100).toFixed(1);
    }

    return (
        <div className="card" style={{ width: "700px" }}>
            <div className="card-header">
                <h5 className="fw-bold text-start">Asked By {user.name}</h5>
            </div>

            <div className="card-body">
                <div className="row">

                    <div className="col-4 border-end d-flex flex-column justify-content-center">
                        <div className="d-flex flex-row justify-content-center">
                            <img src={user.avatarURL} alt="avatar" className="avatar border p-2" width="150" height="150" />
                        </div>
                    </div>

                    <div className="col-8">
                        <h3 className="fw-bold text-start">Results:</h3>

                        <div className={"card " + (props.answer === 'optionOne' ? 'bg-danger bg-gradient' : '')}>
                            <div className="card-body">
                                <div className="fw-bold text-black text-start">Would you rather {optionOne.text} ?</div>
                                <div className="progress mt-2">
                                    {((getPercentage(op1Votes, totalVotes)) !== '0.0' ?
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${getPercentage(op1Votes, totalVotes)}%` }}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >{getPercentage(op1Votes, totalVotes)}%</div>
                                        : <div
                                            className="progress-bar text-black"
                                            role="progressbar"
                                            style={{ width: `100%`, backgroundColor: "#f0f0f0" }}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >{getPercentage(op1Votes, totalVotes)}%</div>
                                    )}
                                </div>
                                <div className="fw-bold mt-2 text-black text-center">{op1Votes} out of {totalVotes} votes</div>
                            </div>
                        </div>

                        <div className={"card mt-4 " + (props.answer === 'optionTwo' ? 'bg-danger bg-gradient' : '')}>
                            <div className="card-body">
                                <div className="fw-bold text-black text-start">Would you rather {optionTwo.text} ?</div>
                                <div className="progress mt-2">
                                    {((getPercentage(op2Votes, totalVotes)) !== '0.0' ?
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${getPercentage(op2Votes, totalVotes)}%` }}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >{getPercentage(op2Votes, totalVotes)}%</div>
                                        : <div
                                            className="progress-bar text-black"
                                            role="progressbar"
                                            style={{ width: `100%`, backgroundColor: "#f0f0f0" }}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >{getPercentage(op2Votes, totalVotes)}%</div>
                                    )}
                                </div>
                                <div className="fw-bold mt-2 text-black  text-center">{op2Votes} out of {totalVotes} votes</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ questions, users }, props) => {
    return {
        questions,
        users,
        id: props.id,
        answer: props.answer,
    }
}

export default connect(mapStateToProps)(AnsweredQuestion);