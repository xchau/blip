import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
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
import { Menu } from './Menu';
import { NavBar } from './NavBar';
import { ToolBar } from './ToolBar';

import Ionicon from 'react-native-vector-icons/Ionicons';
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

    this.handleAddTripRedirect = this.handleAddTripRedirect.bind(this);
    this.handleBackToTop = this.handleBackToTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleRedirectToTrip = this.handleRedirectToTrip.bind(this);
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

  async handleBackPress() {
    try {
      await AsyncStorage.removeItem('token');

      Actions.login();
    }
    catch (err) {
      console.error(err);
    }
  }

  handleRedirectToTrip() {
    Actions.entrieslist({
      tripId: this.props.user.isTraveling,
      isOwner: true
    });
  }

  handleAddTripRedirect() {
    Actions.addtrip({currentUserId: this.props.user.id});
  }

  render() {
    StatusBar.setBarStyle('light-content', true);

    const userQueryRegExp = new RegExp(this.props.userQuery, 'ig');
    const currentUserId = this.props.user.id;
    const menu = <Menu userData={this.props.user}>
      {
        this.props.user.isTraveling ?
          <View style={menustyles.optionRow}>
            <Text
              onPress={this.handleRedirectToTrip}
              style={menustyles.optionText}
            >
              My Trip
            </Text>
          </View>
          :
          null
      }
      {
        this.props.user.isTraveling ?
          null
          :
          <View style={menustyles.optionRow}>
            <Text
              onPress={Actions.login}
              style={menustyles.optionText}
            >
              New Trip
            </Text>
          </View>
      }
      <View style={menustyles.optionRow}>
        <Text
          onPress={Actions.login}
          style={menustyles.optionText}
        >
          Trip History
        </Text>
      </View>
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
      side="right"
      styles={drawerstyles}
      tapToClose={true}
      type="overlay"
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}
    >
      <NavBar>
        <TouchableHighlight>
          <Ionicon
            color="transparent"
            name="ios-arrow-back"
            size={33}
          />
        </TouchableHighlight>
      </NavBar>

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
                  if (elem.published && (userQueryRegExp.test(elem.title) || userQueryRegExp.test(elem.username) || userQueryRegExp.test(elem.destination) || userQueryRegExp.test('sort:votes'))) {
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
                  retrieveEntryPhotos={this.props.retrieveEntryPhotos}
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
        showBackToTop={this.state.showBackToTop}
      >
        {
          this.props.user.isTraveling ?
            <SimpleLineIcon
              color="#fff"
              name="notebook"
              onPress={this.handleRedirectToTrip}
              size={25}
            />
            :
            <SimpleLineIcon
              color="#fff"
              name="plus"
              onPress={this.handleAddTripRedirect}
              size={28}
            />
        }
      </ToolBar>
    </Drawer>
  }
};
