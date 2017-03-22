import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  sceneContainer: {
    height: height,
    width: width
  },
  formBox: {
    alignItems: 'center',
    backgroundColor: '#64dbb0',
    flexDirection: 'column',
    height: height,
    paddingTop: 20
  },
  inputRow: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 20
  },
  inputLabel: {
    backgroundColor: 'transparent',
    color: '#302c29',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 5,
    textAlign: 'center',
    width: width * 0.9
  },
  inputField: {
    borderRadius: 10,
    backgroundColor: 'rgba(230, 230, 230, 0.8)',
    height: 40,
    paddingLeft: 10,
    width: width * 0.9,
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
  photoRow: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-around',
    width: width * 0.8
  },
  coverBox: {
    borderWidth: 3,
    borderColor: '#fff'
  },
  coverThumbnail: {
    height: 220,
    resizeMode: 'cover',
    width: width
  },
  submitPhotoContainer: {
  },
  submitPhotoContent: {
    color: '#fff'
  },
  submitContainer: {
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    borderWidth: 2,
    borderColor: '#d974c5',
    borderRadius: 10,
    flexDirection: 'row',
    height: 40,
    position: 'absolute',
    left: width / 5,
    bottom: 0,
    right: 0,
    top: height * 0.77,
    justifyContent: 'center',
    width: 220
  },
  submitContent: {
    color: '#d974c5'
  },

});
