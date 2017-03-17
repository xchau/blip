import { Dimensions, StyleSheet } from 'react-native';

// const window = Dimensions.get('window');

export const menustyles = StyleSheet.create({
  menuBox: {
    flex: 1,
    // width: window.width * 0.7,
    // height: window.height,
    backgroundColor: '#f0404a',
    padding: 16,
  },
  userBox: {
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 4
  },
  avatarBox: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    flex: 1,
    marginTop: 20,
    overflow: 'hidden'
  },
  avatar: {
    borderRadius: 30,
    height: 95,
    width: 95,
  },
  editBox: {
    alignItems: 'center',
    backgroundColor: '#7cf1b5',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#fff',
    bottom: 15,
    flex: 1,
    height: 28,
    justifyContent: 'center',
    overflow: 'hidden',
    paddingTop: 2,
    left: 30,
    width: 28,
  },
  // userName: {
  //   color: 'white',
  //   fontSize: 16
  // },
  horizontalBar: {
    borderColor: '#fff',
    borderWidth: 0.5,
    flex: 0.8,
    justifyContent: 'center',
    marginBottom: 5
  },
  optionText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '300',
    paddingTop: 5,
    marginTop: -5
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
    overflow: 'hidden',
    paddingRight: 5
  },
  signoutRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 140,
    overflow: 'hidden',
    paddingRight: 5
  }
})
