import {applyMiddleware, createStore} from "redux";
import reducer from './reducers/todo';
import thunk from "redux-thunk";

export default createStore(reducer, applyMiddleware(thunk));
