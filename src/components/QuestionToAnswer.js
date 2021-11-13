import React, { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestionAnswer } from '../actions/shared';

const QuestionToAnswer = (props) => {

    const [answer, setAnswer] = useState('');
    const { id, questions, users, authedUser, dispatch } = props;
    const question = questions[id];
    const { optionOne, optionTwo } = question;
    const { name, avatarURL } = users[question.author];

    const handleAddAnswerClick = () => {
        if (answer !== '') {
            dispatch(handleAddQuestionAnswer({ authedUser, qid: id, answer }));
        }
    }

    const handleRadioClick = (e) => {
        setAnswer(e.target.id);
    }

    return (
        <div className="card mt-3" style={{ width: "700px" }}>
            <div className="card-header text-start">
                <h5 className="fw-bold font-monospace">{name} asks :</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-4 border-end">
                        <img src={avatarURL} alt="avatar" width="150" height="150" className="border avatar p-2" />
                    </div>
                    <div className="col-8 text-start d-flex flex-column justify-content-between">
                        <p className="fw-bold">Would you rather....</p>

                        <div>
                            <div className="form-check">
                                <label>
                                    <input onClick={handleRadioClick} type="radio" name="answer" className="form-check-input" id="optionOne" />
                                    {optionOne.text}
                                </label>
                            </div>

                            <div className="form-check">
                                <label>
                                    <input onClick={handleRadioClick} type="radio" name="answer" className="form-check-input" id="optionTwo" />
                                    {optionTwo.text}
                                </label>
                            </div>

                        </div>
                        <button
                            onClick={handleAddAnswerClick}
                            className="btn bg-login border-0 text-white mt-2"> Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ authedUser, users, questions }, props) => {
    return {
        authedUser,
        users,
        questions,
        id: props.id
    }
}

export default connect(mapStateToProps)(QuestionToAnswer);