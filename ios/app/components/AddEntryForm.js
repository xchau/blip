import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  CameraRoll,
  Image,
  StatusBar,
  NativeModules,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { NavBar } from './NavBar';
import { ToolBar } from './ToolBar';
import Carousel from 'react-native-snap-carousel';

import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../styles/addentryform';

export default class AddEntryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entryTitle: '',
      note: '',
      caption: '',
      images: [],
      entryPhoto: ''
    };

    this.handleAddEntrySubmit = this.handleAddEntrySubmit.bind(this);
    // this.handleOpenCamera = this.handleOpenCamera.bind(this);
    this.handleBackPress = this.handleBackPress.bind(this);
    this.handleImageSelect = this.handleImageSelect.bind(this);
  }

  componentDidMount() {
    const params = {
      first: 9,
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

      this.setState({selectedBefore: false});
    }
    else if (!this.state.selectedBefore) {
      image.selected = !image.selected;
      imagesWithSelected[i] = image;

      this.setState({selectedBefore: true});

      // Capstone > Libraries > React > Base > RCTCustom.m
      NativeModules.ReadImageData.readImage(image.uri, (img) => {
        this.setState({
          images: imagesWithSelected,
          coverUri: image.uri,
          entryPhoto: img
        });
      });
    }
  }

  handleAddEntrySubmit() {
    const newEntry = {
      token: this.props.token,
      tripId: this.props.tripId,
      image: this.state.entryPhoto,
      entryTitle: this.state.entryTitle,
      note: this.state.note,
      caption: this.state.caption
    };

    this.props.addEntry(newEntry);
  }

  handleBackPress() {
    Actions.entrieslist({
      tripId: this.props.tripId,
      isOwner: true
    });
  }

  render() {
    StatusBar.setBarStyle('light-content', true);

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
      <View style={styles.formBox}>
        <View style={styles.inputRow}>
          <TextInput
            onChangeText={(entryTitle) => this.setState({entryTitle})}
            onFocus={this.handleInputFocus}
            placeholder="Epic entryTitle for your trip"
            placeholderTextColor="#302c29"
            style={styles.inputField}
            value={this.state.entryTitle}
          />
        </View>
        <View style={styles.inputRow}>
          <TextInput
            onChangeText={(note) => this.setState({note})}
            placeholder="Note"
            placeholderTextColor="#302c29"
            style={styles.inputField}
            value={this.state.note}
          />
        </View>
        <View style={styles.inputRow}>
          <TextInput
            onChangeText={(caption) => this.setState({caption})}
            placeholder="Add a caption for your picture"
            placeholderTextColor="#302c29"
            style={styles.inputField}
            value={this.state.caption}
          />
        </View>
      </View>
      <ScrollView
        contentContainerStyle = {styles.imageGrid}
        horizontal={true}
      >
        {
          this.state.images.map((image, idx) => {
            return <TouchableHighlight
              key={idx}
              onPress={() => this.handleImageSelect(image, idx)}
              style={image.selected ? styles.imageBoxSelected : styles.imageBox}
              >
                <Image
                  style={styles.image}
                  source={{uri: image.uri}}
                />
              </TouchableHighlight>
            })
          }
      </ScrollView>
      <ToolBar
        goBack={this.handleBackPress}
      >
        {
          this.state.entryTitle && this.state.note && this.state.caption && this.state.entryPhoto ?
            <Ionicon
              color='#3ee3a3'
              onPress={this.handleAddEntrySubmit}
              name="ios-create-outline"
              size={35}
            />
            :
            <Ionicon
              color='#c4c4c4'
              name="ios-create-outline"
              size={35}
            />
        }
      </ToolBar>
    </View>
  }
};
