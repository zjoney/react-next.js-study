import axios from 'axios';
//跨域请求的时候要携带cookie
axios.defaults.withCredentials = true;
//axios同时支持客户端和服务器 ，内部使用了一适配器模式
const instance = axios.create({
    baseURL:'http://localhost:4000'// API服务器的端口
});
export default instance;