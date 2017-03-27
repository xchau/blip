import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  sceneContainer: {
    // alignItems: 'center',
    height: height,
    // justifyContent: 'center',
    width: width
  },
  formBox: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 8
  },
  inputRow: {
    height: 40,
    justifyContent: 'center',
    margin: 5,
    width: 300
  },
  inputField: {
    borderRadius: 10,
    backgroundColor: '#77e7a4',
    flex: 1,
    textAlign: 'center',
  },
  imageGrid: {
    // marginTop: 10,
  },
  imageBox: {
    alignItems: 'center',
    height: 250,
    justifyContent: 'center',
    margin: 1,
    width: 280,
  },
  imageBoxSelected: {
    alignItems: 'center',
    borderWidth: 7,
    borderColor: '#4bee6f',
    height: 250,
    justifyContent: 'center',
    margin: 1,
    width: 280,
  },
  image: {
    height: 244,
    resizeMode: 'cover',
    width: 274,
  }
});
