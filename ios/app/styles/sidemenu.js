import { StyleSheet } from 'react-native';

export const menustyles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#f0404a',
    padding: 20,
  },
  userBox: {
    alignItems: 'center',
    flexDirection: 'column'

  },
  avatarBox: {
    alignItems: 'center',
    borderWidth: 1,
    flex: 1,
    marginTop: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    flex: 1,
  },
  name: {
    borderWidth: 1,
  },
  optionText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '300',
    paddingTop: 5,
    marginTop: -5
  },
  optionRow: {
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
    overflow: 'hidden',
    // width: 120
  }
})
