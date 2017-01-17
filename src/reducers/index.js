import { combineReducers } from 'redux';
// Define or import reducer functions to manage your redux application.
//export default () => {};

var initialIndexState = {};
const index = (state = initialIndexState, action) => { /* case(action.type) { ... default: */ return state; /* } */ }

import play from './play';

const rootReducer = combineReducers({
    index,
    play
});
module.exports = rootReducer;