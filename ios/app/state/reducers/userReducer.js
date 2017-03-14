const initialState = {
  fetching: false,
  fetched: false,
  userInfo: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER_PENDING': {
      return {
        ...state,
        fetching: true
      };
      break;
    };
    case 'FETCH_USER_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
      break;
    };
    case 'FETCH_USER_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        userInfo: action.payload.data
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
