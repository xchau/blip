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
  imageBoxSelected: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#52edb5',
    height: 114,
    justifyContent: 'center',
    margin: 2,
    width: 114,
  },
  imageBox: {
    alignItems: 'center',
    height: 114,
    justifyContent: 'center',
    margin: 2,
    width: 114,
  },
  image: {
    height: 110,
    width: 110,
    resizeMode: 'contain',
  },
  imageSelected: {
    color: '#52edb5'
  },
  noSelect: {
    color: 'white'
  }
});
