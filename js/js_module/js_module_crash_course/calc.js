// export mainly function ,sometimes object, array, class even variables

//第一种export方法：

/* 
export const sum = (a,b) =>{
    return a + b;
 }
 
export const sub = (a,b) =>{
    return a - b;
 }
*/

// 第二种export的方法

const sum = (a,b) =>{
    return a + b;
 }
 
const sub = (a,b) =>{
    return a - b;
 }
 
export { sum, sub };

//使用上面两种方法，导入和导出时的变量名必须一样
//除非你使用default方法