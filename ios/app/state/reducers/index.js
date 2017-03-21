import { combineReducers } from 'redux';
import userData from './auth';
import tripsData from './trips';
import entriesData from './entries';
import imagesData from './photos';

export default combineReducers({
  userData,
  tripsData,
  entriesData,
  imagesData
});
