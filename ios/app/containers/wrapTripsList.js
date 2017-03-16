import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveTrips } from '../state/actions/trips';

export default function wrapTripsList(Comp) {
  class WrappedComponent extends React.Component {
    render() {
      return <Comp {...this.props} />
    }
  }

  const mapStateToProps = (store) =>  {
    return {
      user: store.user,
      trips: store.trips
    };
  };

  return connect(mapStateToProps, {
    retrieveTrips
  })(WrappedComponent);
};
