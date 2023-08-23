import { SET_VALUE } from './actions';

const initialState = {
  value1: '',
  value2: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value1: action.payload.value1,
        value2: action.payload.value2,
      };
    default:
      return state;
  }
};

export default reducer;
