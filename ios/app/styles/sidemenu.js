import { StyleSheet } from 'react-native';

export const menustyles = StyleSheet.create({
  menuBox: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#f0404a',
    padding: 20,
  },
  userBox: {
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 20
  },
  avatarBox: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    flex: 1,
    marginTop: 20,
    marginBottom: 12,
    overflow: 'hidden'
  },
  avatar: {
    width: 95,
    height: 95,
    borderRadius: 30,
    flex: 1,
  },
  userName: {
    color: 'white',
    fontSize: 16
  },
  horizontalBar: {
    borderColor: '#fff',
    borderWidth: 0.5,
    flex: 1,
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
  },
  signoutRow: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 140,
    overflow: 'hidden',
  }
})
