import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Trips from './Trips';
import Menu from './Menu';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const TripsList = (props) => {
  const menu = <Menu navigator={props.navigator} />;

  return <SideMenu
    menu={menu}
    isOpen={false}
  >
    <Trips />
  </SideMenu>
}

// export default TripsList;
