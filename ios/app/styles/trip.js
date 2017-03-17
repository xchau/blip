import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: -2,
    //   height: 2
    // },
    // shadowRadius: 1,
    // shadowOpacity: 0.2
  },
  cardBox: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  timeAgo: {
    fontSize: 16,
    marginBottom: 10
  },
  tripBox: {
    backgroundColor: '#cf91e4',
    width: 300
  },
  coverPhoto: {
    height: 140,
    resizeMode: 'cover',
    width: 300
  },
  tripTitle: {
    fontSize: 20,
    textAlign: 'center'
  },
  posterBox: {
    flexDirection: 'row'
  },
  posterPic: {
    borderRadius: 20,
    height: 40,
    width: 40
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  likesBox: {
    flexDirection: 'row'
  }
});
