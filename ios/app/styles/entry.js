import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const sliderWidth = width * 0.9;
export const itemWidth = 100;

export const styles = StyleSheet.create({
  entryContainer: {
    alignItems: 'center',
    // borderWidth: 1,
    flexDirection: 'column',
    marginBottom: 25,
    overflow: 'scroll',
    width: width * 0.9
  },
  headerBox: {
    backgroundColor: 'rgba(158, 249, 169, 0.8)',
    borderRadius: 5,
    marginBottom: 8,
    padding: 4,
    width: width * 0.9
  },
  entryTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 2
  },
  entryDate: {
    fontSize: 13,
    textAlign: 'center'
  },
  noteBox: {
    backgroundColor: 'rgba(220, 220, 220, 0.5)',
    borderRadius: 5,
    padding: 8,
    paddingLeft: 10,
    width: width * 0.9
  },
  entryNote: {
    fontSize: 15,
    textAlign: 'left'
  },
  carouselBox: {
    // borderWidth: 1,
    // height: 150,
    paddingLeft: 4,
    paddingRight: 4,
    width: width * 0.9
  },
  carousel: {
    //
  },
  carouselItem: {
    // borderWidth: 1,
    height: 120,
    // marginLeft: 4,
    marginRight: 6,
    marginBottom: 8,
    width: 120
  }
});
