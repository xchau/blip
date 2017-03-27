import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEntry, retrieveEntries } from '../state/actions/entries';
import { deleteTrip, togglePublish } from '../state/actions/trips';

export default function wrapEntries(Comp) {
  class WrapperComponent extends Component {
    render() {
      return <Comp {...this.props} />
    }
  };

  const mapStateToProps = (store) =>  {
    return {
      user: store.userData.user,
    };
  };

  return connect(mapStateToProps, {
    addEntry,
    deleteTrip,
    retrieveEntries,
    togglePublish
  })(WrapperComponent);
};
