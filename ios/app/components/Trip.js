import React from 'react';
import { Image, Text, View } from 'react-native';
import TimeAgo from 'react-native-timeago';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../styles/trip';

export const Trip = (props) => {
  return <View style={styles.cardContainer}>
    <View style={styles.headerBox}>
      <Text
        style={styles.tripTitle}
      >
        {props.trip.subtitle}
      </Text>

    </View>

    <View style={styles.cardBox}>
      <View style={styles.posterBox}>
        <Image
          source={{uri: props.trip.posterPic}}
          style={styles.posterPic}
        />
        <Text style={styles.username}>
          {props.trip.username}
        </Text>
        <View style={styles.timeAgoBox}>
          <Text style={styles.timeAgo}>Last updated</Text>
          <TimeAgo
            time={props.trip.updatedAt}
            style={styles.timeAgo}
          />
        </View>
      </View>
      <View style={styles.tripBox}>

        <Image
          source={{uri: props.trip.coverPhoto}}
          style={styles.coverPhoto}
        />

      </View>
      {/* <View style={styles.tripBox}>
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
      </View> */}
    </View>
  </View>
}
