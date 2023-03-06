import App,{Container} from 'next/app';
import Link from 'next/link';
import _appStyles from './_app.module.css';
import {Provider} from 'react-redux';
import '../styles/global.css';//全局样式的话只能在_app.js文件里引入
import createStore from '../store';
import  * as types from '../store/action-types';
import axios from '../utils/axios';
import router from 'next/router';
//获取当前的仓库store

export function getStore(initialState){
    //1. 考虑服务器端的时候,不用想了，肯定返回一个新的store
    if(typeof window === 'undefined'){
        return createStore(initialState)
    }else{
        //在客户端会使用服务得到的状态，进行反序化得到状态，生成客户端的仓库
        if(!window._REDUX_STORE_){
            window._REDUX_STORE_=createStore(initialState);
        }
        //LayoutApp构造函数在客户端只走一次
        //在客户端进行路径切换的时候，客户端的仓库需要可以共享 ，不同页面或说路径的状态需要共享 
        //window._REDUX_STORE_ =store;
        return window._REDUX_STORE_;
    }
  
}

class LayoutApp extends App{
    constructor(props){
        super(props);
        console.log('LayoutApp constructor',props);
        this.store = getStore(props.initialState);//创建一个新仓库，
        this.state = {loading:false};
    }
    //next默认会调用LayoutApp.getInitialProps方法
    componentDidMount(){
        this.routeChangeStart = ()=>{
            this.setState({loading:true});
        }
        this.routeChangeComplete = ()=>{
            this.setState({loading:false});
        }
        router.events.on('routeChangeStart',this.routeChangeStart);
        router.events.on('routeChangeComplete',this.routeChangeComplete);
    }
    componentWillUnmount(){
        router.events.off('routeChangeStart',this.routeChangeStart);
        router.events.off('routeChangeComplete',this.routeChangeComplete);
    }
    render(){
        console.log('LayoutApp render');
        let {Component,pageProps}=this.props;//页面组件 user.js 
        let state = this.store.getState();
        return (
            <Provider store={this.store}>
                <style jsx>
                {
                    `
                      li{
                          display:inline-block;
                          margin-left:10px;
                          line-height:31px;
                      }
                    `
                }
                </style>
                <header>
                    <img className={_appStyles.logo} src="/images/jglogo.png"/>
                    <ul >
                        <li><Link href="/">首页</Link></li>
                        <li><Link href="/user/list">用户管理</Link></li>
                        <li><Link href="/profile">个人中心</Link></li>
                        <li>
                            {
state.currentUser?<span>{state.currentUser.name}</span>:<Link href="/login">登录</Link>
                            }
                        </li>
                    </ul>
                </header>
                {
                    this.state.loading?<div>加载中....</div>:<Component {...pageProps}/>
                }
                <footer style={{textAlign:'center'}}>珠峰架构</footer>
            </Provider>
        )
    }
}
//这个方法就是组件的静态方法，它是类的属性，组件的属性
//在客户端访问第一个页的时候，不会再走getInitialProps了
LayoutApp.getInitialProps =  async({Component,ctx})=>{
    console.log('LayoutApp getInitialProps');
    let store = getStore();//马上会创建一个新的仓库，没有传参数，所以会用reducer默认状态
    if(typeof window === 'undefined'){//说明此方法是在服务器做的
        let options = {url:'/api/currentUser'};
        //如果客户端带着cookie来了
        if(ctx.req && ctx.req.headers.cookie){
            options.headers=options.headers||{};
            //把这个cookie透传给API服务器
            options.headers.cookie = ctx.req.headers.cookie;
        }
        let response = await axios(options).then(res=>res.data);
        //如果成功了，那表示当前是登录用户
        if(response.success){//把登录用户信息放到仓库中去
            store.dispatch({type:types.SET_USER_INFO,payload:response.data});
        }
    }
    let props = {};//用来创建当前的属性构建时传入的属性对象
    let pageProps = {};//默认的页面属性对象
    if(Component.getInitialProps){
        pageProps = await Component.getInitialProps(ctx);
    }
    props.pageProps=pageProps;
    //这个东西肯定就是默认状态了
    if(typeof window === 'undefined'){
        props.initialState=store.getState();
    }
    return  props;//返回的这个对象将会成为当前组件的属性对象
}
export default LayoutApp;