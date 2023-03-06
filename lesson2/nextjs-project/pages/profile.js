import React from 'react';
import router from 'next/router';
import axios from '../utils/axios';
//登录才能访问，不登录不能访问
function Profile(props) {
    return (
        <div>
            <p>当前用户{props.currentUser.name}</p>
            <button onClick={() => router.back()}>返回</button>
        </div>
    )
}

Profile.getInitialProps = async (ctx) => {
    let options = { url: '/api/currentUser' };
    //如果客户端带着cookie来了
    if (ctx.req && ctx.req.headers.cookie) {
        options.headers = options.headers || {};
        //把这个cookie透传给API服务器
        options.headers.cookie = ctx.req.headers.cookie;
    }
    let response = await axios(options).then(res => res.data);
    //如果成功了，那表示当前是登录用户
    if (response.success) {//把登录用户信息放到仓库中去
        return { currentUser: response.data };
    } else {
        if (ctx.req) {//如果在服务器端运行码
            ctx.res.writeHead(303, { Location: '/login' });
        } else {//如果是在客户端运行login登录
            router.push('/login');
        }
        return {};
    }
}



export default Profile