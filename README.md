### 记录学习 React-Native 的点滴

#### 今天学点啥

**2018.11.13** 

#####1. 样式
flexbox 水平三栏布局
外联样式： style = {styles.container}

内联样式：style = {{flex: 1,borderWidth: 1,borderColor:'red'}}

多个样式：style = {[styles.container,styles.flex,{flex: 1,borderWidth: 1}]}

#####2. 组件的导出和引入

```javascript
module.exports = Header;
const Header = require('./header');
render(){
    return (
       <Header></Header>
);}
```

#### 今天练点啥

