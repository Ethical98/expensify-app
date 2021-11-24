import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header  from '../components/Header';

const PrivateRoute = ({ isAuthenitcated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenitcated ? (
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
        <Redirect to='/' />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenitcated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
