import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTrip, retrieveTrips } from '../state/actions/trips';
import { refreshUser } from '../state/actions/users';
import { uploadCoverPhoto } from '../state/actions/photos';

export default function wrapTrips(Comp) {
  class WrapperComponent extends Component {
    render() {
      return <Comp {...this.props} />
    }
  };

  const mapStateToProps = (store) =>  {
    return {
      isFetching: store.tripsData.isFetching,
      user: store.userData.user,
      trips: store.tripsData.trips,
      photoInfo: store.imagesData.photoInfo,
      entryPhotos: store.imagesData.entryPhotos,
      userQuery: store.tripsData.userQuery
    };
  };

  return connect(mapStateToProps, {
    addTrip,
    retrieveTrips,
    refreshUser,
    uploadCoverPhoto
  })(WrapperComponent);
};
