import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  CameraRoll,
  Image,
  NativeModules,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { NavBar } from './NavBar';
import { ToolBar } from './ToolBar';

import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../styles/addentryform';

export default class UpdateEntryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entryTitle: '',
      note: '',
      caption: '',
      images: [],
      newPhoto: ''
    };

    this.handleUpdateEntrySubmit = this.handleUpdateEntrySubmit.bind(this);
    this.handleBackPress = this.handleBackPress.bind(this);
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
          newPhoto: img
        });
      });
    }
  }

  async handleUpdateEntrySubmit() {
    const token = await AsyncStorage.getItem('token');

    const updatedEntry = {
      token,
      entryId: this.props.entry.id,
      image: this.state.newPhoto,
      entryTitle: this.state.entryTitle,
      note: this.state.note,
      caption: this.state.caption
    };

    this.props.updateEntry(updatedEntry)
      .then((res) => {
        Actions.entrieslist({
          tripId: this.props.tripId,
          isOwner: true
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
          this.state.entryTitle && this.state.note && this.state.caption || this.state.newPhoto ?
            <Ionicon
              color='#3ee3a3'
              onPress={this.handleUpdateEntrySubmit}
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
