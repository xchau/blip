import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Moment from 'moment';

import Carousel from 'react-native-snap-carousel';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles, sliderWidth, itemWidth } from '../styles/trip';

export default class Trip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Autumn_colors_intragna_switzerland.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/3/33/A_beach_in_Maldives.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/c/c2/New_Delhi_Temple.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Autumn_colors_intragna_switzerland.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/3/33/A_beach_in_Maldives.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/c/c2/New_Delhi_Temple.jpg'
      ]
    };

    this.handleRedirectToEntries = this.handleRedirectToEntries.bind(this);
  }

  handleRedirectToEntries() {
    const tripId = this.props.trip.id;
    const ownerId = this.props.trip.userId;
    const currentUserId = this.props.currentUserId;

    let isOwner;

    if (ownerId === currentUserId) {
      isOwner = true;
    }
    else {
      isOwner = false;
    }

    Actions.entrieslist({tripId, isOwner});
  }

  render() {
    console.log(this.props);
    const dateTime = this.props.trip.updatedAt;

    return <View style={styles.cardContainer}>
        <TouchableHighlight
          onPress={this.handleRedirectToEntries}
          style={styles.headerBox}
        >
          <Text
            style={styles.tripTitle}
          >
            {this.props.trip.subtitle}
          </Text>
        </TouchableHighlight>
        <View style={styles.cardBox}>
          <View style={styles.posterBox}>
            <Image
              source={{uri: this.props.trip.posterPic}}
              style={styles.posterPic}
            />
            <Text style={styles.username}>
              {this.props.trip.username}
            </Text>
            <View style={styles.timeAgoBox}>
              <Text style={styles.timeAgo}>Updated</Text>
              <Text
                time={this.props.trip.updatedAt}
                style={styles.timeAgo}
              >
                {Moment(dateTime).fromNow()}
              </Text>
            </View>
          </View>
          <TouchableHighlight
            onPress={this.handleRedirectToEntries}
            style={styles.tripBox}
          >
            <Image
              source={{uri: this.props.trip.coverPhoto}}
              style={styles.coverPhoto}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.carouselBox}>
          <View style={styles.filler}></View>
          <Carousel
            ref={(carousel) => this._carousel = carousel}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            enableMomentum={true}
            inactiveSlideScale={1}
            // autoplay={true}
            style={styles.carousel}
          >
            { this.state.images.map(e => {
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
