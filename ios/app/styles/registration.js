import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  pickerBox: {
    borderColor: '#c4c4c4',
    borderWidth: 1,
    borderRadius: 9,
    height: 30,
    textAlign: 'center'
  },
  formBox: {
    flex: 0.7,
    flexDirection: 'column',
    paddingTop: 30,
    paddingLeft: 52,
    paddingRight: 52,
    paddingBottom: 20
  },
  inputField: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#c2c2c2',
    height: 45,
  },
  inputRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 7,
    marginBottom: 7,
  },
  inputLabel: {
    color: '#55575c',
    fontFamily: 'Helvetica',
    fontWeight: '600',
    fontSize: 15,
  },
  inputStyle: {
    color: '#1d2228',
    fontSize: 15,
  },
})
