import Immutable from 'seamless-immutable';

const initialState = Immutable({
  array: [],
  string: "",
  object: undefined,
  boolean: false
});


export default function reduce(state = initialState, action = {}) {

  switch (action.type) {
    case 'CHANGE_DATA':
      return state.merge({
        array: action.data
      });
    case 'CHANGE_ERROR':
      return state.merge({
        string: action.data
      });
    default:
      return state;
  }
}

export function getData(state) {
  return state.array;
}

export function getError(state) {
  return state.string;
}
