import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  cardBox: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  timeAgo: {
    // backgroundColor: '#c1c1c6',
    fontSize: 16,
    marginBottom: 10
  },
  tripBox: {
    backgroundColor: '#cf91e4',
    // borderWidth: 1,
    width: 300
  },
  coverPhoto: {
    // flex: 1,
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
