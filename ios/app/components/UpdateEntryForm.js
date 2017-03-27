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
import { styles } from '../styles/updateentry';

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

    this.handleBackPress = this.handleBackPress.bind(this);
    this.handleBackToTop = this.handleBackToTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleUpdateEntrySubmit = this.handleUpdateEntrySubmit.bind(this);
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

  handleScroll(event) {
    if (event.nativeEvent.contentOffset.y > 120) {
      this.setState({
        showBackToTop: true
      });
    }
    else if (event.nativeEvent.contentOffset.y < 120) {
      this.setState({
        showBackToTop: false
      });
    }
  }

  handleBackToTop() {
    this.refs._scrollView.scrollTo(0);
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
            // placeholder={this.props.entry.entryTitle}
            placeholderTextColor="#373a3d"
            style={styles.inputField}
            value={this.state.entryTitle}
          />
        </View>
        <View style={styles.inputRow}>
          <TextInput
            onChangeText={(note) => this.setState({note})}
            // placeholder={this.props.entry.note}
            placeholderTextColor="#373a3d"
            style={styles.inputField}
            value={this.state.note}
          />
        </View>
        <View style={styles.inputRow}>
          <TextInput
            onChangeText={(caption) => this.setState({caption})}
            placeholder="Photo caption"
            placeholderTextColor="#373a3d"
            style={styles.inputField}
            value={this.state.caption}
          />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <ScrollView
          contentContainerStyle={styles.imageGrid}
          onScroll={(e) => this.handleScroll(e)}
          ref="_scrollView"
          scrollEventThrottle={6}
          showsVerticalScrollIndicator={false}
        >
          {
            this.state.images.map((image, idx) => {
              return <TouchableHighlight
                  key={idx}
                  onPress={() => this.handleImageSelect(image, idx)}
                  style={image.selected ? styles.imageBoxSelected : styles.imageBox}
                  underlayColor="transparent"
                >
                  <Image
                    style={styles.image}
                    source={{uri: image.uri}}
                  />
                </TouchableHighlight>
              })
          }
        </ScrollView>
      </View>
      <ToolBar
        backToTop={this.handleBackToTop}
        showBackToTop={this.state.showBackToTop}
      >
        {
          this.state.entryTitle && this.state.note || this.state.caption && this.state.newPhoto ?
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
