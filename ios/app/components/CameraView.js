'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Button from 'react-native-button';
import Camera from 'react-native-camera';
import { Actions } from 'react-native-router-flux';

import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/camera';

export default class BadInstagramCloneApp extends Component {
  constructor(props) {
    super(props);

    this.takePicture = this.takePicture.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    Actions.pop();
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

  render() {
    return <View style={styles.cameraContainer}>
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.camera}
        aspect={Camera.constants.Aspect.fill}
      >
        <View style={styles.controlPanel}>
          <Button
            onPress={this.goBack}
            containerStyle={styles.cancelContainer}
            style={styles.cameraButton}
          >
            <Ionicon
              name="ios-arrow-back"
              size={30}
              style={{marginLeft: -3, marginTop: 1}}
            />
          </Button>
          <Button
            onPress={this.takePicture}
            containerStyle={styles.takePicContainer}
            style={styles.cameraButton}
          >
            <Ionicon
              color="#e33e66"
              name="ios-camera-outline"
              size={35}
              style={{backgroundColor: 'transparent'}}
            />
          </Button>
        </View>
      </Camera>
    </View>
  }
};
