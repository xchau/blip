import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';
import Button from 'react-native-button';
import { NavBar } from './NavBar';

import { Isao, Hoshi } from 'react-native-textinput-effects';
import { styles } from '../styles/addtripform';

export default class AddTripForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      destination: '',
      coverPhoto: ''
    };

    this.handleAddTripSubmit = this.handleAddTripSubmit.bind(this);
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

        <Button
          containerStyle={styles.submitContainer}
          onPress={this.handleAddTripSubmit}
          style={styles.submitContent}
        >
          CreateTrip
        </Button>
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
