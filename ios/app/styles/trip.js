import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 26,
    width: width
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: -2,
    //   height: 2
    // },
    // shadowRadius: 1,
    // shadowOpacity: 0.2
  },
  headerBox: {
    alignItems: 'center',
    flexDirection: 'row',
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
  cardBox: {
    backgroundColor: '#f3ebf6',
    flexDirection: 'row',
    width: width
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
  },

  coverPhoto: {
    height: 140,
    resizeMode: 'cover',
    width: 300
  },



  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  likesBox: {
    flexDirection: 'row'
  }
});
