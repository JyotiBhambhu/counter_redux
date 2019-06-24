import {combineReducers} from "redux";
import CounterReducers from './CounterReducers';
import HelloReducers from './HelloReducers';

export default combineReducers({
   counter: CounterReducers,
   hello: HelloReducers,
});