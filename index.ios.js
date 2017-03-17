import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  Text,
  View
} from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import store from './ios/app/state/store';

import wrapAuth from './ios/app/containers/wrapAuth';
import wrapTripsList from './ios/app/containers/wrapTripsList';

import Login from './ios/app/components/Login';
import Registration from './ios/app/components/Registration';
import TripsList from './ios/app/components/TripsList';

export default class Capstone extends Component {
  render() {
    return <Provider store={store} >
      <Router>
        <Scene key="root">
          <Scene
            key="login"
            component={wrapAuth(Login)}
            hideNavBar={true}
            initial={true}
          />
          <Scene
            key="registration"
            component={wrapAuth(Registration)}
            hideNavBar={true}
            // initial={true}
          />
          <Scene
            key="tripslist"
            component={wrapTripsList(TripsList)}
            hideNavBar={true}
            // initial={true}
          />
        </Scene>
      </Router>
    </Provider>
  }
}

AppRegistry.registerComponent('Capstone', () => Capstone);
