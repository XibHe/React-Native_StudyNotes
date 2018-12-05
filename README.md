## 记录学习 React-Native 的点滴

### 学习
#### 2018.10.29
1. FlexBox 布局

在组件的style中指定flexDirection可以决定布局的主轴。子元素是应该沿着水平轴(row)方向排列，还是沿着竖直轴(column)方向排列呢？默认值是竖直轴(column)方向。

2. ES2015 （也叫作 ES6)

http://es6.ruanyifeng.com/

3. FlatList或是SectionList

FlatList更适于长列表数据，且元素个数可以增删。和ScrollView不同的是，FlatList并不立即渲染所有元素，而是优先渲染屏幕上可见的元素。

[MoviesList](https://github.com/XibHe/React-Native_StudyNotes/tree/master/React-Native练习/MoviesList)

4. 注意：使用 Chrome 调试目前无法观测到 React Native 中的网络请求，你可以使用第三方的react-native-debugger来进行观测。

5. Watchman是由 Facebook 提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（packager 可以快速捕捉文件的变化从而实现实时刷新）。译注：此工具官方虽然是推荐安装，但在实践中，我们认为此工具是必须安装，否则可能无法正常开发。

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

#### 2018.11.15

1. **VS Code** 中引入代码规范的问题
在 **.eslintrc** 文件中,

```javascript
{
    "extends": "eslint-config-mcrn",
    "globals": {
      "__DEV__": false,
      "fetch": false,
      "navigator": false,
      "store": false,
      "mconnect": false,
      "screen": false
    }
  }
```

**package.json** 中，

```javascript
  "devDependencies": {
    "babel-jest": "23.6.0",
    "jest": "23.6.0",
    "metro-react-native-babel-preset": "0.48.3",
    "react-test-renderer": "16.6.0-alpha.8af6728",
    "eslint-config-mcrn": "*"
  },
``` 

2. 编译过程中遇到的关于 **npm** 的几个错误：
 
 * No bundle url present
 重新 **npm install**，[issues/12754](https://github.com/facebook/react-native/issues/12754)
 * "RCTBundleURLProvider.h" file not found - AppDelegate.m
 先 **npm install** 再 **react-native upgrade** 版本仍为当前版本。
 ["RCTBundleURLProvider.h” file not found](https://stackoverflow.com/questions/40368211/rctbundleurlprovider-h-file-not-found-appdelegate-m)
 * [Workarounds] Packager unable to resolve module from /Users/node_modules 
  运行时，突然报这个错，模拟器会给出解决错误的四个提示：

1. Delete the node_modules folder - rm -rf node_modules && npm install
2. Reset packager cache - rm -fr $TMPDIR/react-* or node_modules/react-native/packager/packager.sh --reset-cache
3. Clear watchman watches - watchman watch-del-all
4. Recreate the project from scratch

   <font color=#DC143C>注意：</font>后来第二天又遇到了这个问题，这就比较奇怪了。在同事的帮助下，最终明白了，频繁导致这个原因：在引入一个三方组件后，需要执行 **yarn** 或者 **npm install** 命令进行配置。究其原因是使用三方组件时，通过，
   
   ```javascript
   import xxx from 'react-native-xxx';
   ```
   
   导入。

[issues/4968](https://github.com/facebook/react-native/issues/4968)

#### 2018.11.16

1. 安装模板工程 mcrn-cli   
   
    [mcrn-cli](https://github.com/meicai-fe/mcrn-cli)
   
    报错，
   
    ```bash
    https://github.com/CocoaPods/CocoaPods/search?q=[!] Xcodeproj doesn't know about the following attributes {"inputFileListPaths"=>[], "outputFileListPaths"=>[]} for the 'PBXShellScriptBuildPhase' isa.
If this attribute was generated by Xcode please file an issue: 
    ```
    
    ```bash
    https://github.com/CocoaPods/CocoaPods/search?q=[!] Xcodeproj doesn't know about the following attributes {"inputFileListPaths"=>[], "outputFileListPaths"=>[]} for the 'PBXShellScriptBuildPhase' isa.
If this attribute was generated by Xcode please file an issue: 
    ```
    **Ruby** 版本过低，需要升级，
    
    ```bash
    curl -L https://get.rvm.io | bash -s stable --ruby
    ```
    然后，再通过 **rvm** 配置并设置默认的 **Ruby** 版本。
    
    ```bash 
    $ rvm install 2.5.1
    ```
    
    ```bash
    $ rvm use 2.5.1 --default
    ```

2. /Library/Ruby/Site/2.0.0/rubygems.rb:271:in find_spec_for_exe': can't find gem cocoapods (>= 0.a) (Gem::GemNotFoundException) from /Library/Ruby/Site/2.0.0/rubygems.rb:299:inactivate_bin_path' from /usr/local/bin/pod:22:in `<main>'

    重新安装cocoaPods: 

    ```bash
    sudo gem install cocoapods
    ```    
    <font color=#DC143C>注意：</font> 安装 **cocoaPods** 时避免使用 **sudo gem install -n /usr/local/bin cocoapods --pre** 安装预览版，预览版可能会导致其他问题。
    
3. 修改资源文件的加载路径后，一直报图片找不到的错误  
    
    需要清理当前项目的缓存，然后重新编译即可。分别在项目对应目录下执行，
    
    ```bash
    watchman watch-del-all
    ```
    然后在执行，
    
    ```bash
    react-native start --reset-cache
    ```

4. <font color=#DC143C>重要：undefined is not an object (evaluating 'this.show.bind') </font>

    因 **JS** 中的 **this** 指向导致的问题，在 **_renderItem** 函数
    中，使用箭头函数，
    
    ```javascript
    _renderItem =(item)=> {
    
    }
    ```
    [JavaScript 的 this 指向问题深度解析](https://segmentfault.com/a/1190000008400124) 

### 练习
#### 2018.11.02

[电影列表](https://github.com/XibHe/React-Native_StudyNotes/tree/master/React-Native%20练习/MoviesList)

#### 2018.11.13

[盒子模型](https://github.com/XibHe/React-Native_StudyNotes/tree/master/React-Native%20练习/FlexBox)

[view布局](https://github.com/XibHe/React-Native_StudyNotes/tree/master/React-Native%20练习/ViewLayout)

#### 2018.12.04

[TabBar](https://github.com/XibHe/React-Native_StudyNotes/tree/master/React-Native练习/TabBar)