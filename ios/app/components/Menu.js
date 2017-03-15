import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { menustyles } from '../styles/sidemenu';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

export const Menu = (props) => {
  return <ScrollView
    scrollsToTop={false}
    style={menustyles.menu}
  >
    <View style={menustyles.userBox}>
      <View style={menustyles.avatarBox}>
        <Image
          style={menustyles.avatar}
          source={{ uri, }}
        />
      </View>
      <Text style={menustyles.name}>Your name</Text>
    </View>

    { props.children }

    <View style={menustyles.optionRow}>
      <Text
        onPress={() => props.onItemSelected('login')}
        style={menustyles.optionText}>
        Sign out
      </Text>
    </View>

  </ScrollView>
}
