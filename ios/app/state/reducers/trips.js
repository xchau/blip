export default function reducer(state = {}, action) {
  switch (action.type) {
    // GET ALL TRIPS //
    case 'RETRIEVE_TRIPS_PENDING': {
      return {
        ...state,
        isFetching: true
      };
      break;
    };
    case 'RETRIEVE_TRIPS_REJECTED': {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
      break;
    };
    case 'RETRIEVE_TRIPS_FULFILLED': {
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        error: null,
        trips: action.payload.data
      };
      break;
    };
    default: {
      return {
        ...state
      };
    };
  };
};
