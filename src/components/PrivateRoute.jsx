import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux"
import { getSaved } from "../store/actions"

const PrivateRoute = ({ component: Component, ...rest }) => {
  return(
  <Route
    {...rest}
    render={props =>
      window.localStorage.getItem('token') ? (
        <TokenCheck {...props} Component={Component}/>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
)
};

const TokenCheckComponent = ({Component, ...props}) => {
  console.log(props)
  const { getSaved, user } = props;
  useEffect( () => {
    getSaved()
  }, [ getSaved ])
  if (user.tokenRejected) {
    window.localStorage.deleteItem('token')
    return <Redirect to="/login" />
  }
  console.log(user)
  console.log(user.currentUser)
  if ( user.currentUser&&!(user.tokenRejected)) return <Component {...props} />
  else return <h1>Loading...</h1>
}

const TokenCheck = connect((state) => ({...state}), { getSaved })(TokenCheckComponent);

export default PrivateRoute;