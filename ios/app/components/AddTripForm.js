import React, { Component } from 'react';
import {
  Image,
  StatusBar,
  Text,
  TextInput,
  View
} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import { NavBar } from './NavBar';

import { styles } from '../styles/addtripform';

export default class AddTripForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      destination: '',
      coverPhoto: '',
      coverUri: false
    };

    this.handleAddTripSubmit = this.handleAddTripSubmit.bind(this);
    this.handleOpenCamera = this.handleOpenCamera.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.coverUri !== nextProps.coverUri) {
      this.setState({
        coverUri: nextProps.coverUri
      });
    }
  }

  handleOpenCamera() {
    console.log(this.props);
  }

  handleOpenCR() {
    Actions.camroll();
  }

  handleAddTripSubmit() {
    // const newTrip = {
    //   ...this.state,
    //   userId: this.props.currentUserId
    // };

    const newTrip = {
      userId: this.props.currentUserId,
      title: 'A NEW TRIP',
      destination: 'Antartica',
      coverPhoto: 'https://www.goodfreephotos.com/albums/antarctica/lake-fryxell-in-the-transantarctic-mountains-antarctica.jpg'
    };

    this.props.addTrip('trips', newTrip);
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

        <View style={styles.photoRow}>
          <Button
            containerStyle={styles.submitPhotoContainer}
            onPress={this.handleOpenCamera}
            style={styles.submitPhotoContent}
          >
            Open Camera
          </Button>

          <Button
            containerStyle={styles.submitPhotoContainer}
            onPress={this.handleOpenCR}
            style={styles.submitPhotoContent}
          >
            Open Camera Roll
          </Button>
        </View>
        {
          this.state.coverUri ?
            <View style={styles.coverBox}>
              <Image
                source={{uri: this.state.coverUri}}
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
