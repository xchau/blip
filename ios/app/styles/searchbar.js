import { Dimensions, StyleSheet } from 'react-native';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  searchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 30,
    marginTop: 15,
    marginBottom: 25,
    width: window.width * 0.8
  },
  searchField: {
    backgroundColor: 'rgba(240, 240, 240, 0.8)',
    borderRadius: 10,
    flex: 0.8,
    fontSize: 18,
    marginRight: 8,
    paddingLeft: 12,
    paddingRight: 12,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#45eeb0',
    borderRadius: 10,
    flex: 0.2,
    justifyContent: 'center',
    height: 30
  },
  searchButton: {
    color: '#fff'
  }
})
