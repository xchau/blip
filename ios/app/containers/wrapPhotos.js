import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCoverPhoto } from '../state/actions/photos';

export default function wrapPhotos(Comp) {
  class WrapperComponent extends Component {
    render() {
      return <Comp {...this.props} />
    }
  };

  const mapStateToProps = (store) =>  {
    console.log(store);
    return {
      coverUri: store.imagesData.coverUri
    };
  };

  return connect(mapStateToProps, {
    selectCoverPhoto
  })(WrapperComponent);
};
