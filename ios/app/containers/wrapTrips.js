import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTrip, retrieveTrips } from '../state/actions/trips';
import { retrieveEntryPhotos, uploadCoverPhoto } from '../state/actions/photos';

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
      cpInfo: store.imagesData.cpInfo,
      entryPhotos: store.imagesData.entryPhotos,
      userQuery: store.tripsData.userQuery
    };
  };

  return connect(mapStateToProps, {
    addTrip,
    retrieveTrips,
    retrieveEntryPhotos,
    uploadCoverPhoto
  })(WrapperComponent);
};
