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
    // alignItems: 'center',
    // flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    height: 180,
    // justifyContent: 'center',
    // overflow: 'hidden',
    paddingLeft: 5,
    paddingTop: 10,
    // width: width * 0.9
  },
  imageBox: {
    alignItems: 'center',
    height: 156,
    justifyContent: 'center',
    margin: 1,
    width: 156,
  },
  imageBoxSelected: {
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#4bee6f',
    height: 156,
    justifyContent: 'center',
    margin: 1,
    width: 156,
  },
  image: {
    height: 150,
    resizeMode: 'cover',
    width: 150,
  }
});
