import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: '#111714',
    height: height,
    width: width
  },
  photo: {
    height: height * 0.85,
    resizeMode: 'contain',
    width: width
  },
  caption: {
    alignItems: 'center',
    bottom: 24,
    backgroundColor: 'rgba(190, 190, 190, 0.7)',
    fontSize: 16,
    left: 10,
    marginLeft: -10,
    paddingTop: 10,
    paddingBottom: 10,
    position: 'absolute',
    textAlign: 'center',
    width: width
  }
})
