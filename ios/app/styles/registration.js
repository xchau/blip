import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  sceneContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  formBox: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 30,
    paddingLeft: 45,
    paddingRight: 45,
    paddingBottom: 20
  },
  inputField: {
    backgroundColor: 'rgba(235, 235, 235, 0.7)',
    borderRadius: 9,
    borderColor: '#c2c2c2',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3,
    marginRight: 3,
  },
  inputRow: {
    flexDirection: 'row',
    height: 48,
    marginTop: 10,
    marginBottom: 10
  },
  inputLabel: {
    color: '#55575c',
    fontFamily: 'Helvetica',
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'center',
    width: 252
  },
  inputStyle: {
    color: '#1d2228',
    fontSize: 15,
    marginLeft: -20,
  },
  pickerText: {
    fontSize: 16,
    textAlign: 'center',
  },
  pickerBox: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 28,
    marginBottom: 7,
    paddingLeft: 5,
    paddingRight: 5,
  },
  pickerStyle: {
    borderWidth: 1,
    borderColor: '#c4c4c4',
    borderRadius: 9,
    height: 75,
    width: width * 0.7
  },
  submitContainer: {
    alignItems: 'center',
    backgroundColor: '#f45e5e',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    height: 40,
    marginTop: 40
  },
  submitContent: {
    color: '#fff'
  },
  cancelContainer: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#f45e5e',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    height: 38,
    marginTop: 10
  },
  cancelContent: {
    color: '#f45e5e'
  }
})
