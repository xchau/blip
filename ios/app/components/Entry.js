import React, { Component } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Carousel from 'react-native-snap-carousel';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles, sliderWidth, itemWidth } from '../styles/entry';

export default class Entry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Autumn_colors_intragna_switzerland.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/3/33/A_beach_in_Maldives.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/c/c2/New_Delhi_Temple.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Autumn_colors_intragna_switzerland.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/3/33/A_beach_in_Maldives.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/c/c2/New_Delhi_Temple.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Autumn_colors_intragna_switzerland.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/3/33/A_beach_in_Maldives.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/c/c2/New_Delhi_Temple.jpg'
      ]
    };
  }

  render() {
    return <View style={styles.entryContainer}>
      <View style={styles.headerBox}>
        <Text
          style={styles.entryTitle}
        >
          {this.props.entry.entryTitle}
        </Text>
        <Text>
          {this.props.entry.createdAt}
        </Text>
        <Text
          style={styles.entryNote}
        >
          {this.props.entry.note}
        </Text>
      </View>
      <View style={styles.carouselBox}>
        <Carousel
          ref={(carousel) => this._carousel = carousel}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          enableMomentum={true}
          inactiveSlideScale={1}
          // autoplay={true}
          style={styles.carousel}
        >
          { this.state.photos.map(e => {
            return <Image
              key={e}
              source={{ uri: e }}
              style={styles.carouselItem}
            />
          })
        }
        </Carousel>
      </View>

    </View>
  }
};
