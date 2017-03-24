import axios from 'axios';
import { AlertIOS } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { getJwt, storeJwt } from '../../lib/auth';

export function authenticateUser(creds, path) {
  const url = `https://xchau-capstone-server.herokuapp.com/${path}`;
  return (dispatch, getState) => {
    dispatch({ type: 'AUTHENTICATE_USER_PENDING' });

    axios.post(url, creds)
      .then((user) => {
        storeJwt('token', user.data.token);

        dispatch({
          type: 'AUTHENTICATE_USER_FULFILLED',
          payload: user
        });

        if (user.data.isTraveling) {
          Actions.entrieslist({
            tripId: user.data.isTraveling,
            isOwner: true
          });
        }
        else {
          Actions.tripslist();
        }
      })
      .catch((err) => {
        dispatch({
          type: 'AUTHENTICATE_USER_REJECTED',
          payload: err
        });

        AlertIOS.alert(err.response.data.output.payload.message, 'Please check your email or password and try again');
      });
  };
};

export function registerUser(userDetails, path) {
  const url = `https://xchau-capstone-server.herokuapp.com/${path}`;
  return (dispatch, getState) => {
    dispatch({ type: 'REGISTER_USER_PENDING' });

    axios.post(url, userDetails)
      .then((user) => {
        storeJwt('token', user.data.token);

        dispatch({
          type: 'REGISTER_USER_FULFILLED',
          payload: user
        });

        Actions.tripslist();
      })
      .catch((err) => {
        dispatch({
          type: 'REGISTER_USER_REJECTED',
          payload: err
        });

        AlertIOS.alert('Oops!', err.response.data.output.payload.message);
      });
  }
};

export function authorizeUser(token, path) {
  const url = `https://xchau-capstone-server.herokuapp.com/${path}`;
  return (dispatch, getState) => {
    dispatch({ type: 'AUTHORIZE_USER_PENDING' });

    axios({
      method: 'get',
      url: url,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log('THIS IS THE RES: ' + res.data);

      dispatch({
        type: 'AUTHORIZE_USER_FULFILLED',
        payload: res
      });

      Actions.tripslist();
    })
    .catch((err) => {
      console.error(err);

      dispatch({
        type: 'AUTHORIZE_USER_REJECTED',
        payload: err
      });

      Actions.login();
    });
  };
};
