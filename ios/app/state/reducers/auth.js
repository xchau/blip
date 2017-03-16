export default function reducer(state = {}, action) {
  switch (action.type) {
    // REGISTRATION //
    case 'REGISTER_USER_PENDING': {
      return {
        ...state,
        isFetching: true
      };
      break;
    };
    case 'REGISTER_USER_REJECTED': {
      return {
        ...state,
        isFetching: false,
        isAuthorized: false,
        error: action.payload
      };
      break;
    };
    case 'REGISTER_USER_FULFILLED': {
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        isAuthorized: true,
        error: null,
        user: action.payload.data
      };
      break;
    };
    // AUTHORIZATION //
    case 'AUTHORIZE_USER_PENDING': {
      return {
        ...state,
        isFetching: true
      };
      break;
    };
    case 'AUTHORIZE_USER_REJECTED': {
      return {
        ...state,
        isFetching: false,
        isAuthorized: false,
        error: action.payload
      };
      break;
    };
    case 'AUTHORIZE_USER_FULFILLED': {
      console.log(action.payload.data);
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        isAuthorized: action.payload.data,
        error: null
      };
      break;
    };
    // AUTHENTICATION //
    case 'AUTHENTICATE_USER_PENDING': {
      return {
        ...state,
        isFetching: true
      };
      break;
    };
    case 'AUTHENTICATE_USER_REJECTED': {
      return {
        ...state,
        isFetching: false,
        isAuthorized: false,
        error: action.payload
      };
      break;
    };
    case 'AUTHENTICATE_USER_FULFILLED': {
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        isAuthorized: true,
        user: action.payload.data,
        error: null
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
