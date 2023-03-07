import * as types from './action-types';
//一旦把用户信息保存到store之后，任何组件都可以从仓库中获取到用户信息了
let initialState = {
    currentUser:null
}
const reducer = (state=initialState,action)=>{
  switch(action.type){
      case types.SET_USER_INFO:
          return {currentUser:action.payload};
      default:
          return state;    
  }
}
export default reducer;