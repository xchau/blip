import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  selectCoverPhoto,
  uploadCoverPhoto,
  updateProfilePic
} from '../state/actions/photos';
import { refreshUser } from '../state/actions/users';

export default function wrapPhotos(Comp) {
  class WrapperComponent extends Component {
    render() {
      return <Comp {...this.props} />
    }
  };

  const mapStateToProps = (store) =>  {
    return {
      coverPhoto: store.imagesData.coverPhoto
    };
  };

  return connect(mapStateToProps, {
    refreshUser,
    selectCoverPhoto,
    uploadCoverPhoto,
    updateProfilePic
  })(WrapperComponent);
};
