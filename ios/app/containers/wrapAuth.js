import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticateUser, authorizeUser, registerUser } from '../state/actions/auth';

export default function wrapTripsList(Comp) {
  class WrapperComponent extends Component {
    render() {
      return <Comp {...this.props} />
    }
  };

  const mapStateToProps = (store) =>  {
    return {
      isFetching: store.userData.isFetching,
      user: store.userData.user
    };
  };

  return connect(mapStateToProps, {
    authenticateUser,
    authorizeUser,
    registerUser
  })(WrapperComponent);
};
