import axios from 'axios';

export function registerUser() {
  return {
    type: 'FETCH_USER',
    payload: axios.get('http://localhost:3001/register/user');
  };
};
