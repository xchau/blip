import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: 'black',
    height: height,
    width: width
  }
});

export const Null = () => <View style={styles.sceneContainer}></View>
