import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  sceneContainer: {
    flex: 1,
  },
  formBox: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 8
  },
  inputRow: {
    height: 55,
    justifyContent: 'center',
    margin: 10,
    width: 300
  },
  inputField: {
    borderRadius: 10,
    backgroundColor: '#77e7a4',
    flex: 1,
    textAlign: 'center',
  },
  scrollViewContainer: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#63d088',
    height: 320,
    justifyContent: 'center',
    width: 400,
  },
  imageGrid: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingTop: 4,
  },
  imageBox: {
    alignItems: 'center',
    height: 100,
    justifyContent: 'center',
    margin: 1,
    width: 100,
  },
  imageBoxSelected: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ee4b69',
    height: 100,
    justifyContent: 'center',
    margin: 1,
    width: 100,
  },
  image: {
    height: 96,
    width: 96,
    resizeMode: 'cover',
  }
});
