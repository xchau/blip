const initialState = {
  coverUri: ''
};

export default function reducer(initialState, action) {
  switch (action.type) {
    case 'SELECT_COVERPHOTO': {
      return {
        ...initialState,
        coverUri: action.payload
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
