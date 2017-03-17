import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;

export const loadtrips = StyleSheet.create({
  spinnerBox: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center'
  },
  spinner: {
    bottom: 60,
    width: width
  }
})
