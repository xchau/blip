import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  menuIcon: {
    backgroundColor: 'transparent',
    paddingLeft: 15,
    position: 'absolute',
    top: 28,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  searchContainer: {
    alignItems: 'center',
    padding: 0
  },
  listContainer: {
    alignItems: 'center',
    // borderWidth: 1,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    // paddingRight: 10
  },
});
