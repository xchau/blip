import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const sliderWidth = 120;
export const itemWidth = 120;

export const styles = StyleSheet.create({
  entryContainer: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#44ecba',
    flexDirection: 'column',
    marginRight: 5,
    marginBottom: 25,
    overflow: 'hidden',
  },
  headerBox: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#44ecba',
    marginBottom: 8,
    padding: 2,
    paddingTop: 4,
    width: width * 0.96
  },
  entryTitle: {
    color: '#2a2a2a',
    fontFamily: 'Raleway',
    fontSize: 20,
    margin: 2,
    marginLeft: 10,
  },
  entryDate: {
    fontFamily: 'Raleway',
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
  noteBox: {
    borderTopWidth: 2,
    borderColor: '#44ecba',
    padding: 8,
    paddingLeft: 10,
    width: width * 0.96
  },
  entryNote: {
    fontFamily: 'Raleway',
    fontSize: 15,
    textAlign: 'center'
  },
  carouselBox: {
    paddingLeft: 4,
    paddingRight: 4,
    width: width * 0.96
  },
  carouselItem: {
    borderRadius: 2,
    height: 120,
    marginRight: 6,
    marginBottom: 8,
    width: 120
  },
  utilBox: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    height: 30,
    justifyContent: 'flex-end',
    paddingRight: 10,
    width: width * 0.96
  },
  trashButton: {
    marginLeft: 28,
  },
  pencilIcon: {
    paddingTop: 4,
  }
});
