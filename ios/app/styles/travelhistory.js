import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  sceneContainer: {
    // borderWidth: 1,
    height: height,
    width: width
  },
  searchContainer: {
    alignItems: 'center',
    height: 50,
    marginTop: 10,
    marginBottom: 10
  },
  listContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 50,
    width: width
  }
})
