import React, { Component } from 'react';
import {
  AlertIOS,
  Image,
  StatusBar,
  NativeModules,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import { NavBar } from './NavBar';
import { ToolBar } from './ToolBar';

import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../styles/addtripform';

export default class AddTripForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      destination: '',
      description: '',
      readyToSend: false
    };

    this.handleAddTripSubmit = this.handleAddTripSubmit.bind(this);
    this.handleOpenCamera = this.handleOpenCamera.bind(this);
    this.handleBackPress = this.handleBackPress.bind(this);
  }

  handleOpenCamera() {
    Actions.camview();
  }

  handleOpenCR() {
    Actions.camroll({selectType: 'cover'});
  }

  handleBackPress() {
    Actions.tripslist();
  }

  handleAddTripSubmit() {
    const newTrip = {
      userId: this.props.currentUserId,
      title: this.state.title,
      destination: this.state.destination,
      description: this.state.description,
      coverPhoto: this.props.photoInfo.photo
    };

    this.props.addTrip(newTrip, 'trips')
      .then((newTrip) => {
        this.props.refreshUser(newTrip.value.data.userId)
          .then((newUser) => {
            Actions.entrieslist({tripId: newTrip.value.data.id, isOwner: true});
          })
          .catch((err) => {
            console.log(err);
            AlertIOS.alert('Uh oh!', err.response.data.output.payload.message);
          });
      })
      .catch((err) => {
        console.log(err);
        AlertIOS.alert('Uh oh!', err.response.data.output.payload.message);
      });
  }

  render() {
    StatusBar.setBarStyle('light-content', true);

    return <View style={styles.sceneContainer}>
      <NavBar>
        <TouchableHighlight
          onPress={this.handleBackPress}
          underlayColor="transparent"
        >
          <Ionicon
            color="#fff"
            name="ios-arrow-back"
            size={33}
          />
        </TouchableHighlight>
      </NavBar>
      <View style={styles.formBox}>
        <View style={styles.instructionBox}>
          <Text style={styles.instructions}>Fill out the your trip information and add a cover photo</Text>
        </View>
        <View style={styles.inputRow}>
          <TextInput
            onChangeText={(title) => this.setState({title})}
            onFocus={this.handleInputFocus}
            placeholder="Name your trip"
            placeholderTextColor="#302c29"
            style={styles.inputField}
            value={this.state.title}
          />
        </View>

        <View style={styles.inputRow}>
          <TextInput
            onChangeText={(destination) => this.setState({destination})}
            placeholder="Where are you going?"
            placeholderTextColor="#302c29"
            style={styles.inputField}
            value={this.state.destination}
          />
        </View>

        <View style={styles.inputRow}>
          <TextInput
            onChangeText={(description) => this.setState({description})}
            placeholder="Describe your trip in a few words"
            placeholderTextColor="#302c29"
            style={styles.inputField}
            value={this.state.description}
          />
        </View>
        {
          this.props.photoInfo ?
            <View style={styles.coverBox}>
              <Image
                source={{uri: this.props.photoInfo.uri}}
                style={styles.coverThumbnail}
              />
            </View>
            :
            <View style={styles.coverBox}>
            </View>
        }
        <View style={styles.photoRow}>
          <Button
            containerStyle={styles.submitPhotoContainer}
            onPress={this.handleOpenCamera}
            style={styles.submitPhotoContent}
          >
            <Ionicon
              color="#000"
              name="ios-camera-outline"
              size={37}
              style={{backgroundColor: 'transparent'}}
            />
          </Button>

          <Button
            containerStyle={styles.submitPhotoContainer}
            onPress={this.handleOpenCR}
            style={styles.submitPhotoContent}
          >
            <Ionicon
              color="#000"
              name="ios-albums-outline"
              size={30}
              style={{backgroundColor: 'transparent'}}
            />
          </Button>
        </View>
      </View>
      <ToolBar
        goBack={this.handleBackPress}
      >
        {
          this.state.title && this.state.destination && this.state.description && this.props.photoInfo !== null ?
            <Ionicon
              color='#3ee3a3'
              onPress={this.handleAddTripSubmit}
              name="md-checkbox-outline"
              size={28}
            />
            :
            <Ionicon
              color='#c4c4c4'
              name="md-checkbox-outline"
              size={28}
            />
        }
      </ToolBar>
    </View>
  }
};
