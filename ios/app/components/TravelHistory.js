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
import SearchBar from './SearchBar';
import HistoryTrip from './HistoryTrip';
import { Actions } from 'react-native-router-flux';
import { NavBar } from './NavBar';
import { ToolBar } from './ToolBar';

import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/travelhistory';
import { loadtrips } from '../styles/loadtrips';

export default class TravelHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showBackToTop: false,
    };

    this.handleBackToTop = this.handleBackToTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    // console.log(this.props.token);
    this.props.retrieveHistory(this.props.token)
      .then((res) => {
        this.setState({
          trips: res.value.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleBackPress() {
    Actions.tripslist();
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

  render() {
    StatusBar.setBarStyle('light-content', true);

    const userQueryRegExp = new RegExp(this.props.userQuery, 'ig');
    const currentUserId = this.props.userId;

    return <View
      style={styles.sceneContainer}
    >
      <NavBar>
        <TouchableHighlight
          onPress={this.handleBackPress}
        >
          <Ionicon
            color="#fff"
            name="ios-arrow-back"
            size={33}
          />
        </TouchableHighlight>
      </NavBar>

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
                  if (userQueryRegExp.test(elem.title) || userQueryRegExp.test(elem.destination) || userQueryRegExp.test('sort:votes')) {
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
                }).map(elem => <HistoryTrip
                  key={elem.id}
                  currentUserId={currentUserId}
                  trip={elem}
                  retrieveEntryPhotos={this.props.retrieveEntryPhotos}
                />)
                :
                <View style={loadtrips.spinnerBox}>
                  <ActivityIndicator
                    color="#44ecba"
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
      />
    </View>
  }
};
