import _ from 'lodash';
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM
} from '../actions/types';

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      //maps array containd in action.payload into an object using id field as key
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      //use lodash function to remove the id on action.payload from state
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default streamReducer;
