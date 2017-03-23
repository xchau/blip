import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  navContainer: {
    alignItems: 'flex-start',
    backgroundColor: 'rgba(42, 42, 42, 0.97)',
    height: height * 0.085,
    justifyContent: 'center',
    marginLeft: -3,
    paddingTop: 18,
    paddingLeft: 10,
    paddingRight: 28,
    width: width
  },
  firstTwoBox: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.6
  },
  appName: {
    color: '#fff',
    fontSize: 20,
    top: -3,
  }
});
