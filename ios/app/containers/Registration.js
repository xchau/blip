import React, { Component } from 'react';
import { AlertIOS, AsyncStorage, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { authorizeUser, registerUser } from '../state/actions/auth';

import { Test } from '../components/Test';
import countries from './data/countries';

import ModalPicker from 'react-native-modal-picker';
import Button from 'react-native-button';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Kohana } from 'react-native-textinput-effects';
import { styles } from '../styles/registration';

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      nationality: 'home country'
    };

    this.navigate = this.navigate.bind(this);
    this.goSomewhere = this.goSomewhere.bind(this);
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
  }

  navigate(route) {
    this.props.navigator.push({name: route});
  }

  // REDIRECT TO PROTECTED SCENES
  async goSomewhere() {
    const token = await AsyncStorage.getItem('token');

    this.props.dispatch(authorizeUser(token))
      .then((res) => {
        if (res.data) {
          this.navigate('protected');
        }
        else {
          this.props.navigator = [];
          this.props.navigator.push({name: 'login'})
        }
      });
  }

  async storeJWT(item, jwt) {
    try {
      await AsyncStorage.setItem(item, jwt);
    }
    catch (err) {
      console.error(`AsyncStorage Error: ${err.message}`);
    }
  }

  handleRegistrationSubmit() {
    // FORM VALIDATION //
    if (!this.state.name.trim() || !this.state.username.trim() || !this.state.email.trim() || !this.state.password.trim()) {
      AlertIOS.alert('Please fill out all of the fields.');
    }
    else if (this.state.password !== this.state.confirmPassword) {
      AlertIOS.alert('Uh oh! Your passwords don\'t seem to match.');

      this.setState({
        password: '',
        confirmPassword: ''
      });
    }
    else if (this.state.nationality === 'home country') {
      AlertIOS.alert('Don\'t forget to tell us where you\'re from!');
    }
    else {
      // DISPATCH REGISTRATION ACTION //
      // const userDetails = this.state;
      userDetails = {
        name: 'Minh',
        username: 'xchau',
        email: 'abc@test.com',
        password: 'password',
        nationality: 'Vietnam'
      }

      delete userDetails.confirmPassword;

      this.props.dispatch(registerUser(userDetails))
      .then(async (res) => {
        this.storeJWT('token', res.value.data.token);
      })
      .catch((err) => {
        AlertIOS.alert(err.response.data.output.payload.message);
      });
    }
  }

  render() {
    return <View style={styles.sceneContainer}>
      <View style={styles.formBox}>
        <View style={styles.inputRow}>
          <Kohana
            label={'name'}
            labelStyle={styles.inputLabel}
            iconClass={MaterialCommunityIcon}
            iconName={'lead-pencil'}
            iconColor={'lightcoral'}
            inputStyle={styles.inputStyle}
            style={styles.inputField}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
          />
        </View>
        <View style={styles.inputRow}>
          <Kohana
            label={'username'}
            labelStyle={styles.inputLabel}
            iconClass={Ionicon}
            iconName={'md-person'}
            iconColor={'lightcoral'}
            inputStyle={styles.inputStyle}
            style={styles.inputField}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
          />
        </View>
        <View style={styles.inputRow}>
          <Kohana
            label={'email'}
            labelStyle={styles.inputLabel}
            iconClass={MaterialCommunityIcon}
            iconName={'email'}
            iconColor={'lightcoral'}
            inputStyle={styles.inputStyle}
            style={styles.inputField}
            name="email"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
        </View>
        <View style={styles.inputRow}>
          <Kohana
            secureTextEntry={true}
            label={'password'}
            labelStyle={styles.inputLabel}
            iconClass={MaterialCommunityIcon}
            iconName={'key-variant'}
            iconColor={'lightcoral'}
            inputStyle={styles.inputStyle}
            style={styles.inputField}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
        </View>
        <View style={styles.inputRow}>
          <Kohana
            secureTextEntry={true}
            label={'confirm password'}
            labelStyle={styles.inputLabel}
            iconClass={MaterialCommunityIcon}
            iconName={'key-variant'}
            iconColor={'lightcoral'}
            inputStyle={styles.inputStyle}
            style={styles.inputField}
            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
            value={this.state.confirmPassword}
          />
        </View>

        <View style={styles.modalPickerBox}>
          <ModalPicker
            style={styles.modalPicker}
            data={countries}
            onChange={(option) => {
              console.log(this.state);
              this.setState({ nationality: option.label });
            }}
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

const mapStateToProps = function(store) {
  console.log(store);
  return {
    user: store.userReducer
  };
};

export default connect(mapStateToProps)(Registration);
