import { combineReducers } from 'redux';
import title from './titleReducer';
import markdown from './documentReducer';

export default combineReducers({
  title,
  markdown
});
