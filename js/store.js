import redux from 'redux';

import { combineReducers, createStore } from 'redux';
import actions from './actions/index';


// import reducers from './reducers/index';
import DeathReducer from './reducers/index';

import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';



const store = createStore(DeathReducer, applyMiddleware(thunk));


console.log(store.getState());


export default store;