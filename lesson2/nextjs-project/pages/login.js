import React from 'react';
import axios from '../utils/axios';
import router from 'next/router';
import * as types from '../store/action-types';
import {connect} from 'react-redux';
function Login(props){
    let nameRef = React.useRef();
    let passwordRef = React.useRef();
    const handleSubmit = async  (event)=>{
        event.preventDefault();//阻止默认事件，不要让页面刷新
        let name = nameRef.current.value;
        let password = passwordRef.current.value;
        let user = {name,password};
        let response = await axios.post('/api/login',user).then(res=>res.data);
        let loginUser = response.data;
        //保存登录状态
        props.dispatch({type:types.SET_USER_INFO,payload:loginUser});
        if(response.success){
          router.push('/');
        }else{
          alert('登录失败');
        }
    }
    return (
      <form onSubmit={handleSubmit}>
        用户名:<input ref={nameRef}/>
        密码:<input ref={passwordRef}/>
        <button type="submit">登录</button>
      </form>
    )
}
export default connect(state=>state)(Login);
/**
 * 1.如何提交表单 
 * 2. 登录后如何传递cookie 客户cookie=>Next.js服务器=>API接口服务
 * 3. 登录后如何保存登录状态，如何保存登录后用户信息，以后在页面切换的不会丢失 集成redux
 */