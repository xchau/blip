import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTrip } from '../state/actions/trips';

export default function wrapAddTripForm(Comp) {
  class WrapperComponent extends Component {
    render() {
      return <Comp {...this.props} />
    }
  };

  const mapStateToProps = (store) =>  {
    return {
      imagesData: store
    };
  };

  return connect(mapStateToProps, {
    addTrip
  })(WrapperComponent);
};
