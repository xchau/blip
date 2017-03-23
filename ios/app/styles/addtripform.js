import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  sceneContainer: {
    height: height,
    width: width
  },
  formBox: {
    alignItems: 'center',
    backgroundColor: '#e5f6eb',
    flexDirection: 'column',
    height: height,
    paddingTop: 15
  },
  inputRow: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#64dbb0',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 18,
    width: width
  },
  inputLabel: {
    backgroundColor: 'transparent',
    color: '#302c29',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
    textAlign: 'center',
  },
  inputField: {
    backgroundColor: '#e5f6eb',
    height: 40,
    paddingLeft: 10,
    textAlign: 'center'
    // width: width * 0.9,
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: -1,
    //   height: 1
    // },
    // shadowRadius: 0.5,
    // shadowOpacity: 0.1
  },
  inputStyle: {
    color: '#000',
    fontWeight: '500',
    textAlign: 'center'
  },
  instructionsRow: {
    backgroundColor: '#e5f6eb',
    borderBottomWidth: 2,
    borderBottomColor: '#64dbb0',
    flexDirection: 'column',
    height: 100,
    justifyContent: 'center',
    marginTop: 25,
    // marginBottom: 12,
  },
  instructions: {
    color: '#444',
    fontSize: 16,
    paddingTop: 7,
    textAlign: 'center',
  },
  photoRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // margin: 12,
    width: width
  },
  submitPhotoContainer: {
    alignItems: 'center',
    backgroundColor: '#64dbb0',
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 8,
    flex: 1,
    height: 40,
    justifyContent: 'center',
    padding: 5,
    margin: 13,
  },
  submitPhotoContent: {
    color: '#fff'
  },
  submitContainer: {
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    borderColor: '#d974c5',
    borderRadius: 10,
    flexDirection: 'row',
    height: 40,
    position: 'absolute',
    left: width / 5,
    bottom: 0,
    right: 0,
    top: height * 0.8,
    justifyContent: 'center',
    width: 220
  },
  submitContent: {
    color: '#d974c5'
  },
  coverBox: {
    // borderWidth: 3,
    // borderColor: '#fff'
  },
  coverThumbnail: {
    height: 236,
    resizeMode: 'cover',
    width: width
  },
});
