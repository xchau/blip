import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveTrips } from '../state/actions/trips';

export default function wrapTripsList(Comp) {
  class WrapperComponent extends Component {
    render() {
      return <Comp {...this.props} />
    }
  };

  const mapStateToProps = (store) =>  {
    return {
      user: store.userData.user,
      trips: store.tripsData.trips
    };
  };

  return connect(mapStateToProps, {
    retrieveTrips
  })(WrapperComponent);
};
