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

// class Button extends Component {
//   handlePress(e) {
//     if (this.props.onPress) {
//       this.props.onPress(e);
//     }
//   }
//
//   render() {
//     return (
//       <TouchableOpacity
//         onPress={this.handlePress.bind(this)}
//         style={this.props.style}>
//         <Text>{this.props.children}</Text>
//       </TouchableOpacity>
//     );
//   }
// }

class TripsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedItem: 'About',
    };

    this.navigateOnMenuSelect = this.navigateOnMenuSelect.bind(this);
  }

  toggle() {
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
        <View style={styles.container}>
          {/* <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+Control+Z for dev menu
          </Text>
          <Text style={styles.instructions}>
            Current selected menu item is: {this.state.selectedItem}
          </Text> */}
        </View>
        <Hamburger style={styles.button} onPress={() => this.toggle()}>
            <Ionicon name="ios-menu" size={25} />
        </Hamburger>
      </SideMenu>
  }
};

export default TripsList;
