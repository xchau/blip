import React from 'react';
import {
  Image,
  View
} from 'react-native';

import { styles } from '../styles/navbar';

export const NavBar = (props) => {
  return <View style={styles.navContainer}>
    <View style={styles.firstTwoBox}>
      { props.children }
      <Image
        source={require('../assets/logo.png')}
        style={styles.appName}
      />
    </View>
  </View>
};
