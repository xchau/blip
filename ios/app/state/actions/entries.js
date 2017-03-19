import axios from 'axios';

export function retrieveEntries(id) {
  console.log(id);
  return {
    type: 'RETRIEVE_ENTRIES',
    payload: axios.get(`https://xchau-capstone-server.herokuapp.com/trips/${id}/entries`)
  };
};
