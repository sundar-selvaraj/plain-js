import { createStore, combineReducers } from 'redux';

import editor from '../services/editor/reducer';
import initialState from './initialState';

const appReducer = combineReducers({
  editor,
});

const store = createStore(appReducer, initialState);

export default store;