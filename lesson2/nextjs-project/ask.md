建工程时的依赖是怎么自动生成的没看清老师
npm install next react react-dom
node离java还有一大段距离
这个appjs和cra的appjs差不多吧，都是入口组件
umi也差不多
他的问题也许是nextjs能做服务端吗。。。当然也不能
依赖不是刚刚自己安装的，麽
感情这就是个静态html服务器
有些页面不需要页头怎么办
有些页面不需要页头怎么办？根据路由来判断吗
上面的设计成一级路由，下面的左边在整个2级路由吧
感觉next.js 在开发环境的时候比较有用  生产环境不会还要单独启动一个服务吧
那如果地址来改变路由_app.js会硬刷新吗？
next 帮我们配好了webpack吗？老师
本来就是node框架，当然要另开一个服务
服务端渲染
这个有什么好处用的话
seo
可以热更吗，修改后每次重启好麻烦 可以支持热更新
服务端渲染 渲染的是前端页面 但他还需要接口服务 所以不能和后端服务等同
如何调用接口？ 接口时服务端渲染出来的吗
老师正式项目中 每个文件的样式咋写的 拎出去的吧
提取到样式文件好一些吧
用css moudle
写接口 还要在自己起个node服务吗？
可以单独起一个服务 ，也可以和next共同一个服务 
服务端渲染是只针对首页，还是每个页面都配
SSR CSR
 SSR 来说，访问的第一个页是走SSR。服务器端渲染。但是后面的路由转换就是客端渲染了
每个CSS文件都要加module吗 还是只是_app.js的css文件
是
.scss文件也可以这样吗？
可以
为啥本地编译还这么慢
内置支持scss
老师今天会有同构内容么
文件名错了
global.css文件名是定死的吗
next如何支持less
比起styled-components有啥优势
全局主题变量要自己实现一个context注入吧
这里路由是怎么对应起来的
跳转之后的内容是服务端渲染的吗
不是只

这里路由是怎么对应起来的
跳转之后的内容是服务端渲染的吗
不是的 首页是服务器端渲染，后面的都是客户端渲染的
umi能做ssr吗？当然 是可以
可以
在一个现有spa项目上，用next改造，成本有多大
zip 下载吧 git 有时候就是下载很慢
在那下载？
ssr项目怎么部署 最后讲
老师 有个next.js项目前后台想要分离 用两个端口 但是同一域名访问  加/admin 要怎么实现呢
next 是不是不适合 做 大型 web 项目。
每个页面都可以是SSR
router  走的是 csr   但href 能做 ssr？
能把每个页面都做成ssr吗
服务端渲染有什么好处
next 集成 webpack 怎么特殊定制
现在都不使用InitProps了吧。
都使用getServerSideProps了
根据路径自动映射目录么？
getInitailProps是react里面的吗？next里的
注释是用的那个插件了
可以写成class 组件吗 用生命周期调用
那如果想在其他文件上写props呢？
getInitalProps  获取数据时如果报错没有 catch 会怎么样？整个应用会 crash 吗；
老师先充电
都使用getServerSideProps了、
如果路由上有很多变量，文件名怎么写
如果要试下类似/user/:id/detail这种该怎么建目录
还有这种，/user/:id/detail/:type/:xxx
 ssr 是拼接好数据返回给前端的 html 字符串，如果 getInitalProps 获取接口时比较慢，会不会白屏时间比较长？

可以写成class 组件吗 用生命周期调用吗老师
没声音的话请退出重进一下
有
  1
老师  我试了一下  next好像不支持less   得自己配一下  next的webpack配置




这一来一回倒腾的
像react中的context
只有组件 extends App 才会默认调用 static getInitProps 方法
为什么组件内的getItialProps是个今天太方法
这种写法感觉傻傻的
为什么组件内的getItialProps是个静态方法
有登录态的页面不能做ssr吧
为什么不是实例方法
可以通过类直接调用
这个getItialProps的入参是自动传入的吗
await这个名词不单单是react当中经常用前端的vue用的也挺多
layoutApp 里面有多个 需要初始化的组件呢
感觉这个静态方法有点生命周期函数的意思，为什么是静态方法，而不做成实例方法
那可以动态目录吗？
props可以拿到吗？
9.30吧？
每个页面应该都是可以SSR的。如果只有第一个页面可以。那next就失去了SEO和服务端渲染的意义了
多个参数怎么办
路由跳转有命令方式调用么？
这写法确实麻烦

子组件暴露方法 子组件再获取 在传递给子组件
james:子组件暴露方法 子组件再获取 在传递给子组件





getInitProps 方法 是不是，组件在 client 渲染时，也会调用。
getinitProps倒是客户端也走，但如果走a标签怎么能控制强制走客户端渲染呢


服务器端执行顺序
3.LayoutApp getInitialProps
5.UserList.getInitialProps
1.LayoutApp constructor
2.LayoutApp render
4.UserList render
在服务器端LayoutApp渲染好了以后会转成html字符串发给客户端或者说浏览器
另外会把LayoutApp的属性序列化，转成一个字符串发给客户端

客户端会重新反序列化这个属性对象，再传给LayoutApp创建实例
1.LayoutApp constructor
2.LayoutApp render
4.UserList render

并不是把原来删除，重新创建。而是水合hydrate
尽可能复用老节点，一般绑定事件之类的前端操作


复习一下各个类和各个组件和各个方法执行顺序是什么样子的

## 服务器端
- LayoutApp getInitialProps 获取LayoutApp初始属性
- UserList.getInitialProps 调用是页面组件的getInitialProps方法
- LayoutApp constructor 属性有了，创建LayoutApp的实例了
- LayoutApp render 调用此实例的render方法，返回React元素
- UserList render 渲染子组件
- UserLayout render渲染此子组件渲染UserLayout组件

获取一个html结构 
会把LayoutApp组件属性序列化并且把html字符串发给客户端
- 先把服务器返回的属性对象反序列化为属性对象，传递给LayoutApp constructor
- LayoutApp constructor 创建LayoutApp的实例
- LayoutApp render 客户端进行渲染LayoutApp
- UserList render 客户端进行渲染UserList
- UserLayout render 客户端进行渲染UserLayout


路由为什么是懒加载的
在哪设置的
？？？
moment大，怎么切分啊老师
1.moment是大语言包了，一般会忽略 语言包
2.现在一般可以用day.js代替moment
加载吗
很实用啊懒加载
不了
信息
中文type。。

reducer可以有初始值 ，createStore也可以传入初始值 

为什么不走子组件的constructor方法

createStore传初始值是干嘛的 reducer不是有初始值么!!!!!

服务端都已经生成html了，为啥客户端还是回打印render方法
我们的应用有时候当靠html是不够的
为啥要创两次仓库？
为了把服务器初始化好的状态发给客户端直接使用

不同客户端访问的是一个服务端地址，创建各自的仓库，客户端取服务端的仓库
客户端 进行了一些，改变 store 内数据的操作。 当页面刷新，客户端要进行 数据持久化，那服务端的 初始化数据，如何 和 客户端 持久化的数据，进行协调。


服务端的store和客户端的store是同一个吗？
子页面想拿到store的话  还是用connect就可以了吧？

url不要写全地址吗
有base
base在哪配的
自己写的axios
哦
登陆这个流程老师再捋一下
