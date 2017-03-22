import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTrip, retrieveTrips } from '../state/actions/trips';
import { uploadCoverPhoto } from '../state/actions/photos';

export default function wrapTrips(Comp) {
  class WrapperComponent extends Component {
    render() {
      return <Comp {...this.props} />
    }
  };

  const mapStateToProps = (store) =>  {
    return {
      user: store.userData.user,
      trips: store.tripsData.trips,
      coverPhoto: store.imagesData.coverPhoto
    };
  };

  return connect(mapStateToProps, {
    addTrip,
    retrieveTrips,
    uploadCoverPhoto
  })(WrapperComponent);
};
