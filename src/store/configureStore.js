import { createStore, combineReducers } from 'redux';

import counterReducer from '../reducers/counterReducer';

const Reducers = combineReducers({
    counterReducer
})

//createStore()使用的地方 裡面擺入一個唯一的Reducer 如果有很多Reducer就把他們combinReducer在一起
export default createStore(Reducers);
