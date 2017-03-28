import React, { Component } from 'react';
import {
  AlertIOS,
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { deleteEntry } from '../state/actions/entries';
import { retrieveEntryPhotos } from '../state/actions/photos';
import Button from 'react-native-button';
import Carousel from 'react-native-snap-carousel';
import Moment from 'moment';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { styles, sliderWidth, itemWidth } from '../styles/entry';

class Entry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };

    this.handlePopOut = this.handlePopOut.bind(this);
    this.handleUpdateEntryRedirect = this.handleUpdateEntryRedirect.bind(this);
    this.handleDeleteEntry = this.handleDeleteEntry.bind(this);
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
    this.setState({
      currentEntries: nextProps.entries
    });
  }

  handlePopOut(photo) {
    Actions.photoview({photo});
  }

  handleUpdateEntryRedirect() {
    const entry = this.props.entry;

    Actions.updateentry({entry, tripId: this.props.tripId});
  }

  handleDeleteEntry() {
    const entry = this.props.entry;

    AlertIOS.alert('Delete this entry?', 'Unfortunately, no take backsies.', [
      {text: 'Cancel', onPress: () => null},
      {text: 'Confirm', onPress: () => {
        const currentEntries = this.state.currentEntries;

        return this.props.deleteEntry(entry.id)
          .then((res) => {
            for (let i = 0; i < currentEntries.length; i++) {
              if (currentEntries[i].id == res.value.data.id) {
                currentEntries.splice(i, 1);
              }
            }

            this.props.updateEntries(currentEntries);
        });
      }}
    ]);
  }

  render() {
    const dateTime = this.props.entry.createdAt;

    return <View style={styles.entryContainer}>
      <View style={styles.headerBox}>
        <Text style={styles.entryTitle}>
          {this.props.entry.entryTitle}
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
      <View style={styles.footerBox}>
        <View style={styles.noteBox}>
          <Text style={styles.entryNote}>
            {this.props.entry.note}
          </Text>
        </View>
        <View style={styles.utilBox}>
          {
            this.props.isOwner ? <Button
              onPress={this.handleDeleteEntry}
              containerStyle={styles.trashButton}
            >
              <Ionicon
                color="#fff"
                name="ios-trash-outline"
                size={22}
                style={styles.trashIcon}
              />
            </Button> : null
          }
          {
            this.props.isOwner ? <Button
              onPress={this.handleUpdateEntryRedirect}
              containerStyle={styles.editButton}
            >
              <MaterialCommunityIcon
                color="#fff"
                name="pencil-box-outline"
                size={22}
                style={styles.editIcon}
              />
            </Button> : null
          }
        </View>
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
  deleteEntry,
  retrieveEntryPhotos
})(Entry);
