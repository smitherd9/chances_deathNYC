import redux from 'redux';
import { combineReducers, createStore } from 'redux';
import actions from './actions/index';
import DeathReducer from './reducers/index';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';



const store = createStore(DeathReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));


console.log(store.getState());


export default store;