import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  sceneContainer: {
    height: height,
    width: width
  },
  galleryContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 20
  },
  imageGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: 7,
    paddingRight: 0,
  },
  imageBox: {
    alignItems: 'center',
    height: 114,
    justifyContent: 'center',
    margin: 2,
    width: 114,
  },
  image: {
    width: 110,
    height: 110,
    // margin: 5,
  },
  imageSelected: {
    color: '#ec334e'
  },
  noSelect: {
    color: 'white'
  }
});
