import React, { Component } from 'react';
import {
  AsyncStorage,
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

import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { styles } from '../styles/trip';

class Trip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };

    this.handleRedirectToEntries = this.handleRedirectToEntries.bind(this);
    this.handleRedirectToAddEntry = this.handleRedirectToAddEntry.bind(this);
    this.handlePopOut = this.handlePopOut.bind(this);
  }

  componentDidMount() {
    this.props.retrieveRandomPhotos(this.props.trip.id)
      .then((res) => {
        this.setState({
          photos: res.value.data
        });
      });
  }

  handlePopOut(photo) {
    Actions.photoview({photo});
  }

  async handleRedirectToAddEntry() {
    const token = await AsyncStorage.getItem('token');
    const tripId = this.props.trip.id;

    console.log(tripId);

    Actions.addentry({token, tripId});
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
      <View style={styles.headerBox}>
        <View style={styles.posterBox}>
          <Image
            source={{uri: this.props.trip.posterPic}}
            style={styles.posterPic}
          />
          <Text style={styles.username}>
            {this.props.trip.username}
          </Text>
        </View>
        {
          this.props.trip.userId === this.props.currentUserId ? <SimpleLineIcon
            color="#ff4a4a"
            name="plus"
            onPress={this.handleRedirectToAddEntry}
            size={24}
            style={styles.quickIcon}
          />
          :
          <SimpleLineIcon
            name="heart"
            size={24}
            color="#ff4a4a"
            style={styles.quickIcon}
          />
        }
      </View>

      <View style={styles.coverBox}>
        <TouchableHighlight
          onPress={this.handleRedirectToEntries}
          underlayColor="transparent"
        >
          <Image
            source={{uri: this.props.trip.coverPhoto}}
            style={styles.coverPhoto}
          />
        </TouchableHighlight>
      </View>
      <View style={styles.carouselBox}>
        {
          this.state.photos.length ? <Carousel
            ref={(carousel) => this._carousel = carousel}
            sliderWidth={60}
            itemWidth={60}
            enableMomentum={true}
            inactiveSlideScale={1}
            style={styles.carousel}
          >
            { this.state.photos.map(photo => {
              return <TouchableHighlight
                onPress={() => this.handlePopOut(photo)}
                key={photo.id}
                underlayColor="transparent"
              >
                <Image
                  source={{ uri: photo.photoUrl }}
                  style={styles.carouselItem}
                />
              </TouchableHighlight>
            })
          }
          </Carousel>
          :
          null
        }
      </View>
      <TouchableHighlight
        onPress={this.handleRedirectToEntries}
        underlayColor="transparent"
      >
        <View style={styles.titleRow}>
          <Text style={styles.tripTitle}>
            {this.props.trip.title}
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
      </TouchableHighlight>
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
