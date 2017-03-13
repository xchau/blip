import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import Button from 'react-native-button';
import { styles } from '../styles/login';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Kohana } from 'react-native-textinput-effects';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.navigate = this.navigate.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  navigate(route) {
    this.props.navigator.push({name: route});
  }

  handleLoginSubmit() {

  }

  render() {
    return <View style={styles.pageContainer}>
      <View style={styles.heroBox}>
        <Text>Hero Box</Text>
      </View>

      <View style={styles.formBox}>
        <View style={styles.inputRow}>
          <Kohana
            label={'Email'}
            labelStyle={styles.inputLabel}
            iconClass={MaterialCommunityIcon}
            iconName={'email-outline'}
            iconColor={'lightcoral'}
            inputStyle={styles.inputStyle}
            style={styles.inputField}
          />
        </View>

        <View style={styles.inputRow}>
          <Kohana
            secureTextEntry={true}
            label={'Password'}
            labelStyle={styles.inputLabel}
            iconClass={MaterialCommunityIcon}
            iconName={'key-variant'}
            iconColor={'lightcoral'}
            inputStyle={styles.inputStyle}
            style={styles.inputField}
          />
        </View>

        <Button
          onPress={() => this.navigate('registration')}
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
            onPress={() => this.navigate('registration')}
          >
            <Text style={styles.registerLink}>
              Sign up
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  }
};
