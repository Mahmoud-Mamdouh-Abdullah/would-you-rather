import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';

function ProtectedRoute({ component: Component, authedUser, ...restProps }) {
  return (
    (authedUser !== null) ? <Component {...restProps} /> : <Navigate to="/login" />
  );
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(ProtectedRoute);
