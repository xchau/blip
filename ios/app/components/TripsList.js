import React, { Component } from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Drawer from 'react-native-drawer';
import SearchBar from './SearchBar';
import Trip from './Trip';
import { Actions } from 'react-native-router-flux';
import { NavBar } from './NavBar';
import { ToolBar } from './ToolBar';
import { Menu } from './Menu';

import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { styles } from '../styles/tripslist';
import { menustyles } from '../styles/menustyles';
import { drawerstyles } from '../styles/drawerstyles';
import { loadtrips } from '../styles/loadtrips';

export default class TripsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showBackToTop: false,
      showAddTripForm: false
    };

    // this.handleBackPress = this.handleBackPress.bind(this);
    this.handleAddTripRedirect = this.handleAddTripRedirect.bind(this);
    this.handleBackToTop = this.handleBackToTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.openControlPanel = this.openControlPanel.bind(this);
  }

  componentDidMount() {
    this.props.retrieveTrips('trips')
      .then((res) => {
        this.setState({
          trips: res.value.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  closeControlPanel() {
    this._drawer.close();
  }

  openControlPanel() {
    this._drawer.open();
  }

  handleScroll(event) {
    if (event.nativeEvent.contentOffset.y > 120) {
      this.setState({
        showBackToTop: true
      });
    }
    else if (event.nativeEvent.contentOffset.y < 120) {
      this.setState({
        showBackToTop: false
      });
    }
  }

  handleBackToTop() {
    this.refs._scrollView.scrollTo(0);
  }

  handleBackPress() {
    // console.log(this.props);
    Actions.login();
  }

  handleAddTripRedirect() {
    // console.log(this.props);
    // this.props.user.id
    Actions.addtrip({currentUserId: this.props.user.id});
  }

  render() {
    StatusBar.setBarStyle('light-content', true);
    const userQueryRegExp = new RegExp(this.props.userQuery, 'ig');
    const currentUserId = this.props.user.id || 1;
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
      panCloseMask={0.5}
      ref={(ref) => this._drawer = ref}
      styles={drawerstyles}
      tapToClose={true}
      type="overlay"
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}
    >
      <NavBar />
      <SimpleLineIcon
        name="menu"
        color="#fff"
        onPress={this.openControlPanel}
        size={22}
        style={menustyles.menuIcon}
      />

      <View style={styles.listContainer}>
        <ScrollView
          onScroll={(e) => this.handleScroll(e)}
          ref='_scrollView'
          scrollEventThrottle={6}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <View style={styles.searchContainer}>
              <SearchBar />
            </View>
            {
              this.state.trips ?
                this.state.trips.filter(elem => {
                  // if () {
                  //   return elem;
                  // }
                  if (userQueryRegExp.test(elem.title) || userQueryRegExp.test(elem.username) || userQueryRegExp.test('sort:votes')) {
                    return elem;
                  }
                }).sort((a, b) => {
                  if (/^sort:votes/i.test(this.props.userQuery)) {
                    if (a.votes < b.votes) {
                      return 1;
                    }
                    if (a.votes > b.votes) {
                      return -1;
                    }

                    return 0;
                  }
                }).map(elem => <Trip
                  key={elem.id}
                  currentUserId={currentUserId}
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
        </ScrollView>
      </View>
      <ToolBar
        backToTop={this.handleBackToTop}
        goBack={this.handleBackPress}
        showBackToTop={this.state.showBackToTop}
      >
        <SimpleLineIcon
          color="#fff"
          name="plus"
          onPress={this.handleAddTripRedirect}
          size={25}
        />
      </ToolBar>
    </Drawer>
  }
};
