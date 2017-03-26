import React, { Component } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { retrieveEntryPhotos } from '../state/actions/photos';
import Carousel from 'react-native-snap-carousel';
import Moment from 'moment';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles, sliderWidth, itemWidth } from '../styles/entry';

class Entry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    const entryId = this.props.entry.id;

    this.props.retrieveEntryPhotos(entryId)
      .then((res) => {
        this.setState({
          photos: res.value.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentWillReceiveProps(nextProps) {
    // update here
  }

  render() {

    const dateTime = this.props.entry.createdAt;

    return <View style={styles.entryContainer}>
      <View style={styles.headerBox}>
        <Text style={styles.entryTitle}>
          {this.props.entry.id}
        </Text>
        <Text style={styles.entryDate}>
          {Moment(dateTime).format('MMMM Do, YYYY')}
        </Text>
      </View>
      <View style={styles.carouselBox}>
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
      <View style={styles.noteBox}>
        <Text style={styles.entryNote}>
          {this.props.entry.note}
        </Text>
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
  retrieveEntryPhotos
})(Entry);
