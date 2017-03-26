const initialState = {
  coverPhoto: ''
};

export default function reducer(initialState, action) {
  switch (action.type) {
    case 'SELECT_COVERPHOTO': {
      return {
        ...initialState,
        cpInfo: action.payload
      };
      break;
    };
    case 'UPLOAD_COVERPHOTO_PENDING': {
      return {
        ...initialState,
        isFetching: true,
      };
      break;
    };
    case 'UPLOAD_COVERPHOTO_REJECTED': {
      return {
        ...initialState,
        isFetching: false,
        isFetched: true,
        error: action.payload
      };
      break;
    };
    case 'UPLOAD_COVERPHOTO_FULFILLED': {
      return {
        ...initialState,
        isFetching: false,
        isFetched: true,
        error: null,
        coverUri: action.payload
      };
      break;
    };
    case 'RETRIEVE_ENTRYPHOTOS_PENDING': {
      return {
        ...initialState,
        isFetching: true,
      };
      break;
    };
    case 'RETRIEVE_ENTRYPHOTOS_REJECTED': {
      return {
        ...initialState,
        isFetching: false,
        isFetched: true,
        error: action.payload
      };
      break;
    };
    case 'RETRIEVE_ENTRYPHOTOS_FULFILLED': {
      return {
        ...initialState,
        isFetching: false,
        isFetched: true,
        error: null,
        entryPhotos: action.payload.data
      };
      break;
    };
    default: {
      return {
        ...initialState
      };
    };
  };
};
