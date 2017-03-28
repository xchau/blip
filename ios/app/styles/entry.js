import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const sliderWidth = 120;
export const itemWidth = 120;

export const styles = StyleSheet.create({
  entryContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    marginRight: 3,
    marginBottom: 25,
    overflow: 'scroll',
  },
  headerBox: {
    alignItems: 'center',
    backgroundColor: 'rgba(61, 236, 172, 0.5)',
    marginBottom: 8,
    marginRight: 3,
    padding: 2,
    paddingTop: 4,
    width: width * 0.96
  },
  entryTitle: {
    color: '#2a2a2a',
    fontSize: 20,
    margin: 2,
    marginLeft: 10,
  },
  entryDate: {
    fontSize: 13,
    margin: 2,
    textAlign: 'center'
  },
  footerBox: {
    backgroundColor: '#383838',
    flexDirection: 'column',
    marginRight: 3,
    paddingBottom: 5,
    width: width * 0.96
  },
  utilBox: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 22,
    justifyContent: 'space-around',
    paddingRight: 3
  },
  noteBox: {
    backgroundColor: 'rgba(220, 220, 220, 0.7)',
    padding: 8,
    paddingLeft: 10,
    width: width * 0.96
  },
  entryNote: {
    fontSize: 15,
    textAlign: 'left'
  },
  carouselBox: {
    paddingLeft: 4,
    paddingRight: 4,
    width: width * 0.96
  },
  carouselItem: {
    height: 120,
    marginRight: 6,
    marginBottom: 8,
    width: 120
  },
  trashButton: {
    backgroundColor: '#383838',
    borderRadius: 3,
    margin: 2,
    padding: 2,
    position: 'absolute',
    right: 8,
    top: 0,
  },
  editButton: {
    backgroundColor: '#383838',
    borderRadius: 3,
    margin: 2,
    padding: 2,
    position: 'absolute',
    right: 36,
    top: 0,
  },
  editIcon: {
    top: -2
  },
  trashIcon: {
    top: -2
  }
});
