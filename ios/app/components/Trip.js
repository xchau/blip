import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { retrieveRandomPhotos } from '../state/actions/photos';
import Carousel from 'react-native-snap-carousel';
import Moment from 'moment';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles, sliderWidth, itemWidth } from '../styles/trip';

class Trip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };

    this.handleRedirectToEntries = this.handleRedirectToEntries.bind(this);
  }

  componentDidMount() {
    this.props.retrieveRandomPhotos(this.props.trip.id)
      .then((res) => {
        console.log(res);

        this.setState({
          photos: res.value.data
        });
      });
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
    const dateTime = this.props.trip.updatedAt;

    return <View style={styles.cardContainer}>
        <TouchableHighlight
          onPress={this.handleRedirectToEntries}
          style={styles.headerBox}
        >
          <Text
            style={styles.tripTitle}
          >
            {this.props.trip.title}
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
          {
            this.state.photos.length ? <Carousel
              ref={(carousel) => this._carousel = carousel}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              enableMomentum={true}
              inactiveSlideScale={1}
              style={styles.carousel}
            >
              { this.state.photos.map(photo => {
                console.log(photo);
                return <Image
                  key={photo.id}
                  source={{ uri: photo.photoUrl }}
                  style={styles.carouselItem}
                />
              })
            }
            </Carousel>
            :
            null
          }
        </View>
      </View>
  }
};

const mapStateToProps = (store) =>  {
  return {
    entryPhotos: store.imagesData.entryPhotos
  };
};

export default connect(mapStateToProps, {
  retrieveRandomPhotos
})(Trip);
