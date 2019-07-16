import Immutable from 'seamless-immutable';

const initialState = Immutable({
  scheduleHover: null,
  wordCloudHover: []
});


export default function reduce(state = initialState, action = {}) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'CHANGE_SCHEDULE_HOVER':
      return state.merge({
        scheduleHover: action.data
      });
    case 'CHANGE_WORD_CLOUD_HOVER':
      return state.merge({
        wordCloudHover: action.data
      });
    default:
      return state;
  }
}

export function getScheduleHover(state) {
  return state.scheduleHover;
}

export function getWordCloudHover(state) {
  return state.wordCloudHover;
}
