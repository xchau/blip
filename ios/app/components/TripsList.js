import React, { Component } from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import SearchBar from './Search';
import Trip from './Trip';
import { Menu } from './Menu';
import { NavBar } from './NavBar';

import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
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
    this._drawer.open();
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  render() {
    const menu = <Menu userData={this.props.user}>
      {/* <View style={menustyles.optionRow}>
        <Text
          onPress={Actions.login}
          style={menustyles.optionText}
        >
          Publish
        </Text>
      </View> */}

      <View style={menustyles.optionRow}>
        <Text
          onPress={Actions.login}
          style={menustyles.optionText}
        >
          My Trips
        </Text>
      </View>

      <View style={menustyles.optionRow}>
        <Text
          onPress={Actions.login}
          style={menustyles.optionText}
        >
          New Trip
        </Text>
      </View>

      {/* <View style={menustyles.optionRow}>
        <Text
          onPress={Actions.login}
          style={menustyles.optionText}
        >
          Add Entry
        </Text>
      </View> */}

      <View style={menustyles.optionRow}>
        <Text
          onPress={Actions.login}
          style={menustyles.optionText}
        >
          Favorites
        </Text>
      </View>
    </Menu>

    return <Drawer
      acceptPan={true}
      closedDrawerOffset={-3}
      content={menu}
      openDrawerOffset={0.4}
      panOpenMask={0.2}
      panCloseMask={0.2}
      ref={(ref) => this._drawer = ref}
      styles={drawerStyles}
      tapToClose={true}
      type="overlay"
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}
    >
      <NavBar />
      <SimpleLineIcon
        name="menu"
        color="black"
        onPress={this.openControlPanel}
        size={22}
        style={styles.menuIcon}
      />

      <View style={styles.searchContainer}>
        <SearchBar />
      </View>

      <View style={styles.listContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
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
        </ScrollView>
      </View>
    </Drawer>
  }
};
