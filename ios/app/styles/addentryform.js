import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  sceneContainer: {
    alignItems: 'center',
    flex: 1,
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
  // scrollViewContainer: {
  //   alignItems: 'center',
  //   borderWidth: 2,
  //   borderRadius: 10,
  //   borderColor: '#63d088',
  //   height: 320,
  //   justifyContent: 'center',
  //   width: 400,
  // },
  // imageGrid: {
  //   alignItems: 'center',
  //   flex: 1,
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   justifyContent: 'center',
  //   overflow: 'hidden',
  //   paddingTop: 4,
  // },
  imageBox: {
    alignItems: 'center',
    height: 200,
    justifyContent: 'center',
    margin: 2,
    width: 200,
  },
  imageBoxSelected: {
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#4bee6f',
    height: 200,
    justifyContent: 'center',
    margin: 2,
    width: 200,
  },
  carousel: {
    marginLeft: -5,
  },
  carouselContainer: {
    height: 208,
    width: width * 0.9
  },
  carouselItem: {
    height: 194,
    resizeMode: 'cover',
    width: 194,
  }
});
