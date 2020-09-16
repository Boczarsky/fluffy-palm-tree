import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import movieDetails from './movieDetails/reducer';
import searching from './searching/reducer';

const rootReducer = combineReducers({
  movieDetails,
  searching
});

export default createStore(rootReducer, applyMiddleware(thunk));
