import { LOGIN_USER } from '../actions/types';
import { SIGNUP_USER } from '../actions/types';
import { LOGOUT } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload || false;
    case SIGNUP_USER:
      return action.payload || false;
    case LOGOUT:
      return {};
    default:
      return state;
  }
}