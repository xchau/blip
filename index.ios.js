import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Navigator,
  View
} from 'react-native';
import Login from './app/containers/Login';
import Registration from './app/containers/Registration';

export default class Capstone extends Component {
  constructor() {
    super();

    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    switch (route.name) {
      case 'login': {
        return <Login
          navigator={navigator}
        />
        break;
      }
      case 'registration': {
        return <Registration
          navigator={navigator}
        />
        break;
      }
      default: {
        return <View>
          <Text>ERROR</Text>
        </View>
      }
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'login'}}
        renderScene={this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('Capstone', () => Capstone);
