

## Vue 案例讲解   (PPT)  

## Vue 笔记文档   http://note.youdao.com/noteshare?id=01e03a0a39a6c88b03d7da8f42d5013c



## 0416
Vue  简单的指令   (v-if v-on v-for v-model v-bind)
Vue  2个特点  (数据驱动 响应式)    (组件系统  组件化)
Vue  模板语法  双大括号语法   {{ }}

## 0417
Vue  实例的生命周期   (4个阶段  8个常用的生命周期钩子函数)
实例创建  beforeCreate   created
实例载入  beforeMount    mounted
实例更新  beforeUpdate   updated
实例销毁  beforeDestroy  destroyed 

Vue  模板语法 数据绑定  (v-text  v-html  v-once)

Vue  计算属性  &&  侦听属性  (watch)
计算属性  处理复杂的逻辑  data 处理简单的逻辑  
计算属性  必须依赖某个具体数值   而且有缓存  只有他依赖的值发生改变才会重新计算求值  
拆分写法  get  set  函数 
get 用来 取值
set 用来 监听计算属性  主动改变 

watch  用来监听某个数值的改变 从而触发对应的函数  执行相关的逻辑 


虚拟DOM  把存储在内存中用来记录 DOM节点数据信息(标签 属性 样式 内容)的 这些数据


## 0420 
class&&style 绑定  
条件渲染   v-if 
列表渲染   v-for 
事件处理   v-on (过滤器)


## 0421    (错能生巧) 
动画    
过滤器 
表单处理   v-model 
手写购物车    




## 0422    (勤学多练)
自定义指令    (项目使用指令  v-drag 拖拽指令   v-move 动画指令 给元素绑定动画   )

vue 请求 Node 接口 
ajax
fetch
axios  99%
vue-resource 已经被废弃  

作业 v-drag 指令 

## 0423    (多学多练)

组件  component
1.0   注册组件
2.0   组件通信 
3.0   
4.0 
5.0   动态切换组件

作业  完成 父组件控制子组件p标签的显示隐藏



## 0424  (自信学习)
组件  
父访问子   1.props  2. refs 
子访问父   1. 自定义事件  2. $parent   3. props传递函数 
兄弟组件通信  1. 新建空的Vue 实例对象 bus         2. vuex   
6. 组件动态切换
7. 组件分发 slot  

路由  
1. 路由初步  (vue路由 路由 作用 )



2. 码云
仓库地址  https://gitee.com/zuozhaoxi/nz1903.git
用户名   zuozhaoxi
密码   Zkl868891
git clone https://gitee.com/zuozhaoxi/nz1903.git  
git pull  


# 0426 
1. 路由    (基本路由配置  +  动态路由  +   路由导航   + 嵌套路由  )




# 0427   
1.  移动端的手势事件  +  插件Swiper 使用 

2.  移动端适配  (px  vw  vh  em  rem)   (flex  弹性盒  流式布局 100%   媒体查询 )

3.  脚手架 开发项目  (启动小项目   项目立项)  
a. cnpm i @vue/cli -g
b. vue --version 
c. vue create vue-app  安装vue 项目   (vue ui 打开可视化的创建 vue 的页面 )
d. cd vue-app
e. npm run serve /  yarn serve 


# 0427 晚上  
1. 购买 阿里云服务器  
购买地址
https://www.aliyun.com/minisite/goods?spm=5176.11533457.1089570.9.390877e3di4R9j&userCode=saht5k94   

https://free.aliyun.com/?spm=5176.14145661.J_3598540520.ace-channel-latest-activity-card.19eb1875EO09Ez&aly_as=DIqBrWSZ-

ECS  云服务器 
轻量应用服务器  可视化面板

2. 了解服务器 
首页  --  控制台    -- 云服务器ECS(侧边栏)   --   找到你刚刚购买的服务器 
云服务器的信息 
公网IP   182.92.60.8      接口地址  页面地址  全部通过公网Ip 访问  
内网IP   172.17.219.180    

登录你们的阿里云服务器    
用户名  root 
密码    Nz1234567jun

配置安全组   (开发服务器所有端口)
网络与安全  -   安全组   -  配置规则    -  添加安全组规则   

链接阿里云服务器  
a.  远程链接     输入密码 和  用户名  
b.  git         ssh root@182.92.60.8   yes  输入密码 (看不到)
c.  xshell       

链接：https://pan.baidu.com/s/1lji0FAbECLlpJeSdjLfVuA 
提取码：1xbm

安装 node + npm  +  mongodb + nginx 
安装 node    中间有一步 选择 Y  
sudo yum install nodejs   
node -v   
npm -v



2. node 项目挂载线上   

a. 支付宝 登录一下  阿里云
b. 几个人合伙  (不要超过4个人 )  



# 0428  (高效学习)
1. 脚手架  (目录结构)   (webpack 构建步骤 )
2. 单文件组件
3. ES6 模块化 
4. 脚手架 Vue 路由配置 

5. 组件的通信复习   
6. 移动端适配 
a. 为什么要适配 
手机端的设备宽度布局都不一样   做到每个手机设备 按照比例还原设计稿 (750px)

vw    每1vw 占设备宽度 1/100 
vh    每1vh 占设备高度 1/100 
em    当前元素的父元素的字体大小
rem   页面根节点(html) 的字体大小 
px    国际通用的长度尺寸单位    
pt    物理像素 (跟设备硬件有关 )   

b.如何适配    (100% 布局   flex 弹性盒布局   rem适配 )

rem    (等比缩放)
有一个设计稿宽度 750px 假设当前页面的 rem = 100px; 

设计稿宽 div宽度  设备宽   假设rem    书写rem 
750      200px     750    100px     200/100 = 2rem 
750      ?2*50     375    X=50      2rem  
750      ?2*55.2   414    X=55.2    2rem 

rem 适配  根据手机宽度和设计稿的宽度 比  求出当前的设备的rem
然后 再根据当前 的 rem 自动换成 真实 的 px 单位 

750px : 375px =  100px: X =>  50px  
750px : 414px =  100px: X =>  55.2px 
X(当前设备的rem)  =  100px*设备宽(100vw) / 750px (设计高宽度 )

网易适配
设计稿宽度 是 750px 假定当前设计稿的 rem = 100px 
然后根据 设计稿的宽度 比上  手机设备的宽度 等于当前 设计高的rem 比上 当前设备的 rem  
通过等比换算 求出 当前设备的rem 
屏幕宽度 : 设计稿宽度 =  设备的rem :  设计稿假设的rem(100)


淘宝适配    (淘宝前端小组 推出的方案  UI设计稿宽度 750px  )
1.  依赖插件 lib-flexible (改造 meta 根据设备像素比dpr 缩放 设备的 viewport) 
物理像素   当前设备能显示的最小的物理部件   pt  
设备独立像素  跟设备无关  就是  px  
设备像素比(device pixel ratio) dpr  window.devicePixelRatio
设备像素比 ＝ 物理像素 / 设备独立像素(px) (设备像素密度比)
dpr = 2 表示 1px 里面有2个物理像素   375px  = 750pt 
dpr = 3 表示 1px 里面有3个物理像素   375px  = 1125pt 
根据 dpr 来放大 viewport (对应的是手机的物理像素宽度)
dpr = 2  1px = 2pt initial-scale = 0.5 viewport 放大 2 倍 
dpr = 3  1px = 3pt initial-scale = 1/3 viewport 放大 3 倍

2.  把设备的宽度100vw 分成 10等份 , 假设当前设备的rem 等于 其中的一份 rem = 10vw      (rem 为当前设备宽度 1/10  ) 

cnpm i lib-flexible -S  


插件 自动把 px 转为 rem 
cnpm i postcss-px2rem postcss-px2rem-exclude -D

7. 开始项目讲解   (准备你要开始什么项目)


# 0429  

1. git  
git clone https://gitee.com/zuozhaoxi/nz1903.git   (克隆仓库)
git add ./     (提交到本地暂存区) 
git commit -m "zzz"   (提交到本地仓库)
git status      (查看文件状态)  
git pull   (拉取更新的代码 )
git push origin master   (推送本地仓库代码到远程仓库)


代码冲突  (修改同一个文件)
a. 把冲突回退还原 
b. 重新提交 push   


2. 项目启动  
配置项目路由
引入 UI 库  (vant element )
vant        https://youzan.github.io/vant/#/zh-CN/  (app)
element     https://element.eleme.cn/#/zh-CN    (PC)
iview       http://v1.iviewui.com/  
vux         https://vux.li/

安装 UI库
1. cnpm i vant -S
2. 引入 
import Vant from "vant"
import 'vant/lib/index.css';  // 一次性导入所有的样式 
Vue.use(Vant)
全局引入  (一次性把所有的 样式全部引入 打包文件过大 )


按需加载  (样式按需加载)
cnpm i babel-plugin-import -D 
修改  babel.config.js 
plugins: [
    ['import', {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
    }, 'vant']
]   
import Vue from "vue";
import {Button} from "vant"
Vue.use(Button);


避免 vant 组件在 淘宝适配 里面看起来较小  remUnit = 37.5
其他的 样式的宽高 量出的实际宽度 / 2  再去除以 系数 37.5 
设计稿宽度是  750  所有的宽高  除以 2
设计稿宽 是   375   不用变化 不用除以2 


3. 矢量图标
https://www.iconfont.cn/



# 0430 (假期快乐)
1. 封装组件  Head Login Search  
2. 封装 axios  
cnpm  i axios -S
3. Swiper 
cnpm i swiper -S
4. 登录+注册 + 上传头像 

5. 电商逻辑  

6. vuex 

7. 自己独立开发项目


# 0506  (项目准备)

1. 登录注册

2. 代理   (Session + token)
session 会话 记录一段时间 用户 操作 记录信息 (用户名 和 密码 )
session 必须 反向代理 同一个 主机(hostname) 端口(port)

token 令牌 (加密后的身份信息 编码   用来判断用户是否登录  或者登录是否有效  )
token 用户登录 成功 后台 返回 的 加密 字段 ( token 存在 session && cookies )
前端 得到 token 会把这个 token (存储到sessionStorage ) 配置 请求头 里面 request.headers.token = token

前端 每次 发送 ajax headers 携带 token 数据

后端 得到 请求 得到 req.headers.token  跟  req.session.token 进行对比  

关于 token 逻辑操作

a. 请求头 没有 token   (没有登录 ) 
b. 前端 发送 的请求头的 token 与 存储 在后台 的token 不一样  (token 被恶意修改)
c. 请求头 有 token 后端 存储 token 已经消失   (token 超时)


# 0507 (自信学习)
1. 混入 mixin
混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项  
3. 上传头像    
https://github.com/expressjs/multer

cnpm i multer -S

bug 点 
a. public 重置 为 /  使用replace
b. 或者使用  代理 把 public 重置为 空 记住 加 / 
c. 获取上传后的图像地址  (1. 要么直接在用户信息里面直接获取 2. 要么存储在 localStorage 写三层判断  先本地localStorage 本地没有 看数据库 数据库没有就默认头像Pic)

4. 电影列表  

5. 电商  

#0508  (为项目而战斗)
0. 进入电影详情
a. 获取电影id
b. 用路由的params 传递过去
c. 接受参数id 请求电影详情数据
d. 渲染数据 


1. vuex  (全局状态管理)
a. 实现全局组件的数据管理 (实现数据交互和通信  组件通信)
b. 实现组件的异步数据缓存  (localStorage)

c. 它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化  (把所有的数据存储到一个大的对象 State  数据响应式来监听数据改变 )

d. Vuex 和单纯的全局对象有以下两点不同
1. Vuex 的状态存储是响应式的
2. 你不能直接改变 store 中的状态 (state)  store.commit 提交mutation

e. vuex 原理 
0. 组件 通过 store.state 去获取 store 里面的状态 (数据)
1. 组件 通过 函数事件 去 派发 store.dispatch   action (异步才需要写 同步省略)
2. 在 action 里面 通过 store 去 提交 commit mutation (管理 type )
3. 进入 mutation 这里面 匹配成功对应 的 mutationtype 就会 mutate (改变) state (组件的状态)
4. vue 响应式数据系统 state 改变 会自动去 render 重新渲染页面


(辅助函数)
mapState  映射 state
mapActions  映射 action
mapMutations  映射 mutations
mapGetters   映射 store getter


(modules)




(v-model 接合 vuex)

# 0509 (寻找项目)
https://m.benlai.com/app/    (本来生活)
https://m.xiachufang.com/    (下厨房  小项目)
http://m.qdaily.com/mobile/homes.html   好奇心日报 App  
https://m.thepaper.cn/  



管理系统 (PC element UI);
考勤   
https://www.apicloud.com/cases (去里面找可用的app)

2. nuxt  (vue+express+node)







