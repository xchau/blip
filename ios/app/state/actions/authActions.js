import axios from 'axios';

export function authorizeUser(token) {
  return {
    type: 'AUTHORIZE_USER',
    payload: axios({
      method: 'get',
      url: 'https://xchau-capstone-server.herokuapp.com/auth',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  };
};
