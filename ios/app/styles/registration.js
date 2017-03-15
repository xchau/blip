import { StyleSheet } from 'react-native';

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
    height: 30,
    textAlign: 'center',
    width: 252
  },
  inputStyle: {
    color: '#1d2228',
    fontSize: 15,
  },
  modalPickerBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 7,
    marginBottom: 7,
    paddingLeft: 5,
    paddingRight: 5,
  },
  modalPicker: {
    borderColor: '#c4c4c4',
    borderWidth: 1,
    borderRadius: 9,
    width: 200
  },
  pickerDisplayBox: {
    color: '#55575c',
    fontSize: 15,
    height: 40,
    paddingTop: 10,
    textAlign: 'center'
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
  }
})
