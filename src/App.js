import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import LeaderBoard from './components/LeaderBoard';
import CreateQuestion from './components/CreateQuestion';
import { useEffect } from 'react';
import { handleGetUsers } from './actions/users'
import { handleGetQuestion } from './actions/questions'
import { connect } from 'react-redux';
import PageNotFound from './components/PageNotFound';
import ProtectedRoute from './components/ProtectedRoute';
import QuestionForm from './components/QustionForm';
import LoadingBar from "react-redux-loading";
import SignupForm from './components/RegistrationForm';


function App(props) {

  const { dispatch } = props;

  useEffect(() => {
    dispatch(handleGetUsers());
    dispatch(handleGetQuestion())
  });

  return (
    <div className="App" >
      <Header />
      <LoadingBar />
      <Routes>

        <Route path="/login" element={
          <div className="d-flex flex-row justify-content-center">
            <Login />
          </div>
        }
        />

        <Route path="/register" element={
          <div className="d-flex flex-row justify-content-center">
            <SignupForm />
          </div>
        }
        />

        <Route path="/" element={
          <div className="d-flex flex-row justify-content-center mt-5">
            <ProtectedRoute component={Home} />
          </div>
        } />

        <Route path="/leaderboard" element={
          <div className="d-flex flex-row justify-content-center mt-5">
            <ProtectedRoute component={LeaderBoard} />
          </div>
        } />

        <Route path="/add" element={
          <div className="d-flex flex-row justify-content-center mt-5">
            <ProtectedRoute component={CreateQuestion} />
          </div>
        } />

        <Route path="/questions/:question_id" element={
          <div className="d-flex flex-row justify-content-center mt-5">
            <ProtectedRoute component={QuestionForm} />
          </div>
        } />

        <Route
          path="*"
          element={
            <PageNotFound />
          }
        />

      </Routes>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(App);
