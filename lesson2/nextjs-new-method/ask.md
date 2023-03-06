客户端还会走getInitialProps方法？会的
因为每个页面的属性不一样。
路由跳转的时候会走的
初始化不走
终于可以发消息了
spa ctx.req 服务器ctx.req请求对象express request
ctx 是哪来的？ 单纯的SPA路由跳转时有ctx入参吗？
还是说getInitalProps方法只是next.js特有的？是的
yarn add
next dev 和 next start 不是一个么



1、 静态生成 会在编译阶段，生成静态的HTML页面
2. 服务端渲染了  SSR 生个请求单独生成一个动态页面