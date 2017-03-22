import React, { Component } from 'react';
import {
  CameraRoll,
  Image,
  NativeModules,
  ScrollView,
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
      selected: false,
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
          return image.node.image;
        });

        console.log(images);

        this.setState({images});
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleImageSelect(image) {
    // const photo = {
    //   name: image.filename,
    //   type: 'image/jpg',
    //   uri: image.uri
    // };

    // const file = new FormData();
    // console.log(file);
    // console.log(file.toString());
    //
    // file.append('photo', photo);

    NativeModules.ReadImageData.readImage(image.uri, (img) => {
      console.log(img);

      this.setState({
        coverPhoto: img
      });
    });

    // this.setState({
    //   coverPhoto: file
    // });
  }

  handleSelectConfirm() {
    this.setState({
      confirmed: true
    });

    const coverPhoto = this.state.coverPhoto;

    this.props.selectCoverPhoto(coverPhoto);

    Actions.pop();
  }

  handleGoBack() {
    Actions.pop();
  }

  render() {
    const iconStyle = this.state.confirmed ? styles.imageSelected : styles.noSelect;
    // const imageStyle = this.state.imageSelected;

    return <View style={styles.sceneContainer}>
      <ScrollView style={styles.galleryContainer}>
        <View style={styles.imageGrid}>
          {
            this.state.images.map((image) => <TouchableHighlight
            key={image.filename}
            onPress={() => this.handleImageSelect(image)}
            style={styles.imageBox}
            underlayColor='#5cdbae'
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
