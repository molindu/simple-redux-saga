export const SET_VALUE = 'SET_VALUE';

export const setValue = (value1, value2) => ({
  type: SET_VALUE,
  payload: { value1, value2 },
});
