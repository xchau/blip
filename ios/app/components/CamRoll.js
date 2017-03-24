import React, { Component } from 'react';
import {
  CameraRoll,
  Image,
  NativeModules,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
 } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ToolBar } from './ToolBar';

import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/camroll';

export default class CamRoll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      confirmed: false,
      selectedBefore: false
    };

    this.handleImageSelect = this.handleImageSelect.bind(this);
    this.handleSelectConfirm = this.handleSelectConfirm.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  componentDidMount() {
    const params = {
      first: 16,
    };

    CameraRoll.getPhotos(params)
      .then((data) => {
        const images = data.edges.map((image) => {
          const img = image.node.image;

          img.selected = false;

          return img;
        });

        this.setState({images});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleImageSelect(image, i) {
    const imagesWithSelected = this.state.images;

    if (image.selected) {
      image.selected = !image.selected;
      imagesWithSelected[i] = image;

      this.setState({ selectedBefore: false });
    }
    else if (!this.state.selectedBefore) {
      image.selected = !image.selected;
      imagesWithSelected[i] = image;

      this.setState({ selectedBefore: true });

      // Capstone > Libraries > React > Base > RCTCustom.m
      NativeModules.ReadImageData.readImage(image.uri, (img) => {
        this.setState({
          images: imagesWithSelected,
          coverUri: image.uri,
          coverPhoto: img
        });
      });
    }
  }

  handleSelectConfirm() {
    this.setState({
      confirmed: true
    });


    const cpInfo = {
      coverUri: this.state.coverUri,
      coverPhoto: this.state.coverPhoto
    };

    this.props.selectCoverPhoto(cpInfo);

    Actions.pop();
  }

  handleGoBack() {
    Actions.pop();
  }

  render() {
    StatusBar.setBarStyle('default', false);

    const iconStyle = this.state.confirmed ? styles.imageSelected : styles.noSelect;

    return <View style={styles.sceneContainer}>
      <ScrollView style={styles.galleryContainer}>
        <View style={styles.imageGrid}>
          {
            this.state.images.map((image, idx) => <TouchableHighlight
              key={image.filename}
              onPress={() => this.handleImageSelect(image, idx)}
              style={image.selected ? styles.imageBoxSelected : styles.imageBox}
            >
              <Image
                style={styles.image}
                source={{ uri: image.uri }}
              />
            </TouchableHighlight>)
        }
        </View>
      </ScrollView>
      <ToolBar
        goBack={this.handleGoBack}
      >
        <Ionicon
          name="ios-checkmark-circle-outline"
          onPress={this.handleSelectConfirm}
          size={30}
          style={iconStyle}
        />
      </ToolBar>
    </View>
  }
};
