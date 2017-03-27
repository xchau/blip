import React, { Component } from 'react';
import {
  AlertIOS,
  AsyncStorage,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Foundation from 'react-native-vector-icons/Foundation';
import { menustyles } from '../styles/menustyles';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.handleChangeProfilePic = this.handleChangeProfilePic.bind(this);
  }

  handleChangeProfilePic() {
    Actions.camroll({selectType: 'profile'});
  }

  render() {
    const uri = this.props.userData.profilePic;

    return <ScrollView
      scrollsToTop={false}
      contentContainerStyle={menustyles.scrollViewStyles}
    >
      <View>
        <View style={menustyles.userBox}>
          <View style={menustyles.avatarBox}>
            <Image
              style={menustyles.avatar}
              source={{ uri }}
            />
          </View>
          <TouchableHighlight
            onPress={this.handleChangeProfilePic}
            style={menustyles.editBox}
          >
            <Foundation name="pencil" color="#fff" size={22} />
          </TouchableHighlight>
        </View>

        <View style={menustyles.horizontalBar}></View>

        { this.props.children }
      </View>

      <View style={menustyles.signoutRow}>
        <Text
          onPress={async () => {
            try {
              await AsyncStorage.removeItem('token');
              AlertIOS.alert('Successfully logged out');
              Actions.login();
            }
            catch (err) {
              console.error(err);
            }
          }}
          style={menustyles.optionText}
        >
          Sign out
        </Text>
      </View>
    </ScrollView>
  }
}
