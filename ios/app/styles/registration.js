import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  sceneContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  logoBox: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
  logo: {
    height: 45,
    resizeMode: 'contain',
    width: 200
  },
  formBox: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 45,
    paddingRight: 45,
    paddingBottom: 20
  },
  inputField: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#c2c2c2',
    height: 44,
  },
  inputRow: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 48,
    marginTop: 7,
    marginBottom: 7,
  },
  inputLabel: {
    color: '#555',
    fontFamily: 'Raleway',
    fontWeight: 'normal',
    fontSize: 16,
    marginTop: -4,
    textAlign: 'center',
    width: 248
  },
  inputStyle: {
    color: '#1d2228',
    fontFamily: 'Raleway',
    fontSize: 16,
    marginLeft: -12,
  },
  instructionBox: {
    backgroundColor: '#f2f2f2',
    height: 50,
    justifyContent: 'center',
    marginLeft: -44,
    marginTop: 8,
    width: width
  },
  instructions: {
    fontFamily: 'Raleway',
    fontSize: 16,
    textAlign: 'center',
  },
  pickerBox: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 7,
    paddingLeft: 5,
    paddingRight: 5,
  },
  pickerStyle: {
    borderWidth: 1,
    borderColor: '#c4c4c4',
    borderRadius: 9,
    height: 95,
    width: width * 0.7
  },
  submitContainer: {
    alignItems: 'center',
    backgroundColor: '#44ecba',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    height: 40,
    marginTop: 40
  },
  submitContent: {
    fontFamily: 'Raleway',
    color: '#fff'
  },
  cancelContainer: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#44ecba',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    height: 38,
    marginTop: 10
  },
  cancelContent: {
    fontFamily: 'Raleway',
    color: '#44ecba'
  }
})
