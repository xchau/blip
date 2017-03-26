import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  sceneContainer: {
    // alignItems: 'center',
    height: height,
    width: width
  },
  formBox: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 8
  },
  inputRow: {
    height: 55,
    justifyContent: 'center',
    margin: 10,
    width: 300
  },
  inputField: {
    borderRadius: 10,
    backgroundColor: '#77e7a4',
    flex: 1,
    textAlign: 'center',
  },
  imageGrid: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingTop: 10,
    width: width
  },
  imageBox: {
    alignItems: 'center',
    height: 118,
    justifyContent: 'center',
    margin: 1,
    width: 118,
  },
  imageBoxSelected: {
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#4bee6f',
    height: 118,
    justifyContent: 'center',
    margin: 1,
    width: 118,
  },
  image: {
    height: 110,
    resizeMode: 'cover',
    width: 110,
  }
});
