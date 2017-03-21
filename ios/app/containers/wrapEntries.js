import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveEntries } from '../state/actions/entries';

export default function wrapEntries(Comp) {
  class WrapperComponent extends Component {
    render() {
      return <Comp {...this.props} />
    }
  };

  const mapStateToProps = (store) =>  {
    return {
      // user: store.userData.user,
      // entries: store.entriesData.entries
    };
  };

  return connect(mapStateToProps, {
    retrieveEntries
  })(WrapperComponent);
};
