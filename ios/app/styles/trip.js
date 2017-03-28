import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const sliderWidth = width;
export const itemWidth = 70;

export const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'flex-end',
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    margin: 4,
    marginLeft: -7,
    marginBottom: 22,
    width: width,
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: -2,
    //   height: 2
    // },
    // shadowRadius: 1,
    // shadowOpacity: 0.2
  },
  titleRow: {
    alignItems: 'center',
    marginRight: -3,
    width: width
  },
  coverBox: {
    height: 200,
    width: width
  },
  coverPhoto: {
    height: 200,
    width: width,
    resizeMode: 'cover',
  },
  posterBox: {
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 70
  },
  tripTitle: {
    // borderWidth: 1,
    fontSize: 20,
    marginBottom: 5,
    padding: 2,
    textAlign: 'left'
  },
  posterBox: {
    alignItems: 'center',
    flex: 0.2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 4,
    paddingLeft: 8,
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
    flex: 0.8,
    flexDirection: 'column',
    height: 150
  },

  carouselBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 2,
    paddingBottom: 4
  },
  filler: {
    flex: 0.28
  },
  carousel: {
    flex: 0.8,
    paddingTop: 5,
    paddingBottom: 2
  },
  carouselItem: {
    height: 50,
    marginLeft: 3,
    marginRight: 3,
    width: 50
  },
  likesBox: {
    flexDirection: 'row'
  }
});
