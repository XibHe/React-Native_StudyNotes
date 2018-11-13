### 记录学习 React-Native 的点滴

#### 今天学了啥
**2018.11.02**

1. 在 iOS 上使用 http 链接的图片地址可能不会显示，参见[这篇](https://segmentfault.com/a/1190000002933776)说明修改。
在此基础上，继续添加，Exception Domains --- locallhost --- NSExceptionAllowsInsecureHTTPLoads = YES 后加载出图片。

2. FlatList 和 SectionList的区别 

**2018.11.05** 

JS 进阶 --- [基本类型 引用类型 简单赋值 对象引用](https://segmentfault.com/a/1190000002789651)

**2018.11.12** 

[React Native 的生命周期](http://note.youdao.com/noteshare?id=00e5e2e3040218d6d715eb7910413382)

**2018.11.13** 

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

#### 今天练了啥
**2018.11.02**


**2018.11.13**

[盒子模型](https://github.com/XibHe/React-Native_StudyNotes/tree/master/React-Native%20练习/FlexBox)

[view布局](https://github.com/XibHe/React-Native_StudyNotes/tree/master/React-Native%20练习/ViewLayout)

