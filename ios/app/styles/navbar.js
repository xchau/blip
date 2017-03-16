import { Dimensions, StyleSheet } from 'react-native';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  navContainer: {
    alignItems: 'flex-end',
    backgroundColor: '#fff08c',
    flexDirection: 'row',
    justifyContent: 'center',
    height: window.height * 0.1,
    width: window.width
  },
  appName: {
    fontSize: 20,
    marginBottom: 14
  }
})
