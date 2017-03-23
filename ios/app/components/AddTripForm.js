import React, { Component } from 'react';
import {
  Image,
  StatusBar,
  NativeModules,
  Text,
  TextInput,
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
    Actions.camroll();
  }

  handleBackPress() {
    Actions.tripslist();
  }

  handleAddTripSubmit() {
    console.log(this.state);
    console.log(this.props.currentUserId);
    // const newTrip = {
    //   // userId: this.props.currentUserId,
    //   userId: 2,
    //   title: this.state.title,
    //   destination: this.state.destination,
    //   coverPhoto: this.props.cpInfo.coverPhoto
    // };
    //
    // this.props.addTrip('trips', newTrip);
  }

  render() {
    StatusBar.setBarStyle('light-content', true);

    return <View style={styles.sceneContainer}>
      <NavBar />
      <View style={styles.instructionsBox}>

      </View>
      <View style={styles.formBox}>
        <View style={styles.inputRow}>
          {/* <Text style={styles.inputLabel}>Trip Title</Text> */}
          <TextInput
            onChangeText={(title) => this.setState({title})}
            onFocus={this.handleInputFocus}
            placeholder="Epic title for your trip"
            placeholderTextColor="#302c29"
            style={styles.inputField}
            value={this.state.title}
          />
        </View>

        <View style={styles.inputRow}>
          {/* <Text style={styles.inputLabel}>Trip Description</Text> */}
          <TextInput
            onChangeText={(destination) => this.setState({destination})}
            placeholder="Where are you going?"
            placeholderTextColor="#302c29"
            style={styles.inputField}
            value={this.state.destination}
          />
        </View>

        <View style={styles.inputRow}>
          {/* <Text style={styles.inputLabel}>Trip Description</Text> */}
          <TextInput
            onChangeText={(description) => this.setState({description})}
            placeholder="Describe your trip in a few words"
            placeholderTextColor="#302c29"
            // multiline={true}
            style={styles.inputField}
            value={this.state.description}
          />
        </View>

        <View style={styles.instructionsRow}>
          <Text style={styles.instructions}>Upload a cover photo</Text>
          <View style={styles.photoRow}>
            <Button
              containerStyle={styles.submitPhotoContainer}
              onPress={this.handleOpenCamera}
              style={styles.submitPhotoContent}
            >
              <Ionicon
                color="#fff"
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
                color="#fff"
                name="ios-albums-outline"
                size={30}
                style={{backgroundColor: 'transparent'}}
              />
            </Button>
          </View>
        </View>
        {
          this.props.cpInfo ?
            <View style={styles.coverBox}>
              <Image
                source={{uri: this.props.cpInfo.coverUri}}
                style={styles.coverThumbnail}
              />
            </View>
            :
            null
        }
        {/* {
          this.props.cpInfo ?
            <Button
              containerStyle={styles.submitContainer}
              onPress={this.handleAddTripSubmit}
              style={styles.submitContent}
            >
              Create Trip
            </Button>
            :
            <Button
              containerStyle={styles.submitContainer}
              disabled={true}
              // onPress={this.handleNoCoverSelected}
              style={styles.submitContent}
            >
              Create Trip
            </Button>
        } */}
      </View>
      <ToolBar
        // backToTop={this.handleBackToTop}
        goBack={this.handleBackPress}
        // showBackToTop={this.state.showBackToTop}
      >
        {
          this.state.title && this.state.destination && this.state.description && this.props.cpInfo !== null ?
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
