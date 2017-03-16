import { combineReducers } from 'redux';
import userData from './auth';
import tripsData from './trips';


export default combineReducers({
  userData,
  tripsData
});
