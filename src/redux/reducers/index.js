import { combineReducers } from 'redux';
import bookReducer from './bookReducer'; // Import your bookReducer

const rootReducer = combineReducers({
  book: bookReducer // Add your reducers here
});

export default rootReducer;
