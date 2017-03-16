import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

import Button from 'react-native-button';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/searchbar';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  render() {
    return <View style={styles.searchContainer}>
      <TextInput
        // placeholder="Filter trips"
        style={styles.searchField}
        onChangeText={(query) => this.setState({query})}
        value={this.state.query}
      />
      <Button
        containerStyle={styles.buttonContainer} style={styles.searchButton}
      >
        <Ionicon name="ios-search" size={20} color="#fff" />
      </Button>
    </View>
  }
}
