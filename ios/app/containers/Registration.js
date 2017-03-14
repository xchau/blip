import React, { Component } from 'react';
import { PickerIOS, Text, TextInput, View } from 'react-native';
import ModalPicker from 'react-native-modal-picker';
import Button from 'react-native-button';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
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
      country: 'nationality'
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
          />
        </View>

        <View style={{ alignItems: 'center', flexDirection: 'column', height: 60, justifyContent: 'center' }}>
          <Text>
            Phew, almost there!
          </Text>
        </View>

        <View style={styles.modalPickerBox}>
          <ModalPicker
            style={styles.modalPicker}
            data={countries}
            onChange={(option)=> {
              this.setState({ country: option.label });
            }}
          >
            <Text
              style={styles.pickerDisplayBox}
              // editable={false}
              // placeholder={this.state.country}
              // value={this.state.textInputValue}
            >{this.state.country}</Text>
          </ModalPicker>
        </View>

        <Text>
          {this.state.country}
        </Text>
        <Button
          color="lightcoral"
          onPress={() => this.navigate('login')}
        >
          Go Back
        </Button>
      </View>
    </View>
  }
};
