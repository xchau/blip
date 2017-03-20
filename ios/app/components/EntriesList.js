import React, { Component } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Drawer from 'react-native-drawer';
import Entry from './Entry';
import { Actions } from 'react-native-router-flux';
import { NavBar } from './NavBar';
import { ToolBar } from './ToolBar';
import { Menu } from './Menu';

import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { styles } from '../styles/entrieslist';
import { menustyles } from '../styles/menustyles';
import { drawerstyles } from '../styles/drawerstyles';
import { loadentries } from '../styles/loadentries'

export default class EntriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showBackToTop: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleBackToTop = this.handleBackToTop.bind(this);
    this.openControlPanel = this.openControlPanel.bind(this);
  }

  componentDidMount() {
    const id = this.props.id;

    this.props.retrieveEntries(id)
      .then((res) => {
        this.setState({
          entries: res.value.data
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
    console.log('pressed');
    Actions.pop();
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
        size={25}
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
            {
              this.state.entries ?
                this.state.entries.map(elem => <Entry
                    key={elem.id}
                    entry={elem}
                  />)
                :
                <View style={loadentries.spinnerBox}>
                  <ActivityIndicator
                    style={loadentries.spinner}
                    size="large"
                  />
                </View>
            }
          </View>
        </ScrollView>
        {
          this.state.showBackToTop ?
            <TouchableHighlight onPress={this.handleBackToTop}>
              <SimpleLineIcon
                name="arrow-up-circle"
                size={25}
                style={{backgroundColor: 'transparent', position: 'absolute', bottom: 5}}
              />
            </TouchableHighlight>
            :
            null
        }
      </View>
      <ToolBar
        backToTop={this.handleBackToTop}
        goBack={this.handleBackPress}
        showBackToTop={this.state.showBackToTop}
      />
    </Drawer>
  }
};
