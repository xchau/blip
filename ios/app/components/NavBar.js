import React from 'react';
import {
  Text,
  View
} from 'react-native';

import { styles } from '../styles/navbar';

export const NavBar = (props) => {
  return <View style={styles.navContainer}>
    <Text style={styles.appName}>NAV BAR</Text>
  </View>
};
