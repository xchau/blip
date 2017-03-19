import { combineReducers } from 'redux';
import userData from './auth';
import tripsData from './trips';
import entriesData from './entries';

export default combineReducers({
  userData,
  tripsData,
  entriesData
});
