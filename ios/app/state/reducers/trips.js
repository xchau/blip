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
        currentTrip: action.payload.data
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
    // TOGGLE PUBLISH //
    case 'TOGGLE_PUBLISH_PENDING': {
      return {
        ...state,
        isFetching: true
      };
      break;
    };
    case 'TOGGLE_PUBLISH_REJECTED': {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
      break;
    };
    case 'TOGGLE_PUBLISH_FULFILLED': {
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        error: null,
        currentTrip: action.payload
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
