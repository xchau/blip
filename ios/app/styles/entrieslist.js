import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    height: height,
    marginBottom: 50,
    paddingTop: 10,
    width: width
  },
  tripTitle: {
    alignItems: 'center',
    backgroundColor: 'rgba(240, 240, 240, 0.7)',
    fontSize: 25,
    paddingTop: 8,
    paddingBottom: 12,
    position: 'absolute',
    textAlign: 'center',
    top: 35,
    width: width * 1.1
  },
  coverPhotoBox: {
    alignItems: 'center',
    height: height * 0.2,
    width: width,
  },
  coverPhoto: {
    flex: 1,
    resizeMode: 'cover',
    width: width * 1.1
  },
  spinner: {
    height: 100,
    width: 100
  }
});
