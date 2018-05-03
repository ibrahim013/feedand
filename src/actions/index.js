import axios from 'axios';
import { LOGIN_USER } from './types';
import { SIGNUP_USER } from './types';
import { LOGOUT } from './types';


// export const signupUser = (payload) => {
//   return function() {
//     console.log(payload)
//   } 
// };

export const loginUser = (payload) => async dispatch => {
  const response  = await axios.get('/api/current_user')
  
  dispatch({ type: LOGIN_USER, payload: response })
};

export const signupUser = (payload) => async dispatch => {
  const response = await axios.get('');

  dispatch({ type: SIGNUP_USER, payload: response })
};

export const logout = () => {
  const response  = await axios.get('')
  
  dispatch({ type: LOGOUT, payload: response })
}