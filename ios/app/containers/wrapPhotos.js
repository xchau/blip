import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCoverPhoto, uploadCoverPhoto } from '../state/actions/photos';

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
    selectCoverPhoto,
    uploadCoverPhoto
  })(WrapperComponent);
};
