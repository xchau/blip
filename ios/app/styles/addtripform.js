import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: '#fff',
    height: height,
    width: width
  },
  instructionBox: {
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    height: 70,
    justifyContent: 'center',
    marginBottom: 10,
    paddingLeft: 15,
    padding: 15,
    width: width
  },
  formBox: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
    height: height,
  },
  inputRow: {
    height: 40,
    justifyContent: 'center',
    margin: 5,
    width: 300
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#44ecba',
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 15,
    flex: 1,
    textAlign: 'center',
  },
  inputStyle: {
    color: '#000',
    fontWeight: '500',
    textAlign: 'center'
  },
  instructions: {
    color: '#444',
    fontSize: 16,
    paddingTop: 7,
    textAlign: 'center',
  },
  photoRow: {
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: '#44ecba',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
    width: width
  },
  submitPhotoContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#44ecba',
    borderRadius: 8,
    flex: 1,
    height: 40,
    justifyContent: 'center',
    padding: 5,
    margin: 13,
  },
  coverBox: {
    borderTopWidth: 2,
    borderTopColor: '#44ecba',
    height: 236,
    marginTop: 4,
    width: width
  },
  coverThumbnail: {
    height: 236,
    resizeMode: 'cover',
    width: width
  },
});
