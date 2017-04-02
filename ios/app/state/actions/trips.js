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

export function retrieveHistory(token) {
  return {
    type: 'RETRIEVE_HISTORY',
    payload: axios({
      url: `https://xchau-capstone-server.herokuapp.com/trips/history`,
      method: 'get',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  };
};
