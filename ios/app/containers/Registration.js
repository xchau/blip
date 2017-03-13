import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from 'react-native-button';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Kohana } from 'react-native-textinput-effects';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }

    this.navigate = this.navigate.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  navigate(route) {
    this.props.navigator.push({name: route});
  }

  goBack(route) {
    this.props.navigator.pop();
  }

  render() {
    return <View>
      <Text>Registration Page</Text>
      <Button
        onPress={() => this.navigate('login')}
      >
        Go To Login
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
