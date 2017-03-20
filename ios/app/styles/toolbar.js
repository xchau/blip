import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  tbContainer: {
    alignItems: 'center',
    bottom: 0,
    backgroundColor: 'rgba(42, 42, 42, 1)',
    flexDirection: 'row',
    height: height * 0.085,
    justifyContent: 'space-between',
    padding: 2,
    paddingLeft: 22,
    paddingRight: 35,
    position: 'absolute',
    width: width * 1.05
  },
  backButton: {
    color: '#fff'
  },
  quickButton: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 16,
  },
  backToTopButton: {
    color: '#fff'
  }
});
