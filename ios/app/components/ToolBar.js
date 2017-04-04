import React from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { styles } from '../styles/toolbar';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

export const ToolBar = (props) => {
  return <View style={styles.tbContainer}>
    <View style={styles.quickButton}>
      { props.children }
    </View>
    {
      props.showBackToTop ?
        <TouchableHighlight
          onPress={props.backToTop}
          underlayColor="transparent"
        >
          <SimpleLineIcon
            color="#fff"
            name="arrow-up-circle"
            size={25}
            style={styles.backToTopButton}
          />
        </TouchableHighlight>
      :
      <TouchableHighlight>
        <SimpleLineIcon
          name="arrow-up-circle"
          size={25}
          color="transparent"
        />
      </TouchableHighlight>
    }
  </View>
};
