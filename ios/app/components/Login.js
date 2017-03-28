import React, { Component } from 'react';
import {
  ActivityIndicator,
  AlertIOS,
  AsyncStorage,
  Image,
  StatusBar,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { logInputIsValid } from '../lib/auth';
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

  handleLoginSubmit() {
    if (logInputIsValid(this.state)) {
      this.props.authenticateUser(this.state, 'auth/login');
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
              style={styles.logo}
            />
            <ActivityIndicator
              color="#44ecba"
              size="large"
              style={{marginTop: 20}}
            />
          </View>
        </View> :
        <View
          style={styles.sceneContainer}
        >
          <View style={styles.heroBox}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
            />
          </View>

          <View style={styles.formBox}>
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
                iconName={"lock-open-outline"}
                iconColor={"#44ecba"}
                inputStyle={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
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
    </View>
  }
};
