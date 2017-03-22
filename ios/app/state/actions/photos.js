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
        console.log(uri);

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
