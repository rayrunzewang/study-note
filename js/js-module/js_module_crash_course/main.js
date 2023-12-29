// 引入其他js模块的文件，也必须是js模块



// import { sum, sub} from './calc.js'; 必须给与扩展名 而不是像react一样省略扩展名
// alias:
import { sum as add, sub } from './calc.js'; //必须给与扩展名 而不是像react一样省略扩展名



// naming space
// import * as calc from './calc.js'    



// using default import importing sayMyName from whoami.js
// import { default as sayMyName} from './whoami.js'; 
// import { default as giveANewName} from './whoami.js'; //rename when importing
// import sayMyName from './whoami.js'; // 最简单的方法 不改名
import giveANewName from './whoami.js'; // 最简单的方法 改名


// import from combine.js
import * as combine from './combined.js';


console.log(add(2, 3))
console.log(sub(10, 5))



// console.log(sayMyName());
console.log(giveANewName());



// access naming space
// console.log(calc.sum(2,3))
// console.log(calc.sub(10,5))


// access combine.js and also naming space
// console.log(combine.calc.sum(2,3));
// console.log(combine.calc.sub(10,5));
// console.log(combine.channelName);



// give personal stories or mixed stories rather than professional stories
// ask questions about company, like the hot top on company linkedin page, not the questions for yourself



// dynamic import, can do conditional import and export
// static dynamic 必须在 top, dynamic import可以在anywhere
const { sayHi, sayHola } = await import('./greeting.js'); // returns you a promise, you can use async and await
sayHi();

sayHola();

// dynamic import可以用于条件判断
// if (true) {
//     const { sayHi, sayHola } = await import('./greeting.js');
//     sayHi();
//     sayHola();
// }


/* 
 Promise.all(
    [
    await import('./greeting.js'),
    await import('./calc.js')
    ]
);

//console.log(promise);
promise.then(result => {
    console.log(result);
    console.log(result[0].sayHi());
})
 */



// tree shaking