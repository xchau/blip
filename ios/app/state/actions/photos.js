export function selectCoverPhoto(uri) {
  console.log(uri);
  return {
    type: 'SELECT_COVERPHOTO',
    payload: uri
  };
};
