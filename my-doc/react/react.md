# React
## Introduction
构建Web和原生交互界面的库
  - 优势
    - 组件化开发
    - 有人说性能好，有人说性能不好
    - 丰富的生态
    - 跨平台
## 搭建工程化开发环境
`npx creat-react-app app-name`  
`cd app-name`  
`npm start`


package.json文件:  
核心包：`react`, `react-dom`  
`script`:`start`, `build`  

src文件夹：  
只保留 index.js, app.js

![react_index.js](./img/react_index.js.jpg)
- 将app跟组件渲染到id为root的dom节点上
![react_app.js](./img/react_app.js.jpg)

## JSX - JavaScript XML 的 概念 和 本质
### JavaScript XML
代表在JS中编写HTML模板结构，既享受了HTML声明式的模板写法，又享受JS的可编程能力
```jsx
const message = 'this is message'
function App () {
  return (
  <div> {/* HTML声明式模板 */}
    <h1>this is title</h1> {/* HTML声明式模板 */}
    {message} {/* js语法，读取变量的值 */}
  </div>
  );
}

```
### 历史
JSX 而是Facebook开发的JavaScript库，用于构建用户界面（UI）。JSX旨在简化React组件的声明，主要目标是提供一种声明性的方式来描述用户界面的结构，使得代码更易读、更易理解。
### 识别 和 转译
JSX不是标准的JS语法，是JS的语法扩展，为了让浏览器能识别，需要在webpack中`npm run build`的时候利用babel做解析
> 我们可以通过编译器网站 babeljs.io 来 try it out
### JSX 使用的高频场景
#### JSX中的JS表达式 ：将JS写在{}里
  1. "字符串" 
    - `{'This is a string'}`
  2. 变量 
    - `{varName}`
  3. 函数调用和方法调用 
    - `{fun()}`
    - `{new Date().getDate()}`
  4. 使用JS对象 
    - `{obj}`
    - `<div style={{color: 'blue'}}>this is div</div>`
  > 注意：只有表达式可以识别，语句是不可以的，比如if语句，switch语句，变量声明语句，是不能写在{}里的，表达式就是不执行某个动作的情况下返回一个值，而语句是执行某个动作但不返回值,但也有例外。
  
#### JSX中的列表渲染  
使用js原生的map方法
```jsx
<ul>
  {list.map((item) => {<li key={item.id}>{item.name}</li>})}
</ul>
{/* 使用map时，循环哪个结构就return哪个结构 */}
{/* key是react内部用的标识，用于提升渲染速度 */}
```
#### 条件渲染  
- 逻辑与运算符 &&  
  - 控制一个元素
  - `{flag && <span>This is span</span>}`
- 三元表达式 ?:
  - 控制两个元素
  - `{isLogin ? <span>loading...</span> ： <span>This is span</span>}`
- 实现复杂条件渲染
  - 解决方案：自定义函数 + if 语句或其他条件判断，在jsx中调用渲染
  - 多个三元表达式，这样可以吗？是不是可读？
#### React事件绑定
- on + 事件名称 = {事件处理程序}
- 在做模板，遍历，删除，编辑的时候非常常见
- 分为三种情况
```jsx
{/* 不传参数，只获取事件参数e */}
const hanleClick = (e) => {
  console.log('button被点击了', e)
}

{/*...*/}

<button onClick={handleClick}>click me</button>
```
如何传递自定义参数：
```jsx
{/* 不要事件参数，只想获取自定义参数 */}
const hanleClick = (name, e{/* 注意参数顺序 */}) => {
  console.log('button被点击了', name)
}

{/*...*/}

<button onClick={() => handleClick('Jack')}>click me</button>
{/* 即想要自定义参数，又想获取事件参数e */}
<button onClick={(e) => handleClick('Jack')}>click me</button> 
```

###  React中的组件
什么是组件
  - 组件是一个通用的概念，是不挑框架的
  - 组件又自己的逻辑和外观，组件可以互相嵌套和复用
  - 就像搭积木一样
  - 一个首字母大写的函数，内部存放了组建的逻辑和视图UI，渲染组件只需要把组件当成标签书写即可
  ```jsx
  // 自定义组件
  function Button() { // 也可以写箭头函数
    // 组件内部逻辑
    return <button>click me</button>
  }

  // 使用(渲染)组件
  function App(){
    return (
      <div>
      // 自闭和
      <button />
      // 成对标签
      <button></button> 
      </div>
    )
  }
  ```

[next](https://www.youtube.com/watch?v=AE4N6dgzQkI&list=PLFbd8KZNbe-_cp9SRCpEBnBzZoBYl4fIR&index=11)

