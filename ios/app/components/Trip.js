import React from 'react';
import { Image, Text, View } from 'react-native';
import TimeAgo from 'react-native-timeago';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../styles/trip';

export const Trip = (props) => {
  console.log(props)
  return <View style={styles.cardContainer}>
    <View style={styles.cardBox}>
      <Text style={{fontFamily: 'Bradley Hand'}}>
        ~
        <TimeAgo
          time={props.trip.updatedAt}
          style={styles.timeAgo}
        />
        ~
      </Text>

      <View style={styles.tripBox}>
        <Text
          style={styles.tripTitle}
        >
          {props.trip.subtitle}
        </Text>
        <Image
          source={{uri: props.trip.coverPhoto}}
          style={styles.coverPhoto}
        />
        <View style={styles.infoRow}>
          <View style={styles.posterBox}>
            <Text style={{paddingTop: 2}}>
              by {props.trip.username}
            </Text>
            <Image
              source={{uri: props.trip.posterPic}}
              style={styles.posterPic}
            />
          </View>

          <View style={styles.likesBox}>
            <MaterialCommunityIcon name="arrow-up-bold-hexagon-outline" size={22} color="white" />
            <Text style={{borderWidth: 1, paddingTop: 2}}>{props.trip.votes}</Text>
          </View>
        </View>
      </View>

    </View>
  </View>
}
