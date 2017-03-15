import axios from 'axios';

export function registerUser(userDetails) {
  return {
    type: 'REGISTER_USER',
    payload: axios.post('https://xchau-capstone-server.herokuapp.com/api/users', {
      name: userDetails.name,
      username: userDetails.username,
      email: userDetails.email,
      password: userDetails.password,
      nationality: userDetails.nationality
    })
  };
};

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

export function authenticateUser(creds) {
  return {
    type: 'AUTHENTICATE_USER',
    payload: axios({
      method: 'post',
      url: 'https://xchau-capstone-server.herokuapp.com/auth/login',
      body: {
        email: creds.email,
        password: creds.password
      }
    })
  };
};
