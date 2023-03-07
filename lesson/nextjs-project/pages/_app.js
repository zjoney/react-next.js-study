import App,{Container} from 'next/app';
import Link from 'next/link';
import _appStyles from './_app.module.css';
import '../styles/global.css';//全局样式的话只能在_app.js文件里引入
class LayoutApp extends App{
    constructor(props){
        super(props);
        console.log('1.LayoutApp constructor');
    }
    //next默认会调用LayoutApp.getInitialProps方法
   
    render(){
        console.log('2.LayoutApp render');
        let {Component,pageProps}=this.props;//页面组件 user.js 
        return (
            <div>
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
                    <ul>
                        <li><Link href="/">首页</Link></li>
                        <li><Link href="/user/list">用户管理</Link></li>
                        <li><Link href="/profile">个人中心</Link></li>
                    </ul>
                </header>
                <Component {...pageProps}/>
                <footer style={{textAlign:'center'}}>前端架构</footer>
            </div>
        )
    }
}
//这个方法就是组件的静态方法，它是类的属性，组件的属性
//在客户端访问第一个页的时候，不会再走getInitialProps了？？？？？
LayoutApp.getInitialProps =  async({Component,ctx})=>{
    console.log('3.LayoutApp getInitialProps');
    let pageProps = {};//默认的页面属性对象
    if(Component.getInitialProps){
        pageProps = await Component.getInitialProps(ctx);
    }
    return {pageProps};//返回的这个对象将会成为当前组件的属性对象
}
export default LayoutApp;