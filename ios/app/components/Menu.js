import React, { Component } from 'react';
import {
  AlertIOS,
  AsyncStorage,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { menustyles } from '../styles/sidemenu';

// this.props.user.userInfo.profilePic
export const Menu = (props) => {
const uri = props.profilePic || 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';
const name = props.name || `User`

  return <ScrollView
    scrollsToTop={false}
    style={menustyles.menuBox}
  >
    <View style={menustyles.userBox}>
      <View style={menustyles.avatarBox}>
        <Image
          style={menustyles.avatar}
          source={{ uri }}
        />
      </View>
      <Text style={menustyles.userName}>{`Hi, ${name}`}</Text>
    </View>

    <View style={menustyles.horizontalBar}></View>

    { props.children }

    {/* <View style={{ borderWidth: 1, flex: 1, flexDirection: 'column' }}> */}
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
          style={menustyles.optionText}>
          Sign out
        </Text>
      {/* </View> */}

    </View>
  </ScrollView>
}
