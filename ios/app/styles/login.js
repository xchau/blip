import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20
  },
  heroBox: {
    borderWidth: 1,
    flex: 0.3
  },
  formBox: {
    flex: 0.7,
    flexDirection: 'column',
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
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
    fontSize: 16,
    textAlign: 'center',
    width: 340
  },
  inputStyle: {
    color: '#1d2228',
    fontSize: 15,
  },
  submitContainer: {
    alignItems: 'center',
    backgroundColor: '#f45e5e',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    height: 40,
    marginTop: 12
  },
  submitContent: {
    color: '#fff'
  },
  registrationBox: {
    marginTop: 120
  },
  registerPrompt: {
    textAlign: 'center',
    marginBottom: 8
  },
  registerLink: {
    color: '#f45e5e',
    fontSize: 18,
    textAlign: 'center'
  }
});
