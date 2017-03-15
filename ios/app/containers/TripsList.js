import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Trips from '../components/Trips';
import Menu from '../components/Menu';
import Hamburger from './Hamburger';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/triplist';

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
    />;

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

export default TripsList;
