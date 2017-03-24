import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export function refreshUser(userId, tripId) {
  return (dispatch, getState) => {
    dispatch({ type: 'REFRESH_USER_PENDING' });

    axios
      .get(`https://xchau-capstone-server.herokuapp.com/users/${userId}`)
      .then((user) => {
        console.log(user);

        dispatch({
          type: 'REFRESH_USER_FULFILLED',
          payload: user
        });

        Actions.entrieslist({tripId, isOwner: true});
      })
      .catch((err) => {
        dispatch({
          type: 'REFRESH_USER_REJECTED',
          payload: err
        });
      });
  };
};
