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
  const url = `https://xchau-capstone-server.herokuapp.com/${path}`;

  return (dispatch, getState) => {
    dispatch({ type: 'ADD_TRIP_PENDING' });

    axios
      .post(url, newTripObj)
      .then((newTrip) => {
        dispatch({
          type: 'ADD_TRIP_FULFILLED',
          payload: newTrip
        });

        dispatch(refreshUser(newTrip.data.userId, newTrip.data.id));
      })
      .catch((err) => {
        dispatch({
          type: 'ADD_TRIP_REJECTED',
          payload: err
        });

        AlertIOS.alert('Uh oh!', err.response.data.output.payload.message);
      });
  };
};

export function togglePublish(tripId, token) {
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

      console.log(trip);
    })
    .catch((err) => {
      dispatch({
        type: 'TOGGLE_PUBLISH_REJECTED',
        payload: err
      });
    });
  };
};
