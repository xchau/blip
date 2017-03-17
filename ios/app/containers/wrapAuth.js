import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticateUser, authorizeUser, registerUser } from '../state/actions/auth';

export default function wrapTripsList(Comp) {
  class WrappedComponent extends React.Component {
    render() {
      return <Comp {...this.props} />
    }
  }

  const mapStateToProps = (store) =>  {
    return {
      user: store.user
    };
  };

  return connect(mapStateToProps, {
    authenticateUser,
    authorizeUser,
    registerUser
  })(WrappedComponent);
};
