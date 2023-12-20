/* 第一种方法
export default const sayMyName = () => {
    return 'helloWorld'
}
*/

//第二种方法
const sayMyName = () => {
    return 'helloWorld'
}

export default sayMyName;

// 当你只有一个thing需要export时，use fault export，常用于react
// 当有多个things需要export时，使用named export方法