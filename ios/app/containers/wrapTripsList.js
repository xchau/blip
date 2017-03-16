import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function wrapTripsList(Comp) {
  class WrappedComponent extends React.Component {
    render() {
      return <View><Comp {...this.props} /></View>
    }
  }

  const mapStateToProps = (store) =>  {
    return {
      user: store.user
    };
  };

  return connect(mapStateToProps)(WrappedComponent);
};
