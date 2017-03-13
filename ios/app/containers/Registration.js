import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class Registration extends Component {
  constructor(props) {
    super(props);

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
        title="Go To Login"
      />
      <Button
        color="lightcoral"
        onPress={this.goBack}
        title="Go Back"
      />
    </View>
  }
};
