import React, { Component } from 'react';
import {
  ActivityIndicator,
  AlertIOS,
  AsyncStorage,
  Image,
  PickerIOS,
  StatusBar,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { regInputIsValid } from '../lib/auth';
import Button from 'react-native-button';
import countries from './data/countries';

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
      nationality: 'United States',
    };

    this.backToSignIn = this.backToSignIn.bind(this);
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
  }

  backToSignIn() {
    Actions.login();
  }

  handleRegistrationSubmit() {
    if (regInputIsValid(this.state)) {
      const userDetails = this.state;

      delete userDetails.confirmPassword;

      this.props.registerUser(userDetails, 'auth/register');
    }
  }

  render() {
    StatusBar.setBarStyle('default', false);

    return <View style={styles.sceneContainer}>
      {
        this.props.isFetching ?
        <View style={styles.loadContainer}>
          <View style={styles.loadHeroBox}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logoLoad}
            />
            <ActivityIndicator
              color="#44ecba"
              size="large"
              style={{marginTop: 20}}
            />
          </View>
        </View>
        :
        <View style={styles.sceneContainer}>
          <View style={styles.logoBox}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.formBox}>
            <View style={styles.inputRow}>
              <Kohana
                label={"Username"}
                labelStyle={styles.inputLabel}
                iconClass={Ionicon}
                iconName={"md-person"}
                iconColor={"#44ecba"}
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
                label={"Email"}
                labelStyle={styles.inputLabel}
                iconClass={MaterialCommunityIcon}
                iconName={"email-outline"}
                iconColor={"#44ecba"}
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
                label={"Password"}
                labelStyle={styles.inputLabel}
                iconClass={MaterialCommunityIcon}
                iconName={"lock-outline"}
                iconColor={"#44ecba"}
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
                label={"Confirm Password"}
                labelStyle={styles.inputLabel}
                iconClass={MaterialCommunityIcon}
                iconName={"lock-outline"}
                iconColor={"#44ecba"}
                inputStyle={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                style={styles.inputField}
                value={this.state.confirmPassword}
              />
            </View>
            <View style={styles.instructionBox}>
              <Text style={styles.instructions}>Please select your home country</Text>
            </View>
            <View style={styles.pickerBox}>
              <PickerIOS
                onValueChange={(country) => this.setState({nationality: country})}
                itemStyle={styles.pickerStyle}
                selectedValue={this.state.nationality}
              >
                {
                  countries.map(country => {
                    return <PickerIOS.Item
                      key={country.key}
                      label={country.label}
                      value={country.label}
                    />
                  })
                }
              </PickerIOS>
            </View>

            <Button
              containerStyle={styles.submitContainer}
              onPress={this.handleRegistrationSubmit}
              style={styles.submitContent}
            >
              Register
            </Button>
            <Button
              onPress={this.backToSignIn}
              containerStyle={styles.cancelContainer}
              style={styles.cancelContent}
            >
              Back to Sign In
            </Button>
          </View>
        </View>
      }
    </View>
  }
};
