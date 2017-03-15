import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  Text,
  Navigator,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import store from './ios/app/state/store';
import Login from './ios/app/containers/Login';
import Registration from './ios/app/containers/Registration';
import TripsList from './ios/app/containers/TripsList';
import { Test } from './ios/app/components/Test';

export default class Capstone extends Component {
  constructor() {
    super();

    this.renderScene = this.renderScene.bind(this);
  }

  async redirectIfAuth() {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      return 'tripslist';
    }

    return 'login';
  }

  renderScene(route, navigator) {
    switch (route.name) {
      case 'login': {
        return <Login
          navigator={navigator}
        />
        break;
      };
      case 'registration': {
        return <Registration
          navigator={navigator}
        />
        break;
      };
      case 'protected': {
        return <Test
          navigator={navigator}
        />
        break;
      };
      case 'tripslist': {
        return <TripsList
          navigator={navigator}
        />
      };
      default: {
        return <View>
          <Text>ROUTER ERROR</Text>
        </View>
      };
    };
  }

  render() {
    console.log(this.redirectIfAuth());
    return <Provider store={store} >
      <Navigator
        initialRoute={{name: 'login'}}
        renderScene={this.renderScene}
      />
    </Provider>
  }
}

AppRegistry.registerComponent('Capstone', () => Capstone);
