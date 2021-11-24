import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ loggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        loggedIn ? <Redirect to='/dashboard' /> : <Component {...props} />
      }
    ></Route>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);
