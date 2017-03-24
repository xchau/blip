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
    // ADD NEW TRIP //
    case 'ADD_TRIP_PENDING': {
      return {
        ...state,
        isFetching: true
      };
      break;
    };
    case 'ADD_TRIP_REJECTED': {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
      break;
    };
    case 'ADD_TRIP_FULFILLED': {
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        error: null,
        newTrip: action.payload.data
      };
      break;
    };
    // SET TRIP FILTER //
    case 'SET_TRIP_FILTER': {
      return {
        ...state,
        userQuery: action.payload
      };
      break;
    };
    case 'REFRESH_USER_PENDING': {
      return {
        ...state,
        isFetching: true,
        error: null,
        user: action.payload.data
      };
      break;
    };
    case 'REFRESH_USER_REJECTED': {
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        error: action.payload
      };
      break;
    };
    case 'REFRESH_USER_FULFILLED': {
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        error: null,
        user: action.payload
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
