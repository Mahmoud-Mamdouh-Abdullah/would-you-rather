import React, { useState } from "react";
import { connect } from "react-redux";
import appIcon from '../images/app-icon.png';
import { setAuthedUserAction } from '../actions/authedUser';
import { useNavigate } from 'react-router-dom';

function Login(props) {

    const { users, dispatch } = props;
    const [userId, setUserId] = useState(null);
    const [goToHome, setGoToHome] = useState(false);
    const naviagte = useNavigate();
    const handleSelectChange = (e) => {
        setUserId(e.target.value);
    }

    const handleSubmit = () => {
        if (userId !== null) {
            dispatch(setAuthedUserAction(userId));
            setGoToHome(true);
        }
    }

    if(goToHome) {
        naviagte('/');
    }

    return (
        <div className="card mt-5" style={{ width: "500px" }}>
            <div className="card-header">
                <h5 className="card-title">Welcome to Would You Rather Game ?</h5>
                <p className="card-text">Please Sign in to Continue</p>
            </div>
            <div className="card-image card-body">
                <img src={appIcon} alt="app-icon" width="150" height="150" />
                <div className="card-text mt-3 fw-bold fs-5">
                    <span className="text-danger">Sign </span>
                    <span className="text-primary">in</span>
                </div>
            </div>
            <div className="card-body">
                <div className="d-grid gap-3">
                    <select className="form-select" onChange={handleSelectChange} defaultValue="def">
                        <option value="def" disabled className="text-secondary" >Select User</option>
                        {Object.keys(users).map(key => (
                            <option key={key} value={key}>{users[key].name}</option>
                        ))}
                    </select>
                    <button onClick={handleSubmit} type="button" className="btn text-white bg-login border-0" >Sign in</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    return {
        users
    }
}

export default connect(mapStateToProps)(Login)