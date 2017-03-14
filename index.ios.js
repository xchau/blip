import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Navigator,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import store from './ios/app/state/store';
import Login from './ios/app/containers/Login';
import Registration from './ios/app/containers/Registration';
import { Test } from './ios/app/components/Test';

export default class Capstone extends Component {
  constructor() {
    super();

    this.renderScene = this.renderScene.bind(this);
  }

  getJWT() {

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
      case 'protected': {
        return <Test
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
      <Provider store={store} >
        <Navigator
          initialRoute={{name: 'registration'}}
          renderScene={this.renderScene}
          // navigationBar={
          //   <Navigator.NavigationBar
          //    routeMapper={{
          //      LeftButton: (route, navigator, index, navState) =>
          //       { return (<Text>Cancel</Text>); },
          //      RightButton: (route, navigator, index, navState) =>
          //        { return (<Text>Done</Text>); },
          //      Title: (route, navigator, index, navState) =>
          //        { return (<Text>Awesome Nav Bar</Text>); },
          //    }}
          //    style={{backgroundColor: 'gray'}}
          //  />
          // }
        />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Capstone', () => Capstone);
