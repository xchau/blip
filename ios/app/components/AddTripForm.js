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

import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../styles/addtripform';

export default class AddTripForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      destination: '',
      cpInfo: []
    };

    this.handleAddTripSubmit = this.handleAddTripSubmit.bind(this);
    this.handleOpenCamera = this.handleOpenCamera.bind(this);
  }

  handleOpenCamera() {
    Actions.camview();
  }

  handleOpenCR() {
    Actions.camroll();
  }

  handleAddTripSubmit() {
    console.log(this.state);
    // const file = this.props.coverPhoto;
    //
    // this.setState({
    //   // coverUri:
    // })
    // const newTrip = {
    //   // userId: this.props.currentUserId,
    //   userId: 2,
    //   title: 'A NEW TRIP',
    //   destination: 'Antartica',
    //   coverPhoto: file
    // };

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
          <Text style={styles.inputLabel}>Trip Title</Text>
          <TextInput
            onChangeText={(title) => this.setState({title})}
            style={styles.inputField}
            value={this.state.title}
          />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Trip Description</Text>
          <TextInput
            onChangeText={(description) => this.setState({description})}
            // multiline={true}
            style={styles.inputField}
            value={this.state.description}

          />
        </View>

        <View style={styles.instructionsRow}>
          <Text style={styles.instructions}>Upload a cover photo</Text>
        </View>

        <View style={styles.photoRow}>
          <Button
            containerStyle={styles.submitPhotoContainer}
            onPress={this.handleOpenCamera}
            style={styles.submitPhotoContent}
          >
            <Ionicon
              color="#e33e66"
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
              color="#e33e66"
              name="ios-albums-outline"
              size={30}
              style={{backgroundColor: 'transparent'}}
            />
          </Button>
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

        <Button
          containerStyle={styles.submitContainer}
          onPress={this.handleAddTripSubmit}
          style={styles.submitContent}
        >
          Create Trip
        </Button>
        {/* {
          this.state.coverUri ?
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
              onPress={this.handleNoCoverSelected}
              style={styles.submitContent}
            >
              Create Trip
            </Button>
        } */}
      </View>
    </View>
  }
};

{/* <Hoshi
  label={'Trip Title'}
  labelStyle={styles.inputLabel}
  borderColor={'#b76c94'}
  // backgroundColor={'rgba(230, 230, 230, 0.8)'}
  style={styles.inputField}
  inputStyle={styles.inputStyle}
  onChangeText={(title) => this.setState({title})}
  value={this.state.title}
/> */}
