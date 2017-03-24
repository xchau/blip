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

// export function refreshUser(userId, tripId) {
//   return (dispatch, getState) => {
//     dispatch({ type: 'REFRESH_USER_PENDING' });
//
//     axios.get(`https://xchau-capstone-server.herokuapp.com/users/${userId}`)
//       .then((user) => {
//         console.log(user);
//
//         dispatch({
//           type: 'REFRESH_USER_FULFILLED',
//           payload: user
//         });
//
//         Actions.entrieslist({tripId, isOwner: true});
//       })
//       .catch((err) => {
//         dispatch({
//           type: 'REFRESH_USER_REJECTED',
//           payload: err
//         });
//       });
//   };
// };

export function addTrip(newTripObj, path) {
  const url = `https://xchau-capstone-server.herokuapp.com/${path}`;

  return (dispatch, getState) => {
    dispatch({ type: 'ADD_TRIP_PENDING' });

    axios.post(url, newTripObj)
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
