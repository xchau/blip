import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  return connect(mapStateToProps)(WrappedComponent);
};
