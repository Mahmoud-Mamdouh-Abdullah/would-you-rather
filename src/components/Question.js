import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Question = (props) => {

    const { author, optionOne } = props.questions[props.id];
    const { name, avatarURL } = props.users[author];
    const navigate = useNavigate();

    const handleViewPoll = () => {
        navigate(`/questions/${props.id}`)
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
                        <p className="fw-bold">Would you rather</p>
                        <p className="">.... {optionOne.text} ....</p>
                        <button
                            onClick={handleViewPoll}
                            className="btn bg-login border-0 text-white"
                        >View poll</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ questions, users }, props) => {
    return {
        users,
        questions,
        id: props.id,
    }
}
export default connect(mapStateToProps)(Question);