import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Hamburger from './Hamburger';
import Trips from '../components/Trips';
import { Menu } from '../components/Menu';

import SideMenu from 'react-native-side-menu';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/triplist';
import { menustyles } from '../styles/sidemenu';

export default class TripsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedItem: 'About',
    };
  }

  toggleSideMenu() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  render() {
    console.log(this.props);
    const menu = <Menu
      onItemSelected={null}
      profilePic={undefined}
    >
      <View style={menustyles.optionRow}>
        <Text
          onPress={Actions.login}
          style={menustyles.optionText}>
          Publish
        </Text>
      </View>

      <View style={menustyles.optionRow}>
        <Text
          onPress={Actions.login}
          style={menustyles.optionText}>
          My Trips
        </Text>
      </View>

      <View style={menustyles.optionRow}>
        <Text
          onPress={Actions.login}
          style={menustyles.optionText}>
          New Trip
        </Text>
      </View>

      <View style={menustyles.optionRow}>
        <Text
          onPress={Actions.login}
          style={menustyles.optionText}>
          Add Entry
        </Text>
      </View>

      <View style={menustyles.optionRow}>
        <Text
          onPress={Actions.login}
          style={menustyles.optionText}>
          Favorites
        </Text>
      </View>
    </Menu>;

    return <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}
        userInfo={this.props.user.userInfo}
      >
        <View style={styles.sceneContainer}>

        </View>
        <Hamburger style={styles.button} onPress={() => this.toggleSideMenu()}>
          <Ionicon name="ios-menu" size={25} />
        </Hamburger>
      </SideMenu>
  }
};
