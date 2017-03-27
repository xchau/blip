import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export function refreshUser(userId) {
  return {
    type: 'REFRESH_USER',
    payload: axios.get(`https://xchau-capstone-server.herokuapp.com/users/${userId}`)
  };
};
