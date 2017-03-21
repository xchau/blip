import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  controlPanel: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    margin: 20,
    width: 300
  },
  cancelContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#92979e',
    height: 40,
    justifyContent: 'center',
    margin: 10,
    marginRight: 30,
    width: 40
  },
  takePicContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#92979e',
    height: 40,
    justifyContent: 'center',
    margin: 10,
    width: 120
  },
  cameraButton: {
    color: '#e33e66'
    // flex: 0,
    // backgroundColor: '#fff',
    // borderRadius: 5,
    // color: '#000',
    // padding: 10,
    // margin: 40
  }
});
