import React, { Component } from 'react';
import {
  AlertIOS,
  AsyncStorage,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { regInputIsValid } from '../lib/auth';

import countries from './data/countries';

import Button from 'react-native-button';
import ModalPicker from 'react-native-modal-picker';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Kohana } from 'react-native-textinput-effects';
import { styles } from '../styles/registration';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      nationality: 'home country',
    };

    this.goSomewhere = this.goSomewhere.bind(this);
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
  }

  // REDIRECT TO PROTECTED SCENES
  async goSomewhere() {
    const token = await AsyncStorage.getItem('token');

    this.props.authorizeUser(token, 'auth');
  }

  handleRegistrationSubmit() {
    if (regInputIsValid(this.state)) {
      const userDetails = this.state;

      delete userDetails.confirmPassword;

      this.props.registerUser(userDetails, 'auth/register');
    }
  }

  render() {
    // const inputStyle = ... ? :
    return <View style={styles.sceneContainer}>
      <View style={styles.formBox}>
        <View style={styles.inputRow}>
          <Kohana
            label={"username"}
            labelStyle={styles.inputLabel}
            iconClass={Ionicon}
            iconName={"md-person"}
            iconColor={"lightcoral"}
            inputStyle={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(username) => this.setState({username})}
            style={styles.inputField}
            value={this.state.username}
          />
        </View>
        <View style={styles.inputRow}>
          <Kohana
            label={"email"}
            labelStyle={styles.inputLabel}
            iconClass={MaterialCommunityIcon}
            iconName={"email"}
            iconColor={"lightcoral"}
            inputStyle={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(email) => this.setState({email})}
            style={styles.inputField}
            value={this.state.email}
          />
        </View>
        <View style={styles.inputRow}>
          <Kohana
            secureTextEntry={true}
            label={"password"}
            labelStyle={styles.inputLabel}
            iconClass={MaterialCommunityIcon}
            iconName={"key-variant"}
            iconColor={"lightcoral"}
            inputStyle={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(password) => this.setState({password})}
            style={styles.inputField}
            value={this.state.password}
          />
        </View>
        <View style={styles.inputRow}>
          <Kohana
            secureTextEntry={true}
            label={"confirm password"}
            labelStyle={styles.inputLabel}
            iconClass={MaterialCommunityIcon}
            iconName={"key-variant"}
            iconColor={"lightcoral"}
            inputStyle={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
            style={styles.inputField}
            value={this.state.confirmPassword}
          />
        </View>

        <View style={styles.modalPickerBox}>
          <ModalPicker
            style={styles.modalPicker}
            data={countries}
            onChange={(option) => this.setState({nationality: option.label})}
          >
            <Text
              style={styles.pickerDisplayBox}
            >
              {this.state.nationality}
            </Text>
          </ModalPicker>
        </View>

        <Button
          onPress={this.handleRegistrationSubmit}
          containerStyle={styles.submitContainer}
          style={styles.submitContent}
        >
          Sign up
        </Button>
        <Button
          color="lightcoral"
          onPress={this.goSomewhere}
        >
          Go to Protected Scene
        </Button>
      </View>
    </View>
  }
};
