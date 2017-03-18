import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'flex-end',
    // borderWidth: 1,
    backgroundColor: '#eee0f4',
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: 26,
    padding: 10,
    width: width * 0.9,
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: -2,
    //   height: 2
    // },
    // shadowRadius: 1,
    // shadowOpacity: 0.2
  },
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
    width: width * 0.9
  },
  cardBox: {
    // backgroundColor: '#fff',
    flexDirection: 'row',
    width: width * 0.9
  },
  tripTitle: {
    fontSize: 20,
    marginBottom: 2,
    padding: 2,
    textAlign: 'center'
  },
  posterBox: {
    alignItems: 'center',
    flex: 0.2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 4
  },
  username: {
    marginBottom: 5
  },
  timeAgoBox: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  timeAgo: {
    fontSize: 10,
    marginLeft: 3
  },
  posterPic: {
    borderRadius: 20,
    height: 40,
    width: 40
  },
  tripBox: {
    // borderWidth: 1,
    flex: 0.8,
    flexDirection: 'column',
    height: 200
  },
  coverPhoto: {
    flex: 1,
    resizeMode: 'cover',
  },
  carouselBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  filler: {
    flex: 0.2
  },
  carousel: {
    flex: 0.8,
    paddingTop: 5,
    paddingBottom: 2
  },
  likesBox: {
    flexDirection: 'row'
  }
});

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(75);

export const sliderWidth = viewportWidth;
export const itemHorizontalMargin = wp(2);
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
