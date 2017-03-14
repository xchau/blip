import React, { Component } from 'react';
import { PickerIOS, Text, View } from 'react-native';
import ModalPicker from 'react-native-modal-picker';
import Button from 'react-native-button';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Kohana } from 'react-native-textinput-effects';
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
      country: 'Serbia'
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
      <PickerIOS
        style={{height: 20}}
        selectedValue={this.state.country}
        onValueChange={(country) => {
          this.setState({ country });
        }}
      >
        {
          countries.map((country) => {
            return <PickerIOS.Item
              key={country}
              value={country}
              label={country}
            />
          })
        }
      </PickerIOS>
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
