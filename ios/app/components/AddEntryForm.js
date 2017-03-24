import React, { Component } from 'react';
import {
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

import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../styles/addentryform';

export default class AddEntryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entryTitle: '',
      note: '',
      images: []
    };

    this.handleAddEntrySubmit = this.handleAddEntrySubmit.bind(this);
    // this.handleOpenCamera = this.handleOpenCamera.bind(this);
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

  // handleOpenCamera() {
  //   Actions.camview();
  // }
  //
  // handleOpenCR() {
  //   Actions.camroll();
  // }

  handleBackPress() {
    Actions.entrieslist({
      tripId: this.props.tripId,
      isOwner: true
    });
  }

  handleImageSelect(image, i) {
    // const
  }

  handleAddEntrySubmit() {
    const newEntry = {
      // userId: this.props.currentUserId,
      // title: this.state.title,
      // destination: this.state.destination,
      // description: this.state.description,
      // coverPhoto: this.props.cpInfo.coverPhoto
    };

    // this.props.addTrip(newTrip, 'trips');
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

        <View style={styles.scrollViewContainer}>
          <ScrollView
            contentContainerStyle={styles.imageGrid}
          >
            {
              this.state.images.map((image, idx) => {
                return <TouchableHighlight
                  key={image.filename}
                  onPress={() => this.handleImageSelect(image, idx)}
                  style={image.selected ? styles.imageBoxSelected : styles.imageBox}
                >
                  <Image
                    style={styles.image}
                    source={{ uri: image.uri }}
                  />
                </TouchableHighlight>
              })
            }
          </ScrollView>
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

      <ToolBar
        goBack={this.handleBackPress}
      >
        {
          this.state.entrytitle ?
            <Ionicon
              color='#3ee3a3'
              onPress={this.handleAddTripSubmit}
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
