import axios from 'axios';

export function selectCoverPhoto(cpInfo) {
  return {
    type: 'SELECT_COVERPHOTO',
    payload: cpInfo
  };
};

export function uploadCoverPhoto(path, body) {
  const url = `https://xchau-capstone-server.herokuapp.com/${path}`

  return (dispatch, getState) => {
    dispatch({ type: 'UPLOAD_COVERPHOTO_PENDING' });

    axios
      .post(url, body)
      .then((uri) => {
        dispatch({
          type: 'UPLOAD_COVERPHOTO_FULFILLED',
          payload: uri
        });
      })
      .err((err) => {
        console.log(err);

        dispatch({
          type: 'UPLOAD_COVERPHOTO_REJECTED',
          payload: err
        });
      });
  };
};

export function retrieveEntryPhotos(entryId) {
  return {
    type: 'RETRIEVE_ENTRYPHOTOS',
    payload: axios.get(`https://xchau-capstone-server.herokuapp.com/photos/${entryId}`)
  }
  // return (dispatch, getState) => {
  //   dispatch({ type: 'RETRIEVE_ENTRYPHOTOS_PENDING' });
  //
  //   axios
  //     .get(`https://xchau-capstone-server.herokuapp.com/photos/${entryId}`)
  //     .then((photos) => {
  //       console.log(photos);
  //       dispatch({
  //         type: 'RETRIEVE_ENTRYPHOTOS_FULFILLED',
  //         payload: photos
  //       });
  //     })
  //     .then((err) => {
  //       dispatch({
  //         type: 'RETRIEVE_ENTRYPHOTOS_REJECTED',
  //         payload: err
  //       });
  //     });
  // };
};
