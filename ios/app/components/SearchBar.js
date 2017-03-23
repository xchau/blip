import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { setTripFilter } from '../state/actions/trips';
import Button from 'react-native-button';

import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/searchbar';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit() {
    // console.log(this);
    this.props.setTripFilter(this.state.query);
  }

  render() {
    return <View style={styles.searchContainer}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.searchField}
        onChangeText={(query) => this.setState({query})}
        value={this.state.query}
      />
      <Button
        containerStyle={styles.buttonContainer}
        onPress={this.handleSearchSubmit}
        style={styles.searchButton}
      >
        <Ionicon name="ios-search" size={20} color="#fff" />
      </Button>
    </View>
  }
}

export default connect(null, { setTripFilter })(SearchBar);
