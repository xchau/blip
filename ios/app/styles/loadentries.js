import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const loadentries = StyleSheet.create({
  spinnerBox: {
    backgroundColor: 'transparent',
    height: height * 0.7,
    flex: 1,
    justifyContent: 'center'
  },
  spinner: {
    top: 10,
    width: width
  }
})
