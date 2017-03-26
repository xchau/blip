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
      images: [],
      selectedImages: {}
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
    console.log(this.props);
    const imagesWithSelected = this.state.images;
    const onlySelectedImages = this.state.selectedImages;

    if (image.selected) {
      image.selected = !image.selected;
      imagesWithSelected[i] = image;

      delete onlySelectedImages[i.toString()];

      this.setState({
        selectedBefore: false,
        images: imagesWithSelected,
        // selectedImages: onlySelectedImages
      });

    }
    else {
      image.selected = !image.selected;
      imagesWithSelected[i] = image;

      onlySelectedImages[i.toString()] = image;

      this.setState({
        selectedBefore: true,
        images: imagesWithSelected,
        // selectedImages: onlySelectedImages
      });
    }

    // this.setState({
    //   selectedImages: onlySelectedImages
    // });
  }

  handleBackPress() {
    Actions.entrieslist({
      tripId: this.props.tripId,
      isOwner: true
    });
  }

  async handleAddEntrySubmit() {
    const token = await AsyncStorage.getItem('token');
    const selectedImages = this.state.selectedImages;
    const imagesData = new FormData();

    for (const key in selectedImages) {
      delete selectedImages[key].height;
      delete selectedImages[key].isStored;
      delete selectedImages[key].selected;
      delete selectedImages[key].width;

      selectedImages[key].type = 'image/jpg';

      imagesData.append(selectedImages[key]);
    }

    const newEntry = {
      token,
      entryTitle: this.state.entryTitle,
      note: this.state.note,
    };

    // this.props.addEntry(newTrip, imagesData);
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
      </View>
      <View style={styles.carouselContainer}>
      {
        this.state.images.length ?
            <Carousel
              ref={(carousel) => this._carousel = carousel}
              sliderWidth={194}
              itemWidth={194}
              enableMomentum={true}
              inactiveSlideScale={1}
              // autoplay={true}
              style={styles.carousel}
            >
              {
                this.state.images.map((image, idx) => {
                  console.log(image, idx);
                  return <TouchableHighlight
                    key={idx}
                    onPress={() => this.handleImageSelect(image, idx)}
                    style={image.selected ? styles.imageBoxSelected : styles.imageBox}
                  >
                    <Image
                      source={{ uri: image.uri }}
                      style={styles.carouselItem}
                    />
                  </TouchableHighlight>
                })
              }
            </Carousel>

          :
          <ActivityIndicator
            // style={loadtrips.spinner}
            size="large"
          />
      }
      </View>
      <ToolBar
        goBack={this.handleBackPress}
      >
        {
          this.state.entryTitle && this.state.note && Object.keys(this.state.selectedImages).length ?
            <Ionicon
              color='#3ee3a3'
              onPress={this.handleAddEntrySubmit}
              name="ios-create-outline"
              size={35}
            />
            :
            <Ionicon
              color='#c4c4c4'
              // onPress={this.handleAddEntrySubmit}
              name="ios-create-outline"
              size={35}
            />
        }
      </ToolBar>
    </View>
  }
};
