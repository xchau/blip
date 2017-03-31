import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addEntry,
  retrieveEntries,
  updateEntry
} from '../state/actions/entries';
import { refreshUser } from '../state/actions/users';
import { retrieveCoverPhoto } from '../state/actions/photos';
import { deleteTrip, togglePublish } from '../state/actions/trips';

export default function wrapEntries(Comp) {
  class WrapperComponent extends Component {
    render() {
      return <Comp {...this.props} />
    }
  };

  const mapStateToProps = (store) =>  {
    return {
      isFetching: store.entriesData.isFetching,
      user: store.userData.user,
      displayedCoverPhoto: store.imagesData.displayedCoverPhoto
    };
  };

  return connect(mapStateToProps, {
    addEntry,
    deleteTrip,
    retrieveEntries,
    retrieveCoverPhoto,
    refreshUser,
    togglePublish,
    updateEntry
  })(WrapperComponent);
};
