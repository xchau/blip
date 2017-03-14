import React, { Component } from 'react';
import { PickerIOS, Text, TextInput, View } from 'react-native';
import ModalPicker from 'react-native-modal-picker';
import Button from 'react-native-button';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Kohana } from 'react-native-textinput-effects';
import { styles } from '../styles/registration';
import countries from './data/countries';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      country: ''
    }

    this.navigate = this.navigate.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  navigate(route) {
    this.props.navigator.push({name: route});
  }

  goBack(route) {

  }

  render() {
    return <View>
      <View style={styles.formBox}>
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
      </View>

      <View style={{flex:1, justifyContent:'space-around', padding:50}}>
        <ModalPicker
          style={{height: 200, marginTop: 140}}
          data={countries}
          onChange={(option)=>{
            this.setState({ country: option.label });
          }}
        >
          <TextInput
            style={styles.pickerBox}
            editable={false}
            placeholder="What is your nationality?"
            value={this.state.textInputValue}
          />
        </ModalPicker>
      </View>

      <Button
        onPress={() => this.navigate('login')}
      >
        {this.state.country}
      </Button>
      <Button
        color="lightcoral"
        onPress={this.goBack}
      >
        Go Back
      </Button>
    </View>
  }
};
