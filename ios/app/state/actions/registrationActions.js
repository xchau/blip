import axios from 'axios';

export function registerUser(userDetails) {
  return {
    type: 'FETCH_USER',
    payload: axios.post('https://xchau-capstone-server.herokuapp.com/api/users', {
      name: userDetails.name,
      username: userDetails.username,
      email: userDetails.email,
      password: userDetails.password,
      nationality: userDetails.nationality
    })
  };
};
