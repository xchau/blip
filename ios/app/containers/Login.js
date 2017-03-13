import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../styles/login';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Makiko } from 'react-native-textinput-effects';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.navigate = this.navigate.bind(this);
  }

  navigate(route) {
    this.props.navigator.push({name: route});
  }

  render() {
    return <View style={styles.pageContainer}>
      <View style={styles.heroBox}>
        <Text>Hero Box</Text>
      </View>

      <View style={styles.loginBox}>
        <Text>abc</Text>

        <Makiko
          label={'Comment'}
          iconClass={FontAwesomeIcon}
          iconName={'comment'}
          iconColor={'white'}
          inputStyle={{ color: '#db786d' }}
        />
      </View>

      <Button
        onPress={() => this.navigate('registration')}
        title="Go To Registration"
      />
    </View>
  }
};
