import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#f0404a',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

// const Menu = (props) => {
class Menu extends Component {
  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  render() {
    return <ScrollView
      scrollsToTop={false}
      style={styles.menu}
    >
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri, }}/>
        <Text style={styles.name}>Your name</Text>
      </View>

      <Text
        onPress={() => this.props.onItemSelected('login')}
        style={styles.item}>
        Login
      </Text>

      <Text
        onPress={() => this.props.onItemSelected('Contacts')}
        style={styles.item}>
        Contacts
      </Text>
    </ScrollView>
  }
}

export default Menu;
