import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  navContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(42, 42, 42, 0.97)',
    height: height * 0.085,
    justifyContent: 'center',
    paddingTop: 18,
    paddingLeft: 24,
    paddingRight: 28,
    width: width
  },
  appName: {
    color: '#fff',
    fontSize: 20,
  }
});
