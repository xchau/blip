import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { NavBar } from './NavBar';

import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/photoview';

export default class PhotoView extends Component {
  constructor(props) {
    super(props);

    this.handleBackPress = this.handleBackPress.bind(this);
  }

  handleBackPress() {
    Actions.pop();
  }

  render() {
    console.log(this.props.photo);
    return <View style={styles.sceneContainer}>
      <NavBar>
        <TouchableHighlight onPress={this.handleBackPress}>
          <Ionicon
            color="#fff"
            name="ios-arrow-back"
            size={33}
          />
        </TouchableHighlight>
      </NavBar>

      <Image
        source={{uri: this.props.photo.photoUrl}}
        style={styles.photo}
      >
        {
          this.props.photo.caption ? <Text style={styles.caption}>{this.props.photo.caption}</Text> : null
        }
      </Image>
    </View>
  }
};
