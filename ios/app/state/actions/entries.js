import axios from 'axios';

export function retrieveEntries(id) {
  return {
    type: 'RETRIEVE_ENTRIES',
    payload: axios.get(`https://xchau-capstone-server.herokuapp.com/trips/${id}/entries`)
  };
};
