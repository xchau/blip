import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export function retrieveEntries(id) {
  return {
    type: 'RETRIEVE_ENTRIES',
    payload: axios.get(`https://xchau-capstone-server.herokuapp.com/trips/${id}/entries`)
  };
};

export function addEntry(newEntry) {
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
      data: newEntry
    })
    .then((entry) => {
      dispatch({
        type: 'ADD_ENTRY_FULFILLED',
        payload: entry
      });

      Actions.entrieslist({
        tripId: newEntry.tripId,
        isOwner: true
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

export function deleteEntry(entryId) {
  return {
    type: 'DELETE_ENTRY',
    payload: axios.delete(`https://xchau-capstone-server.herokuapp.com/trips/entries/${entryId}`)
  };
};

export function updateEntry(updatedEntry) {
  return {
    type: 'UPDATE_ENTRY',
    payload: axios.patch(`https://xchau-capstone-server.herokuapp.com/trips/entries/${updatedEntry.entryId}`, updatedEntry)
  };
};
