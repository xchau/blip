import React, { Component } from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import SearchBar from './Search';
import { Trip } from './Trip';
import { Menu } from './Menu';
import { NavBar } from './NavBar';

import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/tripslist';
import { menustyles } from '../styles/menustyles';
import { loadtrips } from '../styles/loadtrips';
import { drawerStyles } from '../styles/drawerstyles';

export default class TripsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.openControlPanel = this.openControlPanel.bind(this);
  }

  componentDidMount() {
    this.props.retrieveTrips()
      .then((res) => {
        this.setState({
          trips: res.value.data
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }

  closeControlPanel() {
    this._drawer.close();
  }

  openControlPanel() {
    console.log('try to open');
    this._drawer.open();
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  render() {
    const menu = <Menu>
      {/* <View style={menustyles.optionRow}>
        <Text
          onPress={Actions.login}
          style={menustyles.optionText}>
          Publish
        </Text>
      </View> */}

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

      {/* <View style={menustyles.optionRow}>
        <Text
          onPress={Actions.login}
          style={menustyles.optionText}>
          Add Entry
        </Text>
      </View> */}

      <View style={menustyles.optionRow}>
        <Text
          onPress={Actions.login}
          style={menustyles.optionText}>
          Favorites
        </Text>
      </View>
    </Menu>

    return <Drawer
      acceptPan={true}
      closedDrawerOffset={-3}
      content={menu}
      openDrawerOffset={0.4}
      panOpenMask={0.3}
      panCloseMask={0.3}
      ref={(ref) => this._drawer = ref}
      styles={drawerStyles}
      tapToClose={true}
      type="overlay"
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}
    >
      <NavBar />
      <Ionicon
        name="ios-menu"
        color="black"
        onPress={this.openControlPanel}
        size={38}
        style={styles.menuIcon}
      />

      <View style={styles.sceneContainer}>
        <SearchBar />

        {
          this.state.trips ?
            this.state.trips.map(elem => <Trip
              key={elem.id}
              trip={elem}
            />)
            :
            <View style={loadtrips.spinnerBox}>
              <ActivityIndicator
                style={loadtrips.spinner}
                size="large"
              />
            </View>
        }

      </View>
    </Drawer>
  }
};
