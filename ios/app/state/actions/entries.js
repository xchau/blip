import axios from 'axios';

export function retrieveEntries(id) {
  return {
    type: 'RETRIEVE_ENTRIES',
    payload: axios.get(`https://xchau-capstone-server.herokuapp.com/trips/${id}/entries`)
  };
};

export function addEntry(newEntry, body) {
  const token = newEntry.token;

  delete newEntry.token;

  return (dispatch, getState) => {
    dispatch({ type: 'ADD_ENTRY_PENDING' });

    axios({
      url: `https://xchau-capstone-server.herokuapp.com/trips/entries`,
      method: 'post',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body,
      data: newEntry
    })
    .then((entry) => {
      console.log(entry);

      dispatch({
        type: 'ADD_ENTRY_FULFILLED',
        payload: entry
      });
    })
    .catch((err) => {
      dispatch({
        type: 'ADD_ENTRY_REJECTED',
        payload: err
      });
    });
  };
};
