import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const sliderWidth = width * 0.9;
export const itemWidth = 100;

export const styles = StyleSheet.create({
  entryContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 25,
    overflow: 'scroll',
    width: width * 0.9
  },
  headerBox: {
    backgroundColor: 'rgba(158, 249, 169, 0.8)',
    borderRadius: 5,
    marginBottom: 8,
    padding: 2,
    paddingTop: 4,
    width: width * 0.9
  },
  utilBox: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 22,
    justifyContent: 'flex-end',
    paddingRight: 3
  },
  entryTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 2
  },
  entryDate: {
    fontSize: 13,
    textAlign: 'center'
  },
  noteBox: {
    backgroundColor: 'rgba(220, 220, 220, 0.5)',
    borderRadius: 5,
    padding: 8,
    paddingLeft: 10,
    width: width * 0.9
  },
  entryNote: {
    fontSize: 15,
    textAlign: 'left'
  },
  carouselBox: {
    paddingLeft: 4,
    paddingRight: 4,
    width: width * 0.9
  },
  carouselItem: {
    height: 120,
    marginRight: 6,
    marginBottom: 8,
    width: 120
  },
  editIcon: {
    marginLeft: 42
  },
  trashIcon: {
    marginLeft: 90,
    top: -3,
    right: 4
  }
});
