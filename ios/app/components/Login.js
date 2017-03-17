import React, { Component } from 'react';
import {
  ActivityIndicator,
  AlertIOS,
  AsyncStorage,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Button from 'react-native-button';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Kohana } from 'react-native-textinput-effects';
import { styles } from '../styles/login';
import { loadauth } from '../styles/loadauth';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  async storeJWT(item, jwt) {
    try {
      await AsyncStorage.setItem(item, jwt);
    }
    catch (err) {
      console.error(`AsyncStorage Error: ${err.message}`);
    }
  }

  handleLoginSubmit() {
    if (!this.state.email.trim()) {
      AlertIOS.alert('Please fill out your email.');
    }
    else if (!this.state.password.trim()) {
      AlertIOS.alert('Please fill out your password.');
    }
    else if (!this.state.email.trim() && !this.state.password.trim()) {
      AlertIOS.alert('Please sign in with your email and password.');
    }
    else {
      this.props.authenticateUser(this.state)
        .then(async (res) => {
          // console.log(res);
          this.storeJWT('token', res.value.data.token);

          if (res.value.data.isTraveling) {
            Actions.protected();
          }
          else {
            Actions.tripslist();
          }
        })
        .catch((err) => {
          console.error(err);
          AlertIOS.alert(err.response.data.output.payload.message);
        });
    }
  }

  render() {
    return this.props.user.isFetching ?
      <View style={loadauth.spinnerBox}>
        <ActivityIndicator
          style={loadauth.spinner}
          size="large"
        />
      </View>
      :
      <View style={styles.sceneContainer}>
      <View style={styles.heroBox}>
        <Text>Hero Box</Text>
      </View>

      <View style={styles.formBox}>
        <View style={styles.inputRow}>
          <Kohana
            label={"Email"}
            labelStyle={styles.inputLabel}
            iconClass={MaterialCommunityIcon}
            iconName={"email"}
            iconColor={"lightcoral"}
            inputStyle={styles.inputStyle}
            autoCapitalize="none"
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
            iconName={"key-variant"}
            iconColor={"lightcoral"}
            inputStyle={styles.inputStyle}
            autoCapitalize="none"
            onChangeText={(password) => this.setState({password})}
            style={styles.inputField}
            value={this.state.password}
          />
        </View>

        <Button
          onPress={this.handleLoginSubmit}
          containerStyle={styles.submitContainer}
          style={styles.submitContent}
        >
          Sign In
        </Button>

        <Button
          onPress={async ()=> {
            try {
              await AsyncStorage.removeItem('token');
              AlertIOS.alert('Removed token')
            }
            catch (err) {
              console.error(err);
            }
          }}
          containerStyle={styles.submitContainer}
          style={styles.submitContent}
        >
          DELETE TOKEN
        </Button>

        <View style={styles.registrationBox}>
          <Text style={styles.registerPrompt}>
            Not a member?
          </Text>
          <TouchableHighlight
            onPress={Actions.registration}
          >
            <Text
              style={styles.registerLink}
            >
              Sign up
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  }
};
