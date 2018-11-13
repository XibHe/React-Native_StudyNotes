### 记录学习 React-Native 的点滴

### 今天学了啥
#### 2018.10.31
React Native 布局 --- FlexBox

父视图属性(容器属性)：

  * flexDirection enum('row', 'column','row-reverse','column-reverse')
  * flexWrap enum('wrap', 'nowrap')
  * justifyContent enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around')
  * alignItems enum('flex-start', 'flex-end', 'center', 'stretch')

**justifyContent** 属性定义了浏览器如何分配顺着父容器主轴的弹性（flex）元素之间及其周围的空间，默认为flex-start。

**space-between** 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐。

**space-around** 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。

**alignItems** 属性以与justify-content相同的方式在侧轴方向上将当前行上的弹性元素对齐，默认为stretch。

**alignSelf** 子视图属性，以属性定义了flex容器内被选中项目的对齐方式。

#### 2018.11.01
1. Redux  
http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
2. React Navigation  (路由)
https://www.reactnavigation.org.cn/docs/guide-basic-example
3. 关于使用React Native开发app 遇到React Native version mismatch问题解决方式
https://segmentfault.com/a/1190000014886598?utm_source=tag-newest
注意：此方案是以Android的解决方案。iOS 遇到这个问题，该方案不起作用。最终解决方案是由于8081端口被占用导致。MAC解决端口占用。
https://blog.csdn.net/Joker_Fei/article/details/73743937
在终端中查找占用端口的进程并杀死，然后重启服务。
终端输入：lsof -i tcp:port 将port换成被占用的端口(如：8086、9998)
找到进程的PID,使用kill命令：kill PID（进程的PID，如2044），杀死对应的进程。
#### 2018.11.02

1. 在 iOS 上使用 http 链接的图片地址可能不会显示，参见[这篇](https://segmentfault.com/a/1190000002933776)说明修改。
在此基础上，继续添加，Exception Domains --- locallhost --- NSExceptionAllowsInsecureHTTPLoads = YES 后加载出图片。

2. FlatList 和 SectionList的区别 

#### 2018.11.05

JS 进阶 --- [基本类型 引用类型 简单赋值 对象引用](https://segmentfault.com/a/1190000002789651)

#### 2018.11.12 

[React Native 的生命周期](http://note.youdao.com/noteshare?id=00e5e2e3040218d6d715eb7910413382)

#### 2018.11.13 

1. 样式

flexbox 水平三栏布局
外联样式： style = {styles.container}

内联样式：style = {{flex: 1,borderWidth: 1,borderColor:'red'}}

多个样式：style = {[styles.container,styles.flex,{flex: 1,borderWidth: 1}]}

2. 组件的导出和引入

```javascript
module.exports = Header;
const Header = require('./header');
render(){
    return (
       <Header></Header>
);}
```

3. Navigator组件初探

**Navigator** 和 **NavigatorIOS** 都可以用来管理应用中“场景”的导航（也可以称作屏幕）。导航器建立了一个路由栈，用来弹出，推入或者替换路由状态。它们和html5中的history API很类似。主要的区别在于 NavigatorIOS 使用了iOS中的UINavigationController 类，而Navigator则完全用js重写了一个类似功能的React 组件。因此 Navigator 可以兼容 iOS 和 Android，而 NavigatorIOS只能用于 iOS。

**NavigatorIOS**
轻量、受限的API设置，使其相对 Navigator 来说不太方便定制。
由开源社区主导开发 —— React Native 的官方团队并不在自己的应用中使用。
对于大多数正式的 App 开发，我们建议使用Navigator —— 使用 NavigatorIOS 实现复杂的需求很容易碰到麻烦。

导航器通过路由对象来分辨不同的场景。利用 renderScene 方法，导航栏可以根据指定的路由来渲染场景。
可以通过 configureScene 属性获取指定路由对象的配置信息，从而改变场景的动画或者手势。

### 今天练了啥
#### 2018.11.02

[电影列表](https://github.com/XibHe/React-Native_StudyNotes/tree/master/React-Native%20练习/MoviesList)

#### 2018.11.13

[盒子模型](https://github.com/XibHe/React-Native_StudyNotes/tree/master/React-Native%20练习/FlexBox)

[view布局](https://github.com/XibHe/React-Native_StudyNotes/tree/master/React-Native%20练习/ViewLayout)

