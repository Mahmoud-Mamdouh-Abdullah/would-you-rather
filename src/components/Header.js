import '../App.css';
import React from "react";
import { connect } from 'react-redux';
import { removeAuthedUser } from '../actions/authedUser'
import { useLocation, useNavigate } from 'react-router-dom';

const Header = (props) => {
    const location = useLocation();
    const naviagte = useNavigate();
    const { authedUser, dispatch, users } = props;
    const user = users[authedUser];

    const handleLogout = () => {
        dispatch(removeAuthedUser());
        naviagte('/login');
    }

    const handleTabClick = (path) => {
        if (authedUser !== null) {
            naviagte(path);
        }
    }

    const handleRegister = () => {
        naviagte('/register');
    }

    const handleLogin = () => {
        naviagte('/login');
    }
    
    return (
        <header className="border-bottom border-danger">
            <div className="navbar container d-flex flex-row justify-content-between">
                <ul className="nav">
                    <li className="nav-item">
                        <button
                            onClick={() => handleTabClick('/')}
                            className={"nav-link p-3 border-0 bg-white fw-bold " + (location.pathname === '/' ? 'text-danger' : 'text-black')}
                        >Home</button>
                    </li>
                    <li className="nav-item">
                        <button
                            onClick={() => handleTabClick('/add')}
                            className={"nav-link p-3 border-0 bg-white fw-bold " + (location.pathname === '/add' ? 'text-danger' : 'text-black')}
                        >New Question</button>
                    </li>
                    <li className="nav-item">
                        <button
                            onClick={() => handleTabClick('/leaderboard')}
                            className={"nav-link p-3 border-0 bg-white fw-bold " + (location.pathname === '/leaderboard' ? 'text-danger' : 'text-black')}
                        >Leader Board</button>
                    </li>
                </ul>
                {(authedUser !== null &&
                    <div className="d-flex flex-row justify-content-center">
                        <span className="me-2 fw-bold" >Hello, {user.name}</span>
                        <img src={user.avatarURL} alt="avatar" height="25" width="25" className="avatar me-2" />
                        <button onClick={handleLogout} className="text-danger border-0 bg-white fw-bold">Logout</button>
                    </div>
                )}

                {((location.pathname === '/login') &&
                    <div className="d-flex flex-row justify-content-center">
                        <button onClick={handleRegister} className="text-danger border-0 bg-white fw-bold">Register Now</button>
                    </div>
                )}

                {((location.pathname === '/register') &&
                    <div className="d-flex flex-row justify-content-center">
                        <button onClick={handleLogin} className="text-danger border-0 bg-white fw-bold">Login</button>
                    </div>
                )}

            </div>
        </header >
    )
}

const mapStateToProps = ({ authedUser, users }) => {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Header);