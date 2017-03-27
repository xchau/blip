export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'RETRIEVE_ENTRIES_PENDING': {
      return {
        ...state,
        isFetching: true
      };
      break;
    };
    case 'RETRIEVE_ENTRIES_REJECTED': {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
      break;
    };
    case 'RETRIEVE_ENTRIES_FULFILLED': {
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        error: null,
        entries: action.payload.data
      };
      break;
    };
    case 'ADD_ENTRY_PENDING': {
      return {
        ...state,
        isFetching: true
      };
      break;
    };
    case 'ADD_ENTRY_REJECTED': {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
      break;
    };
    case 'ADD_ENTRY_FULFILLED': {
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        error: null,
        newEntry: action.payload.data
      };
      break;
    };
    case 'UPDATE_ENTRY_PENDING': {
      return {
        ...state,
        isFetching: true
      };
      break;
    };
    case 'UPDATE_ENTRY_REJECTED': {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
      break;
    };
    case 'UPDATE_ENTRY_FULFILLED': {
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        error: null,
        updatedEntry: action.payload.data
      };
      break;
    };
    case 'DELETE_ENTRY_PENDING': {
      return {
        ...state,
        isFetching: true
      };
      break;
    };
    case 'DELETE_ENTRY_REJECTED': {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
      break;
    };
    case 'DELETE_ENTRY_FULFILLED': {
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        error: null,
        deletedEntry: action.payload.data
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
