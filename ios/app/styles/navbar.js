import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  navContainer: {
    alignItems: 'flex-start',
    backgroundColor: '#2a2a2a',
    height: height * 0.085,
    justifyContent: 'center',
    marginLeft: -3,
    paddingTop: 18,
    paddingLeft: 10,
    paddingRight: 28,
    width: width * 1.1
  },
  firstTwoBox: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.6
  },
  appName: {
    height: 30,
    marginTop: -4,
    marginRight: -47,
    resizeMode: 'contain',
    width: width * 0.5
  }
});
