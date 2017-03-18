import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import TimeAgo from 'react-native-timeago';

import Carousel from 'react-native-snap-carousel';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles, sliderWidth, itemWidth } from '../styles/trip';

// export const Trip = (this.props) => {
export default class Trip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Autumn_colors_intragna_switzerland.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/3/33/A_beach_in_Maldives.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/c/c2/New_Delhi_Temple.jpg'
      ]
    };
  }

  render() {
    console.log(itemWidth, sliderWidth);
    return <View style={styles.cardContainer}>
      <View style={styles.headerBox}>
        <Text
          style={styles.tripTitle}
        >
          {this.props.trip.subtitle}
        </Text>

      </View>

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
            <Text style={styles.timeAgo}>Last updated</Text>
            <TimeAgo
              time={this.props.trip.updatedAt}
              style={styles.timeAgo}
            />
          </View>
        </View>
        <View style={styles.tripBox}>
          <Image
            source={{uri: this.props.trip.coverPhoto}}
            style={styles.coverPhoto}
          />
        </View>
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
            console.log(e);
            return <Image
              key={e}
              source={{ uri: e }}
              style={{
                // borderWidth: 2,
                height: 50,
                marginLeft: 3,
                marginRight: 3,
                width: 50
              }}
            />
          })
        }
        </Carousel>
      </View>
    </View>
  }
}
