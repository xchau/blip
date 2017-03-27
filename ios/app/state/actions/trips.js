import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { AlertIOS } from 'react-native';
import { refreshUser } from './users';

export function setTripFilter(query) {
  return {
    type: 'SET_TRIP_FILTER',
    payload: query
  };
};

export function retrieveTrips(path) {
  const url = `https://xchau-capstone-server.herokuapp.com/${path}`;

  return {
    type: 'RETRIEVE_TRIPS',
    payload: axios.get(url)
  };
};

export function addTrip(newTripObj, path) {
  return {
    type: 'ADD_TRIP',
    payload: axios({
      url: `https://xchau-capstone-server.herokuapp.com/${path}`,
      method: 'post',
      data: newTripObj
    })
  };

  // const url = `https://xchau-capstone-server.herokuapp.com/${path}`;

  // return (dispatch, getState) => {
  //   dispatch({ type: 'ADD_TRIP_PENDING' });
  //
  //   axios
  //     .post(url, newTripObj)
  //     .then((newTrip) => {
  //       dispatch({
  //         type: 'ADD_TRIP_FULFILLED',
  //         payload: newTrip
  //       });
  //
  //       dispatch(
  //         refreshUser(newTrip.data.userId)
  //           .then(() => {
  //             Actions.entrieslist({tripId, isOwner: true});
  //           })
  //       );
  //     })
  //     .catch((err) => {
  //       dispatch({
  //         type: 'ADD_TRIP_REJECTED',
  //         payload: err
  //       });
  //
  //       AlertIOS.alert('Uh oh!', err.response.data.output.payload.message);
  //     });
  // };
};

export function togglePublish(tripId, userId, token) {
  const url = `https://xchau-capstone-server.herokuapp.com/trips/publish`;

  return (dispatch, getState) => {
    dispatch({ type: 'TOGGLE_PUBLISH_PENDING'})

    axios({
      method: 'patch',
      url: url,
      data: {tripId},
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((trip) => {
      dispatch({
        type: 'TOGGLE_PUBLISH_FULFILLED',
        payload: trip
      });

      dispatch(refreshUser(userId, tripId));
    })
    .catch((err) => {
      dispatch({
        type: 'TOGGLE_PUBLISH_REJECTED',
        payload: err
      });
    });
  };
};

export function deleteTrip(tripId, token) {
  return {
    type: 'DELETE_TRIP',
    payload: axios({
      url: `https://xchau-capstone-server.herokuapp.com/trips/${tripId}`,
      method: 'delete',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  };
};
