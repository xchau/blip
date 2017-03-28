import React, { Component } from 'react';
import {
  ActivityIndicator,
  AlertIOS,
  AsyncStorage,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Drawer from 'react-native-drawer';
import Entry from './Entry';
import Menu from './Menu';
import { Actions } from 'react-native-router-flux';
import { NavBar } from './NavBar';
import { ToolBar } from './ToolBar';

import Ionicon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { styles } from '../styles/entrieslist';
import { menustyles } from '../styles/menustyles';
import { drawerstyles } from '../styles/drawerstyles';
import { loadentries } from '../styles/loadentries'

export default class EntriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showBackToTop: false,
      isOwner: this.props.isOwner,
      entries: []
    };

    this.handleAddEntryRedirect = this.handleAddEntryRedirect.bind(this);
    this.handleBackToTop = this.handleBackToTop.bind(this);
    this.handleDeleteTrip = this.handleDeleteTrip.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleTogglePublish = this.handleTogglePublish.bind(this);
    this.openControlPanel = this.openControlPanel.bind(this);
    this.updateEntries = this.updateEntries.bind(this);
  }

  componentDidMount() {
    const tripId = this.props.tripId;

    let entries;

    this.props.retrieveEntries(tripId)
      .then((res) => {
        entries = res.value.data;

        this.props.retrieveCoverPhoto(tripId)
          .then((res) => {
            console.log(res);
            this.setState({
              entries,
              coverPhoto: res.value.data.coverPhoto,
              tripTitle: res.value.data.title
            });
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleAddEntryRedirect() {
    const token = this.props.user.token;
    const tripId = this.props.tripId;

    Actions.addentry({token, tripId});
  }

  async handleTogglePublish() {
    const token = await AsyncStorage.getItem('token');
    const tripId = this.props.tripId;
    const userId = this.props.user.id;

    this.props.togglePublish(tripId, userId, token);

    // Actions.tripslist();
  }

  updateEntries(entries) {
    this.setState({entries});
  }

  async handleDeleteTrip() {
    const token = await AsyncStorage.getItem('token');
    const tripId = this.props.tripId;

    AlertIOS.alert('Delete your trip?', 'Unfortunately, no take backsies.', [
      {text: 'Cancel', onPress: () => null},
      {text: 'Confirm', onPress: () => {
        return this.props.deleteTrip(tripId, token)
          .then((res) => {
            const userId = this.props.user.id;

            this.props.refreshUser(userId);

            Actions.tripslist();
          });
      }}
    ]);
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
    Actions.tripslist();
  }

  render() {
    StatusBar.setBarStyle('light-content', true);

    const menu = <Menu userData={this.props.user}>
      {
        this.state.isOwner ?
          <View style={menustyles.optionRow}>
            <Text
              onPress={this.handleAddEntryRedirect}
              style={menustyles.optionText}
            >
              Add Entry
            </Text>
          </View>
          :
          null
      }
      {
        this.state.isOwner ?
          <View style={menustyles.optionRow}>
            <Text
              onPress={this.handleTogglePublish}
              style={menustyles.optionText}
            >
              {this.props.user.isTraveling ? 'Publish' : 'Unpublish'}
            </Text>
          </View>
          :
          null
      }
      {
        this.state.isOwner ?
          <View style={menustyles.optionRow}>
            <Text
              onPress={this.handleDeleteTrip}
              style={menustyles.optionText}
            >
              Delete Trip
            </Text>
          </View>
          :
          null
      }
      {
        this.state.isOwner ?
          null
          :
          <View style={menustyles.optionRow}>
            <Text
              onPress={Actions.login}
              style={menustyles.optionText}
            >
              Add to Favorites
            </Text>
          </View>
      }
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
        <TouchableHighlight onPress={this.handleBackPress}>
          <Ionicon
            color="#fff"
            name="ios-arrow-back"
            size={33}
          />
        </TouchableHighlight>
      </NavBar>
      <SimpleLineIcon
        name="menu"
        color="#fff"
        onPress={this.openControlPanel}
        size={18}
        style={menustyles.menuIcon}
      />
      {
        this.state.coverPhoto ?
          <View style={styles.coverPhotoBox}>
            <Image
              source={{uri: this.state.coverPhoto}}
              style={styles.coverPhoto}
            >
              <Text style={styles.tripTitle}>{this.state.tripTitle}</Text>
            </Image>
          </View>
          :
          <View style={styles.coverPhotoBox}>
            <ActivityIndicator
              animating={true}
              style={styles.spinner}
            />
          </View>
      }
      <View style={styles.listContainer}>
        <ScrollView
          onScroll={(e) => this.handleScroll(e)}
          ref='_scrollView'
          scrollEventThrottle={6}
          showsVerticalScrollIndicator={false}
        >
          <View>
            {
              this.state.entries.length ?
                this.state.entries.map(elem => {
                  return <Entry
                    entry={elem}
                    entries={this.state.entries}
                    isOwner={this.state.isOwner}
                    tripId={this.props.tripId}
                    updateEntries={this.updateEntries}
                    key={elem.id}
                  />})
                :
                null
            }
          </View>
        </ScrollView>
      </View>
      <ToolBar
        backToTop={this.handleBackToTop}
        showBackToTop={this.state.showBackToTop}
      >
        {
          this.state.isOwner ?
            <SimpleLineIcon
              color="#fff"
              name="plus"
              onPress={this.handleAddEntryRedirect}
              size={27}
            />
            :
            <SimpleLineIcon
              name="heart"
              size={27}
              color="#ff4a4a"
            />
        }
      </ToolBar>
    </Drawer>
  }
};
