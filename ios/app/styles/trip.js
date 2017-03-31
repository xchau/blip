import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#44ecba',
    borderRadius: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 4,
    marginBottom: 22,
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
    width: width * 0.94
  },
  coverBox: {
    height: 210,
    padding: 4,
    width: width * 0.94
  },
  coverPhoto: {
    borderRadius: 3,
    height: 210,
    resizeMode: 'cover',
  },
  tripTitle: {
    fontFamily: 'Raleway',
    fontSize: 18,
    fontWeight: '500',
    padding: 5,
    paddingBottom: 3,
    textAlign: 'left'
  },
  headerBox: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 10
  },
  posterBox: {
    alignItems: 'center',
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 4,
    padding: 4,
    paddingLeft: 8,
    width: width * 0.7
  },
  username: {
    fontFamily: 'Raleway',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 5,
    marginBottom: 5
  },
  timeAgoBox: {
    flexDirection: 'row',
    height: 20,
    justifyContent: 'center',
    width: width * 0.64
  },
  timeAgo: {
    fontFamily: 'Raleway',
    fontSize: 10,
    marginLeft: 3,
  },
  posterPic: {
    borderWidth: 2,
    borderColor: '#44ecba',
    borderRadius: 21,
    height: 42,
    width: 42
  },
  tripBox: {
    flex: 0.8,
    flexDirection: 'column',
    height: 150
  },
  carouselBox: {
    borderBottomWidth: 2,
    borderColor: '#44ecba',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 3,
    paddingBottom: 4
  },
  carousel: {
    flex: 0.8,
    paddingTop: 5,
    paddingBottom: 2
  },
  carouselItem: {
    borderRadius: 2,
    height: 60,
    marginLeft: 3,
    marginRight: 3,
    width: 60
  },
  likesBox: {
    flexDirection: 'row'
  }
});
