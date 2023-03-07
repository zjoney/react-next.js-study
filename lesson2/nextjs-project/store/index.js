import {createStore} from 'redux';

import reducer from './reducer';
//默认导出的不是一个仓库，而是一个接收了初始状态，并返回仓库的方法
export default function(initialState){
    return createStore(reducer,initialState);
}