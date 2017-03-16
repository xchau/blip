import axios from 'axios';

export function retrieveTrips() {
  return {
    type: 'RETRIEVE_TRIPS',
    payload: axios.get('https://xchau-capstone-server.herokuapp.com/trips')
  };
};
