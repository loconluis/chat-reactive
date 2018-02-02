// constants
import * as types from '../constants/ActionTypes';

// users reducer
export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_USER:
      return state.concat([{
        name: action.name,
        id: action.id,
      }]);
    case types.USER_LIST:
      return action.users;
    default:
      return state;
  }
}