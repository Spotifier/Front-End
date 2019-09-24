import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.dashboard.currentUser ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default connect((state) => ({...state}), {})(PrivateRoute);