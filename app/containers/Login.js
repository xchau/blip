import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.navigate = this.navigate.bind(this);
  }

  navigate(route) {
    this.props.navigator.push({name: route});
  }

  render() {
    return <View>
      <Text>Login Page</Text>
      <Button
        onPress={() => this.navigate('registration')}
        title="Go To Registration"
      />
    </View>
  }
};
