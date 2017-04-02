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
import wrapTrips from './ios/app/containers/wrapTrips';
import wrapEntries from './ios/app/containers/wrapEntries';
import wrapPhotos from './ios/app/containers/wrapPhotos';

import Login from './ios/app/components/Login';
import Registration from './ios/app/components/Registration';
import TripsList from './ios/app/components/TripsList';
import AddTripForm from './ios/app/components/AddTripForm';
import EntriesList from './ios/app/components/EntriesList';
import AddEntryForm from './ios/app/components/AddEntryForm';
import UpdateEntryForm from './ios/app/components/UpdateEntryForm';
import CamRoll from './ios/app/components/CamRoll';
import CameraView from './ios/app/components/CameraView';
import PhotoView from './ios/app/components/PhotoView';
import TravelHistory from './ios/app/components/TravelHistory';

export default class Capstone extends Component {
  render() {
    return <Provider store={store}>
      <Router>
        <Scene key="root">
          <Scene
            component={wrapAuth(Login)}
            hideNavBar={true}
            initial={true}
            key="login"
          />
          <Scene
            component={wrapAuth(Registration)}
            hideNavBar={true}
            key="registration"
          />
          <Scene
            component={wrapTrips(TripsList)}
            hideNavBar={true}
            key="tripslist"
            type={ActionConst.REPLACE}
          />
          <Scene
            component={wrapTrips(AddTripForm)}
            hideNavBar={true}
            key="addtrip"
            type={ActionConst.REPLACE}
          />
          <Scene
            component={wrapEntries(EntriesList)}
            hideNavBar={true}
            key="entrieslist"
            type={ActionConst.REPLACE}
          />
          <Scene
            component={wrapEntries(AddEntryForm)}
            hideNavBar={true}
            key="addentry"
            type={ActionConst.REPLACE}
          />
          <Scene
            component={wrapEntries(UpdateEntryForm)}
            hideNavBar={true}
            key="updateentry"
            type={ActionConst.REPLACE}
          />
          <Scene
            component={wrapPhotos(CamRoll)}
            hideNavBar={true}
            key="camroll"
            type={ActionConst.PUSH}
          />
          <Scene
            component={wrapPhotos(CameraView)}
            hideNavBar={true}
            key="camview"
            type={ActionConst.PUSH}
          />
          <Scene
            component={PhotoView}
            hideNavBar={true}
            key="photoview"
            type={ActionConst.PUSH}
          />
          <Scene
            component={wrapTrips(TravelHistory)}
            hideNavBar={true}
            key="history"
            type={ActionConst.REPLACE}
          />
        </Scene>
      </Router>
    </Provider>
  }
}

AppRegistry.registerComponent('Capstone', () => Capstone);
