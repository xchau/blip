import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Navigator,
  View
} from 'react-native';
import Login from './ios/app/containers/Login';
import Registration from './ios/app/containers/Registration';

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
    );
  }
}

AppRegistry.registerComponent('Capstone', () => Capstone);
