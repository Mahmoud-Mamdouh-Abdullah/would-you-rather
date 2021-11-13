import { connect } from 'react-redux';
import React, { useState } from 'react';
import appIcon from '../images/app-icon.png';
import { handleAddUser } from '../actions/users';
import { useNavigate } from 'react-router-dom';
const RegistrationForm = (props) => {


    const navigate = useNavigate();
    const { users, dispatch } = props;
    const IDs = Object.keys(users);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');

    const handleSubmit = () => {
        if (name !== '' && username !== '' && avatar !== '' && !IDs.includes(username)) {
            let user = {
                id: username,
                name,
                avatarURL: avatar,
                answers: {},
                questions: []
            }
            console.log(user);
            dispatch(handleAddUser(user));
            navigate('/login');
        } else {
            alert('Invalid or missing data');
            setName('');
            setUsername('');
            setAvatar('');
        }
    }

    const handleDataChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'username':
                setUsername(e.target.value);
                break;
            case 'avatar':
                setAvatar(e.target.value);
                break;
            default:
                return
        }
    }

    return (
        <div className="card mt-5" style={{ width: "500px" }}>
            <div className="card-header">
                <h5 className="card-title">Registration Form</h5>
            </div>
            <div className="card-image card-body">
                <img src={appIcon} alt="app-icon" width="150" height="150" />
                <div className="card-text mt-3 fw-bold fs-5">
                    <span className="text-danger">Register </span>
                    <span className="text-primary">Now</span>
                </div>
            </div>
            <div className="card-body">
                <div className="d-grid gap-3">
                    <input value={name} onChange={handleDataChange} name="name" type="text" className="form-control" placeholder="Enter yout Name Here..." />
                    <input value={username} onChange={handleDataChange} name="username" type="text" className="form-control" placeholder="Enter yout username Here..." />
                    <input value={avatar} onChange={handleDataChange} name="avatar" type="text" className="form-control" placeholder="Enter yout Avatar URL Here..." />
                    <button onClick={handleSubmit} type="button" className="btn text-white bg-login border-0" >Register Now</button>
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

export default connect(mapStateToProps)(RegistrationForm);