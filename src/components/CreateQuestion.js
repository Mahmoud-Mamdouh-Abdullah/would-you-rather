import React, { useState } from "react";
import { handleCreateQuestion } from '../actions/shared';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreateQuestion = (props) => {

    const { authedUser, dispatch } = props;
    const navigate = useNavigate();
    const [optionOneText, setOptionOne] = useState('');
    const [optionTwoText, setOptionTwo] = useState('');

    const handleCreateQuestionClick = () => {
        if (optionOneText !== '' || optionTwoText !== '') {
            dispatch(handleCreateQuestion({
                author: authedUser,
                optionOneText,
                optionTwoText,
            }));
            navigate('/');
        }
    }

    const handleOptionOneChange = (e) => {
        setOptionOne(e.target.value);
    }

    const handleOptionTwoChange = (e) => {
        setOptionTwo(e.target.value);
    }

    return (
        <div className="card" style={{ width: "600px" }}>
            <div className="card-header bg-white">
                <h3 className="card-text fw-bold">Create New Question</h3>
            </div>

            <div className="card-body d-grid gap-2">
                <div className="card-title text-start">Complete the question</div>
                <p className="card-text fs-5 fw-bold text-start">Would you rather ....</p>
                <input
                    onChange={handleOptionOneChange}
                    type="text"
                    placeholder="Enter Option One Text Here..."
                    className="form-control"
                />
                <div className="card-text fw-bold">OR</div>
                <input
                    onChange={handleOptionTwoChange}
                    type="text"
                    placeholder="Enter Option Two Text Here..."
                    className="form-control" />
                <button
                    onClick={handleCreateQuestionClick}
                    type="button"
                    className="btn bg-login border-0 text-white mt-3 d-inline-block"
                >Submit</button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(CreateQuestion);