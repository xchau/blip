import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * width) / 100;
    return Math.round(value);
}

const slideHeight = height * 0.4;
const slideWidth = wp(75);

export const sliderWidth = width;
export const itemHorizontalMargin = wp(2);
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export const styles = StyleSheet.create({
  entryContainer: {
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: 'column',
    // height: 150,
    marginBottom: 20,
    overflow: 'hidden',
    width: width * 0.9
  },
  headerBox: {
    // borderWidth: 1,
    marginBottom: 8
  },
  entryTitle: {
    backgroundColor: 'rgb(158, 249, 169)',
    textAlign: 'center'
  },
  entryNote: {
    fontSize: 8
  },
  carouselBox: {
    // borderWidth: 1,
    // height: 150,
    width: width * 0.9
  },
  carousel: {
    //
  },
  carouselItem: {
    // borderWidth: 1,
    height: 100,
    marginLeft: 5,
    marginRight: 5,
    width: 100
  }
});
