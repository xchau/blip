import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { ActionConst, Scene, Router } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import store from './ios/app/state/store';

import wrapAuth from './ios/app/containers/wrapAuth';
import wrapTripsList from './ios/app/containers/wrapTripsList';
import wrapAddTripForm from './ios/app/containers/wrapAddTripForm';
import wrapEntries from './ios/app/containers/wrapEntries';

import Login from './ios/app/components/Login';
import Registration from './ios/app/components/Registration';
import TripsList from './ios/app/components/TripsList';
import AddTripForm from './ios/app/components/AddTripForm';
import EntriesList from './ios/app/components/EntriesList';

export default class Capstone extends Component {
  render() {
    return <Provider store={store}>
      <Router>
        <Scene key="root">
          <Scene
            component={wrapAuth(Login)}
            hideNavBar={true}
            // initial={true}
            key="login"
          />
          <Scene
            component={wrapAuth(Registration)}
            hideNavBar={true}
            // initial={true}
            key="registration"
          />
          <Scene
            component={wrapTripsList(TripsList)}
            hideNavBar={true}
            initial={true}
            key="tripslist"
            type={ActionConst.REPLACE}
          />
          <Scene
            component={wrapAddTripForm(AddTripForm)}
            hideNavBar={true}
            // initial={true}
            key="addtrip"
            type={ActionConst.REPLACE}
          />
          <Scene
            component={wrapEntries(EntriesList)}
            hideNavBar={true}
            // initial={true}
            key="entrieslist"
            type={ActionConst.REPLACE}
          />
        </Scene>
      </Router>
    </Provider>
  }
}

AppRegistry.registerComponent('Capstone', () => Capstone);
