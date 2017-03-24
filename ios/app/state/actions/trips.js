import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { AlertIOS } from 'react-native';

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

  let tripId;

  return (dispatch, getState) => {
    dispatch({ type: 'ADD_TRIP_PENDING' });

    axios.post(url, newTripObj)
      .then((newTrip) => {
        console.log(newTrip);
        dispatch({
          type: 'ADD_TRIP_FULFILLED',
          payload: newTrip
        });

        tripId = newTrip.data.id;

        dispatch({ type: 'REFRESH_USER_PENDING' });

        // Refresh current userData
        return axios.get(`https://xchau-capstone-server.herokuapp.com/users/${newTrip.data.userId}`)
      })
      .then((user) => {
        dispatch({
          type: 'REFRESH_USER_FULFILLED',
          payload: user
        });

        console.log(user, tripId);
        // Actions.entrieslist({tripId tripId, isOwner: true});
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
