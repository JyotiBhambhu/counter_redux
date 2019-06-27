import reduxThunk from 'redux-thunk'
import {applyMiddleware, createStore} from "redux";
import reducers from '../reducers'


let middleware: any = [reduxThunk];
// if(__DEV__){
//     const loggerMiddleware = createLogger();
//     middleware = [...middleware, loggerMiddleware];
// }
const store = createStore(reducers, applyMiddleware(...middleware));


export default store;

