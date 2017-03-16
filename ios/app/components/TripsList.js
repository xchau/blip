import React, { Component } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Hamburger from './Hamburger';
import SearchBar from './Search';
import { Trip } from './Trip';
import { Menu } from './Menu';
import { NavBar } from './NavBar';

import SideMenu from 'react-native-side-menu';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/tripslist';
import { loadtrips } from '../styles/loadtrips';
import { menustyles } from '../styles/sidemenu';

export default class TripsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
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

  toggleSideMenu() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  render() {
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
        openMenuOffset={200}
        bounceBackOnOverdraw={false}
        onChange={(isOpen) => this.updateMenuState(isOpen)}
        userData={this.props.userData}
      >

        <NavBar />

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

        <Hamburger style={styles.button} onPress={() => this.toggleSideMenu()}>
          <Ionicon name="ios-menu" size={25} />
        </Hamburger>
      </SideMenu>
  }
};
