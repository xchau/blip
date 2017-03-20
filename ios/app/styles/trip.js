import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const sliderWidth = width;
export const itemWidth = 70;

export const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'flex-end',
    // backgroundColor: '#eee0f4',
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    margin: 4,
    marginBottom: 22,
    // paddingRight: 2,
    width: width * 0.9,
    // borderWidth: 1
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: -2,
    //   height: 2
    // },
    // shadowRadius: 1,
    // shadowOpacity: 0.2
  },
  headerBox: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 10,
    width: width * 0.7
  },
  cardBox: {
    borderRadius: 5,
    flexDirection: 'row',
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
  coverPhoto: {
    flex: 1,
    resizeMode: 'cover',
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
