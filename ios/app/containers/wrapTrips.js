import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTrip, retrieveTrips } from '../state/actions/trips';

export default function wrapTrips(Comp) {
  class WrapperComponent extends Component {
    render() {
      return <Comp {...this.props} />
    }
  };

  const mapStateToProps = (store) =>  {
    console.log(store);
    return {
      user: store.userData.user,
      trips: store.tripsData.trips,
      coverUri: store.imagesData.coverUri
    };
  };

  return connect(mapStateToProps, {
    addTrip,
    retrieveTrips
  })(WrapperComponent);
};
