import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import SideMenu from 'react-native-side-menu';
import Trips from '../components/Trips';
import { Menu } from '../components/Menu';
import Hamburger from './Hamburger';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/triplist';
import { menustyles } from '../styles/sidemenu';


class TripsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedItem: 'About',
    };

    this.navigateOnMenuSelect = this.navigateOnMenuSelect.bind(this);
  }

  toggleSideMenu() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  navigateOnMenuSelect(route) {
    this.props.navigator.push({name: route});
  }

  render() {
    console.log(this.props);
    const menu = <Menu
      navigator={this.props.navigator}
      onItemSelected={this.navigateOnMenuSelect}
    >
      <View style={menustyles.optionRow}>
        <Text
          onPress={() => props.onItemSelected('login')}
          style={menustyles.optionText}>
          Publish
        </Text>
      </View>

      <View style={menustyles.optionRow}>
        <Text
          onPress={() => props.onItemSelected('login')}
          style={menustyles.optionText}>
          My Trips
        </Text>
      </View>

      <View style={menustyles.optionRow}>
        <Text
          onPress={() => props.onItemSelected('login')}
          style={menustyles.optionText}>
          New Trip
        </Text>
      </View>

      <View style={menustyles.optionRow}>
        <Text
          onPress={() => props.onItemSelected('login')}
          style={menustyles.optionText}>
          Add Entry
        </Text>
      </View>

      <View style={menustyles.optionRow}>
        <Text
          onPress={() => props.onItemSelected('login')}
          style={menustyles.optionText}>
          Favorites
        </Text>
      </View>
    </Menu>;

    return <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}
      >
        <View style={styles.sceneContainer}>

        </View>
        <Hamburger style={styles.button} onPress={() => this.toggleSideMenu()}>
            <Ionicon name="ios-menu" size={25} />
        </Hamburger>
      </SideMenu>
  }
};

// const mapStateToProps = function(store) {
//   return {
//     user: store.user
//   };
// };

export default TripsList;
 // connect(mapStateToProps)(TripsList);
