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
    console.log(store);
    return {
      user: store.userData.user,
      trips: store.tripsData.trips,
      cpInfo: store.imagesData.cpInfo
    };
  };

  return connect(mapStateToProps, {
    addTrip,
    retrieveTrips,
    uploadCoverPhoto
  })(WrapperComponent);
};
