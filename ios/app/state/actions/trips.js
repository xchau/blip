import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { AlertIOS } from 'react-native';

export function retrieveTrips(path) {
  const url = `https://xchau-capstone-server.herokuapp.com/${path}`;

  return {
    type: 'RETRIEVE_TRIPS',
    payload: axios.get(url)
  };
};

export function addTrip(path, newTripObj) {
  const url = `https://xchau-capstone-server.herokuapp.com/${path}`

  return (dispatch, getState) => {
    dispatch({ type: 'ADD_TRIP_PENDING' });

    axios.post(url, newTripObj)
      .then((newTrip) => {
        console.log(newTrip);

        dispatch({
          type: 'ADD_TRIP_FULFILLED',
          payload: newTrip
        });

        // Actions.entrieslist({tripId: trip.data.id, isOwner: true});
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
