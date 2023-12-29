/* alert("Hello");
 * document.write("<p>Hi</p>");
 * console.log("F12");
 */

/* 练习：点击按钮，更换类名和颜色
 * const btnEls = document.getElementsByClassName("btn");
 * const desEls = document.querySelector("p")
 * for (let i = 0; i < btnEls.length; i++) {
 *     const btnName = btnEls[i].textContent;
 *     const bodyBackground = document.querySelector("body");
 *     btnEls[i].addEventListener("click", () => {
 *         desEls.innerHTML = `<p>你点击了${btnName}按钮</p>`;
 *         bodyBackground.className = `${btnName}`;
 *     })
 * }
*/

// js视频 尚硅谷 笔记：

// let a = " 使用转义字符\"\\\"可以添加\"\"；类似的还有\\n代表换行；还有\\t制表符 ";
// const paragraph = document.createElement("p");
// paragraph.innerHTML = a;
// document.querySelector("body").appendChild(paragraph);

// let num = 123;
// let str = "123";
// alert(typeof num + ", " +  typeof str);

// alert(Number.MAX_VALUE);
// //1.7976931348623157e+308

// alert(Number.MAX_VALUE * Number.MAX_VALUE);
// //Infinity

// alert(Infinity);
// //Infinity

// alert("abc" * "bcd");
// //NaN

// let b = NaN;
// alert(typeof(b));
// //number

//js浮点数计算不精确的问题如何解决？
//布尔值主要是为了用来做逻辑判断的

//null类型的值只有一个，就是null；null这个指专门用来表示一个为空的对象。
//let a = null;
// typeod a 返回object

//undefined 未定义，值也是只有一个，undefined；
//let b; b = undefined;当声明一个变量，但是不给他赋值时，他就是undefined。
// typeof b; 返回 undefined

//强制类型转换
//方式一（有局限，即null 和 undefined 没有toString()方法）
// let c = 123;
// c = c.toString();//该方法不会影响到原变量
// alert(typeof c + ", " + c);
//null 和 undefined 没有toString()方法；如果调用他们的方法会报错；
//方式二 调用String()函数； 并将我们这个被转换的数据作为参数传递给函数；
// (对于Number和Boolean底层还是调用的toString()方法
// 对于null和undefined会将null和undefined直接转换成String
// 适应性更好)
// let d = undefined;d = String(d); alert( typeof d + ", " + d);

//转换成Number
// 方法一：使用Number()函数；如果值不是数字的string，转换会显示NaN，
//"" 和 "    " （空串或全是空格的字符串）会转换为0
// true 会转换为 1; false 会转换为 0; "null" 会转换为 0; "undefined" 会转换为 NaN;
//方法二 let a = "123px"; a = parseInt(a); 可以将字符串中有效的整数内容(从前到后，知道遇到非数字)取出来，转换为Number类型。parseInt也可以为小数Number取整。
//同理，a = parse(a)可以转换小数；
//此类方法对于非String，会将其转换为String，然后再操作，最后转换为了NaN;

// 对于值是数字的string* 1

// 十六进制
// 0x123

//八进制 以0开头
//a = 070; 所以表达十进制不要加0，计算机会以为是八进制

//二进制 在浏览器里兼容性不好，所以用的不多，以0b开头，但是不是所有的浏览器都支持。
//a = 0b10;

//而parseInt会在转换数字的时候产生不同进制的浏览器兼容问题，比如070会被chrome当成十进制解析，而被Ie当成8进制解析。解决方法： let a = 070, a = parseInt(a, 10)； 第二个参数，10表示十进制；

//转换为Boolean
//只有一种方法，使用Boolean();
//a = Boolean(a); 
//数字转布尔：正负值皆为true, 0和NaN为false;
//字符串转布尔："true""false""    "皆为 true;""为false; 除了空串为false，其余的都是true;
//null和undefined转换为false都是false;
//对象也会转换为true

//基础运算：
//运算符也叫操作符
//其中包括算术运算符： + - * / %;

//对于非Number的值进行计算时，会被先转换为Number在计算（字符串除外）;
//result = true + 1; 返回 2
//result = true + false; 返回 1
//result = 2 + null; 返回 2
//result = 2 + NaN; 返回NaN，因为任何值和NaN做运算，都得NaN
//加法的特殊情况，如果对两个字符串相加，会进行拼串操作
//result = "123" + "456";
//任何的值和字符串做加法运算，都会先转换为字符串，然后拼串；
//所以可以利用拼串做String类型转换, a = a + "";这是一种隐式的类型转换，有浏览器自动完成，其实也是调用了String()。比String()的方式用的还要多一些。

//减法
//result = 100 - true; return 99
//result = 100 - "1"; return 99
//除了加法和字符串相加着一种情况，剩下的 - * / 都是转换为Number
//undefined转换为NaN，null转换为0
//可以利用这一特性将任何值转换为Number, 原理和Number()一样，使用起来更简单;更简单的方法：用正号直接可以将非Number转换成Number；

//一元运算符 - 只需要一个操作数（ i.e.typeof, 一元的+）
//a = + a; a = -a; 负号，对于非Number值，会先转换成Number，然后再取反；
//用正号直接可以将非Number转换成Number;

//自增自减 
//先加加和后加加。 

/*19.逻辑运算符 - 与或非
 * 
 * ! - 对布尔值进行取反；
 *   - 如果对非布尔值进行运算会将其转会为布尔值，然后取反； 比如 !0 会为true
 *   - 我们可以利用这一特性对一个值进行布尔值的隐式类型转化，比如!!0 为 false；!!"hello"为true
 *
 * && 短路的与 可用于布尔值和非布尔值(先转换为布尔值，返回时返回原值)
 * || 短路的或 可用于布尔值和非布尔值(先转换为布尔值，返回时返回原值)
 */

/* 21. 赋值运算符
 * =
 * +=
 * -=
 * *=
 * /=
 * %=
 */

/* 22.关系运算符 comparson
 *
 * >; <; ==; >=; <=; ===; !=; !==
 * 可以比较数值和非数值的情况
 * 非数值会被先转换为数值，然后进行比较
 * 
 * 归纳梳理:
 * 
 * true -> 1 
 * "0" -> 0
 * null -> 0
 * undefined -> NaN
 * "hello" -> NaN
 * 
 * 注意：
 * 
 * 任何值和NaN进行任何比较，都是false；
 * 如果符号两边都是字符串，不会将其转换为数字，而会分别比较字符的unicode编码,比较时，是一位一位进行比较，如果两位一样，则比较下一位；
 * 如果比较两个字符串型的数字，利用正好 +"1" 转换一下类型就可以了，比较字符串数字的时候，必须要注意转型
 * https://unicode.org/charts/
 * 应用：这种方式可以用于对英文字母人名进行排序，比较中文时没有意义
 */

/*23. Unicode 编码表
* 十六进制
* 输出(比如编号为1C00的字符)Unicode编码字符使用 "\u<十六进制编码>"，比如： \u1C00
在网页中使用"&#<十进制编码>"，注意是十进制的
*/

/* 24.相等运算符
*
* == 用来比较两个值是否相等
* 如果两边值得类型不同则会进行自动类型转化，大部分情况转换为Number，也会转换成其他的，看情况，比如 null === 0 // -> false;
*undefined 衍生自 null，所以这两个值 null == undefined // -> true
* NaN 不和任何值相等，包括他本身
* 要判断一个值是不是Nan,要使用isNaN()方法
*
* != 用来比较两个值是否不相等
* != 也会做自动的类型转换
*
* === !== 不做自动的类型转换
* null === undefined // -> false;
*/

/* 
25.条件运算符（三元运算符）
语法： 条件表达式？语句1：语句2；
根据条件判断执行语句1或语句2并返回执行结果；
var max = a > b ? (a > c ? A : c) : (b > c ? b : c);
var max = a > b ? a > c ? A : c : b > c ? b : c;
以上两个式子是一样的，但不是推荐写法，因为可读性不高，宁愿拆开写；
如果一定要这样写，要把括号加上；
*/

/*
26.运算符的优先级
js中有一个符号优先级的表
在表中越考上优先级越高，如果优先级一样则从左往右计算
这个表不需要记忆但要熟悉，遇到优先级拿不准的可以使用括号来改变优先级，这样也有利于可读性
*/

/*
27.语句 statement
程序是由一条一条语句构成的
自上向下一条一条执行
可以使用 { } 来为语句分组
{ } 内一组语句要么都执行，要么都不执行, 被称为代码块，代码块之后不需要写分号
相比于其他语言，js中的代码块只具有分组的作用，没有其他的用途
也就是说代码块内部的内容，在外部是完全可见的 ？？？Q:那对于let呢？是因为代码块还是因为某些scope如function和if关键字
*/

/*
28 - 32.流程控制语句 - 根据一定的条件控制程序执行流程
    1.条件判断语句
    2.条件分支语句
    3.循环语句

    条件语句一行代码可以不加 { }， 多行必须加 { }，但是一般推荐加 {}，因为增加一致性和可读性
    而对于function, 一行代码也必须加 { }
*/

/*
 *33-34.条件分支语句 switch statement
 *
 *  switch(x){
 *      case expresson:
 *          statement;
 *          break;
 *      case expresson:
 *          statement;
 *          break;
 *      case expresson:
 *          statement;
 *          break;
 *      default:
 *          statement;
 *          break;
 *  }
 * switch和if的功能时可以互相代替的，可以根据自己的习惯选择，实际if会用的多一点
 * 查找应用场景，何时使用switch而不用if？
 */

/* 35-36.循环语句
 *     break也可以用于退出循环
 *
 *     while(){
 * 
 *     }
 * 
 *     i.e.特殊用法 
 * 
 *     while(true){
 *         statement;
 *         if(i=10){
 *             break;
 *         }
 *     } 做某事直到达到某个条件就停止
 * 
 *     do {
 * 
 *     } while();
 */

/* 37-42. for 循环
 *     for(let i = 1; i<5; i++){
 * 
 *     }
 *
 *     for(;;) {
 * 
 *     }
 *     死循环
 */

/* 43-45.质数的练习 
 * 在编程中，break 语句通常用于循环语句（如 for 或 while），而不是用于条件语句（如 if）。
 * 但if可以用于break离自己最近的循环，对外层循环没影响
 * 如果想终止外层循环，可以为循环语句创建一个label来标识，并在break后跟着一个label
 * 
 * i.e.: outer 
 *       for () {
 *           for () {
 *               break outer;
 *           }
 *       }
 * 
 * continue 用来跳过当此循环:
 * continue 也是默认只会对离他最近的循环起作用；
 * 
 * for () {
 *     for () {
 *         continue;
 *     }
 * }
 * 如果想对外层循环起作用，用label；
 * 
 * break 可以用于对性能的提升；
 * 
 * 测试代码执行时间和性能：
 * 在程序开始前和结束后使用计时器
 * console.time("test");
 * console.timeEnd("test");
 */

/* 46-48.Object
 * 只要不是String, Number, Boolean, Null 和 Undefined 的就是 Object
 * 五种基本数据类型和一个引用数据类型
 * 
 * 1.内建对象-ES标准中的对象
 * 2.宿主对象-浏览器提供的对象,i.e. BOM DOM等
 * 3.自定义对象-由开发人员自己创建的对象
 * 
 * 读取对象中没有的属性不会报错
 * 会返回undefined
 * 
 * 属性名不用符合变量命名规范
 * 但是符合命名规范是规范的做法
 */

/* 49.基本和引用数据类型
 * 基本数据类型保存在栈内存
 * 引用数据类型（对象），保存在堆内存，对象名和内存地址（引用）保存在栈内存
 * 
 * 当比较两个基本数据类型时，比较的是值
 * 而当比较两个引用数据类型时，比较的是引用地址
 */

/* 50.对象字面量
 * 
 * var obj = {};
 * 属性名可以加引号，但建议不加
 * 如果属性名不符合变量名命名规范，则需要加引号
 */

/* 51.函数 - 函数也是一个对象
 * reuse, 封装，closure
 *
 * 使用typeof检查函数对象时返回Function
 * 
 * 使用构造函数声明新函数 - 一般不用
 * const addFunction = new Function('a', 'b', 'return a + b;');
 * 
 * 使用函数声明来创建一个函数 function fun(){}
 * 使用函数表达式创建一个函数 var fun = function(){};
 */

/* 52-55.函数的参数和返回值
 * 因为接受参数不会检查数据类型，所以要注意是否有可能需要接收到非法的参数，如果有可能要对参数进行数据类型的检查
 * 也不会检查输入参数的数量，没有输入的实参是undefined
 * 
 * return后不跟值或函数内不写return，则返回undefined
 * return后可以跟任何值，包括function
 * 
 * 实参也可以是function或者匿名函数，如果argument是fun后跟(),则变成了fun()返回值
 * return退出function,而不能退出for循环
 */

/* 56.立即执行函数
 * 匿名函数在某些情况下可能需要用(),来表明函数是一个整体
 */

/* 57.方法
 *
 * 在函数中定义方法
 * 方法一：
 * let obj = {
 *      myMethod: function() {
 *          console.log('This is a method.');
 *      }
 * };
 *             or
 * obj.myMethod = {
 *     function() {
 *         console.log('This is a method.');
 *     }
 * };
 * 方法二：
 * let obj = {
 *      myMethod() {
 *          console.log('This is a method.');
 *      }
 * };
 * 
 * 枚举对象中的属性
 * 使用 for in
 * 
 * i.e.:
 * for (var n in obj) {
 *     console.log(n);
 *     console.log[n];
 * }
 */

/* 58-59.作用域
 * 全局作用域 和 局部作用域（函数作用域）
 * 全局作用域中有一个全局对象window，他代表的是我们浏览器的窗口，由浏览器创建
 * 全局作用域中创建的变量都会作为window的属性保存
 * 
 * window.c //-> undefined
 * c //-> Error
 * 
 * 变量的声明提前
 * var 关键字声明的变量 可以变量的声明提前 但是会显示undefined
 * function 关键字函数声明的function，可以声明提前 并可以被调用
 * 使用var函数表达式 创建的函数也能提前但不能被调用，是undefined
 * 
 * 函数作用域：
 * 调用函数时，作用于创建，函数执行完毕以后，函数作用域销毁。
 * 每调用一次函数，就会创建一个函数作用域，他们之间是互相独立的。
 * 在函数作用域中可以访问到全局作用域的变量，在全局作用域中无法访问到函数作用域的变量
 * 函数作用域内也会var和function的声明提前
 * 在函数内如果不使用var关键字，比如 a=10;会变成全局变量
 * 形参就相当于在函数中声明了一个变量
 */

/* 60.debug
 * 端点 chrome source
 */

/* 61-62.this
 * 解析器在调用函数每次都会向函数内部传递进一个参数,this
 * this指向一个对象
 * 这个对象被称为函数执行的上下文
 * 根据函数的调用方式不同, this会指向不同的对象 
 */

/* 63.使用工厂方法创建对象
 * 批量生产
 * 但创建的对象使用的构造函数都是Object
 * 所以创建的对象类型都是
 * 导致我们无法区分多种不同类型的对象
 */

/* 64.使用构造函数创建对象 
 * 批量生产
 * 定义一个新构造函数，构造函数就是一个普通函数，创建方式和普通函数没有区别，
 * 只要求：
 *     1.首字母大写
 *     2.用new关键字调用（这是按照普通函数调用还是构造函数调用的区分标志）
 * 创建的对象类型就是此构造函数的类型
 * 
 * 构造函数的执行流程
 * 1.立即创建一个新的对象
 * 2.将新建的对象设置为函数中的this,在构造函数中可以使用this来引用新建的对象
 * 3.逐行执行函数中的代码
 * 4.将新建的对象作为返回值返回
 * 
 * 工厂函数和构造函数的区别：
 * 
 * 使用new关键字：
 * 构造函数： 构造函数需要使用 new 关键字来创建对象。如果忘记使用 new，可能会导致意外的行为或错误。
 * 工厂函数： 工厂函数在创建对象时不需要使用 new，直接调用函数即可。
 *
 * 返回值：
 * 构造函数： 构造函数通常不显式返回值。this 关键字用于指向新创建的对象。
 * 工厂函数： 工厂函数可以显式返回一个对象，而该对象不一定是新创建的。这使得工厂函数可以根据不同的条件返回不同的对象。
 *  
 * 原型链：
 * 构造函数： 通过构造函数创建的对象通常共享一个原型链。
 * 工厂函数： 工厂函数创建的对象通常不共享原型链。工厂函数不具备继承，原型，多态等概念。
 */

/* 补充：this
 *
 * var thisApply = obj1.method1.apply(obj2); //是立即执行并储存返回值 
 * console.log(thisApply);
 *
 * var thisBound = obj1.method1.bind(obj2); //是储存一个函数，等待被call 
 * console.log(thisBound ()); 
 * 
 * 所以apply和call是没有区别的，可以互换，只是传参的方式不同
 */

/* 65-67.构造函数的方法放在原型上-通过继承让实例共用并且不影响全局作用域和命名空间
 * 我们创建的每一个函数，解析器都会向函数中添加一个属性prototype
 * 这个属性对应着一个对象，这个对象就是我们所谓的原型对象
 * 原型对象就像一个公共的区域，所有同一个类的实例都可  以访问到这个原型对象，
 * 我们可以将对象中共有的内容，统一设置到原型对象中
 * 
 * prototype和__proto__的区别
 * 
 * prototype：
 * prototype 是函数对象特有的属性，它存在于构造函数上。
 * 当你创建一个函数时，该函数会自动获得一个 prototype 属性，这个属性是一个指向原型对象的引用。、
 * 通过 prototype 属性，你可以添加方法和属性，这些方法和属性会被实例对象共享。
 * prototype 主要用于实现基于原型的继承。
 * 
 * __proto__：
 * __proto__ 是实例对象上的属性，它是一个指向该对象原型的引用。
 * 实例对象通过 __proto__ 可以访问原型对象上的方法和属性。
 * 尽管 __proto__ 在许多浏览器中得到了广泛支持，但它并不是标准中定义的属性，它是一种浏览器特有的实现。在现代JavaScript中，推荐使用 Object.getPrototypeOf(obj) 来获取对象的原型。
 * 
 * mc.__proto__ == MyClass.prototype //-> true
 * 实例的__proto__和构造函数的prototype的指向是一样的，指向一个原型对象，每一个自定义构造函数的原型对象都是独立的，所以每个构造函数都可以在自己的原型对象上创建自己的方法，让实例继承。
 * 
 * 总的来说，prototype 主要用于构造函数，而 __proto__ 主要用于实例对象。prototype 是构造函数的属性，用于定义共享的方法和属性，而 __proto__ 是实例对象的属性，用于访问原型链上的方法和属性。在现代JavaScript中，推荐使用更标准的方法来操作原型，如 Object.getPrototypeOf 和 Object.setPrototypeOf。
 * 
 * 用in检查对象中的属性的时候，如果对象里没有，原型里有，也会返回true
 * hasOwnProperty()检查对象自身中的属性
 * 
 * 原型对象也是对象，所以也有原型
 */

/* 68. toString
 *
 */

/* 69.垃圾回收
 * 当一个对象没有任何的变量或属性对其进行引用，我们将再也无法操作该对象
 * 此时这种对象就是垃圾，这种对象过多会占用大量的空间，导致我们程序运行变慢
 * js中有自动的垃圾回收机制
 * 会自动将这些垃圾对象从内存中销毁，我们不需要也不能进行垃圾回收操作
 * 
 * 如果需要回收，我们需要做的只是将我们不再需要的对象设置为：obj = null; 
 */

/* 70-71.Array
 * 数组的存储性能比普通对象好，所以开发中经常使用数组存储数据
 * 使用typeof检查Array,返回的是Object
 * 
 * 如果寻找不存在的索引会返回undefined
 * 对于连续的数组可以使用arr.length可以获取数组的长度，注意必须时连续的，对于不连续的数组，会获取数组的最大索引+1
 * 可以修改length: arr.length = 10; 但是arr长于length的部分会被删除
 * 使用arr[arr.length]=1; 会往索引的最后一个位置添加元素
 * 
 * 使用构造函数创建数组
 * var arr = new Array(); 用的不多
 *  var arr = new Array(10);  //->创建一个长度为10的数组
 * 使用字面量创建数组
 * var arr = []
 * 
 * Array中可以放任意数据类型
 */


/* 72.Arry的属性和方法 
 * 
 * Array只有三个属性
 * constructor
 * arr.length
 * arr.prototype
 * 
 * 四个基本方法（用的最多），也有其他方法
 * arr.push() - 在数组后面添加一个元素，并返回新的数组长度
 * arr.pop() - 删除最后一个元素并返回此元素
 * arr.unshift() - 在数组前面添加一个元素，并返回新的数组长度
 *               - 向前边添加一个元素以后，后面的索引会依次向后
 * arr.shift() - 删除第一个元素并返回此元素
 */

/* 72-75.Arry的遍历 
 * 
 *  - 所谓的遍历数组就是将数组中所有的元素都取出来
 *
 *  可以使用for循环
 *  for(let i = 0; i < arr.length; i++) {
 *  
 *  }
 * 
 *  可以使用for循环进行条件筛选，比如可以将大于18的number提取出来；
 * 
 *  function fun(arr) {
        const arr2 = [];
        for (let i = 0; i < arr.length; i++) {

            if (arr[i].age && typeof(arr[i].age) === 'number' && arr[i].age >= 18) {
                arr2.push(arr[i]);
            }
        }
        return arr2;
    }
 *
 * 除了for,forEach也是一个遍历数组的方法（只支持IE8以上的浏览器），比for循环好写一些
 * forEach方法需要一个函数作为参数
 * 
 * arr.forEach(function(a){
 *      console.log(a);
 * })
 * - 数组中有几个元素，函数就会执行几次；
 * - 每次执行时，浏览器会将遍历到的元素以实参的形式传递进来，我们可以定义形参来读取这些内容
 * - 一个三个参数：arr[i] element, arr[i].index, 正在遍历的数组本身；
 *  
 * 由我们创建不由我们调用的被称为回调函数；
 */

/* 76-77. slice() 和 splice()
 *
 * slice(start, end) - 可以用来从数组中提取出指定元素, 该方法不会改变原数组，索引可以传递负值;
 *                   - 参数：
 *                     1.开始的位置(inclusive)
 *                     2.结束的位置(not inclusive), 第二个参数可以省略不写
 * 
 * splice() - 可以用于删除数组中的指定元素，并向数组添加新元素;
 *          - 使用splice()会影响到原数组，会将指定元素从原数组中删除，并将被删除的元素作为返回值返回。
 *          - 参数：
 *            1.开始的位置
 *            2.表示删除的数量
 *            第3个及以后参数：可以传递一些新的元素，添加到数组的开始位置里;
 */

/* 78.concat(), join(), reverse(), sort();
 *
 * concat() - 可以连接两个或多个数组，也可以添加元素，并将新的数组返回，不会影响原数组;
 * join() - 该方法可以将数组转换为一个字符串, 不应向原数组，而是将转换后的字符串返回;
 *        - 在join()中可以指定一个字符串作为参数，这个字符会成为数组中元素的连接符，默认为",";
 * reverse() - 颠倒数组中元素的位置，会修改原数组;
 * sort() - 对数组的元素按照unicode编码进行排序;
 *        - 注意，即使对于纯数字的数组，排序也会按照unicode比照数字第一位，所以对数字进行比较时，可能会出错，所以可以自己指定排序的规则；
 *        - 在sort中添加回调函数，来指定我们排序规则，回调函数中需要定义两个形参:a,b;
 *          浏览器将会分别使用数组中的元素作为实参去调用回调函数;
 *          
 *        - arr.sort(function(a,b){
 *            if(a > b){
 *                  return 1
 *              } else if(a < b){
 *                  return -1
 *              } else {
 *                  return 0
 *              }
 *          });
 * 
 *          简单版本
 *          升序排列: arr.sort((a,b) => a - b);
 *          降序排列：arr.sort((a,b) => b - a);
 */

/* 79.函数对象的方法 
 * 
 * call() 和 apply() 和 fun() 都是去调用函数
 * 在调用call()和apply()时，会将一个object指定为this作为第一个参数
 * call()方法可以在将实参在对象之后依次传递
 * apply()方法需要将实参封装到一个数组中统一传递
 */

/* 80.argument 类数组对象，不是一个数组，类似数组，也可以通过索引来操作数据，也可以获取长度
 *    - 在调用函数时，我们所传递的实参都会在arguments中保存
 *    - arguments.length可以用来获取实参的长度
 *    - arguments.callee这个属性对应一个函数对象，就时当前正在执行的函数的对象; 
 */

/* 81.Date对象 
 * 创建一个Date对象
 * - 构造函数 var d = new Date(); 会封装为当前代码执行的时间；
 * - 创建一个指定的时间，需要在构造函数中传递一个表示时间的字符串作为参数
 *   i.e.: var d2 = new Date("12/03/2016 11:10:30")
 * getDate() - 获取当前日期对象是几日
 * getDay() - 获取当前日期对象是周几 0-6
 * getMonth() - 获取当前时间对象的月份 0-11
 * getFullYear() - 获取当前时间对象的完整年份
 * getYear() - 请使用getFullYear()方法
 * getTime() - 获取当前日期对象的时间戳, 时间戳指的是从格林威治标准时间的 1/1/1970 00:00:00 到当前日期所花费的毫秒数，使用时注意时区
 *           - 计算机底层使用的都是时间戳
 * time = Date.now() - 获取当前的时间戳（代码执行时），可以用来测试代码执行速度 
 */

/* 82.Math - Math和其他的对象不同，虽然他是大写，但他不是一个构造函数 
 *         - 他是一个工具类，里边封装了数学运算需要的属性和方法
 * 略：见总结 
 */

/* 83.包装类 - 开发中不会这么用，因为在作比较时不好用
 *    - 基本数据类型: String Number Boolean Null Undefined
 *    - 引用数据类型: 对象
 *    - 在js中为我们提供了三个包装类，通过这三个包装类可以将基本数据类型的数据转换为对象
 *      String() Number() Boolean() 实际上都是构造函数
 *      能将基本数据类型转换为 String, Number, Boolean 对象, 可以添加属性
 * 
 *    - 开发中不会这么用，只是解析器在调用一个基本数据类型的内置方法时，临时将基本数据类型转换成对象，调用完方法以后，再将其转换为基本数据类型 
 */

/* 84. String对象里的方法
 * 在底层，字符串是以字符数组的形式保存的
 * 所以字符串可以用索引获取字符
 * 
 * 属性：
 * constructor
 * length
 * prototype
 * 
 * 方法：
 * charAt() - 可以返回字符串中指定位置的字符
 * charCodeAt() - 指定索引的字符的Unicode
 * fromCharCode() - 根据Unicode编码去获取字符
 * concat() - 可以用来连接两个或多个字符串，作用和 + 一样，但是不修改原字符串，而是返回新字符串
 * indexof() - 返回第一次出现的指定元素的索引，没有元素返回-1，可指定起始位置（第二个参数，可选）
 * lastIndexOf() - 反着找
 * match(), replace(), search() - 配合正则表达式使用
 * slice() - 提取指定内容，不影响原字符串，而是将提取的内容返回，参数（包括开始位置，不包括结束位置（可选）），可以传递负数作为参数
 * substring() - 和slice()类似，不同的是这个方法不能接受负数作为参数，如果传递了负数，则默认使用0
 *               而且会自动调整参数的位置，如果第二个参数小于第一个参数，则自动交换 
 * substr() - 用来截取字符串，参数：起始位置，截取长度，对原数组没有影响
 * split() - 可以结合正则表达式使用，可以将一个字符串拆分为一个数组，差不多和join()相反，需要一个字符串作为参数，根据这个字符串去拆分数组
 *         - 如果传递一个空串作为参数，则会将每一个字符都拆分成字符串中的元素
 * toLowerCase() - 将一个字符串转换为小写，不影响原字符串
 * toUpperCase() - 类似但相反 
 */

/* 85-86.正则表达式
 *   - 可以用来检查一个字符串是否符合规则，或者将字符串中符合规则的内容提取出来，严格区分大小写
创建方法
 * var reg = new RegExp("正则表达式","匹配模式"); 构造函数更灵活，因为传参可以穿变量或字符串
 * 也可以使用字面量 var reg = /正则表达式/匹配模式; 字面量方法更简单，但是写死了
 * 
 * 
 * 第二个参数：可以是 i 忽略大小写，g 全局匹配模式
 * 使用typeof检查正则对象会返回Object
 * 对象中除了function 使用typeof检查返回function,其他都返回Object
 * 
 * 测试方法：test(),如果符合则返回true,否和返回false
 * reg.test(str)
 * 
 * 正则表达式的更多检查方法：
 * reg = /a|b|c/; a或b或c
 * reg = /[a-z]/; 也是或, a或b或c...或z
 * reg = /[A-Za-z]|/;大小写任意字母
 * reg = /a[bde]c/; abc或adc或aec
 * reg = /[^ab]/; [^ ]表示除了ab以外，可以有ab
 * reg = /[0-9]/
 * reg = /[^0-9]/
 */

/* 87.字符串与正则表达式相关的方法
 * split() - 可以传入正则表达式，这个方法即使不指定全局匹配，也会全部拆分
 *         - i.e.: str.split(/[A-Za-z]/); //根据所有的字母拆分
 * 
 * search() - 可以搜索字符串中是否含有指定内容，search不能全局匹配，即使设置全局匹配也只能查找第一个
 *          - 如果搜索到指定内容，则会出现第一次出现的索引，如果没有搜索到返回-1
 *          - 参数为子字符串或正则表达式，可以接受正则表达式
 *          - i.e.: str.search(/a[bef]c/)
 * match() - 根据正则表达式，从一个字符串中将符合条件的内容提取出来
 *         - match()会将匹配到的内容封装到一个数组中返回，即使之查询到一个结果
 *         - 默认模式下match只会找到第一个符合要求的内容，但可以设置正则表达式的全局匹配模式，这样就会匹配到所有的内容
 *         - 可以为一个正则表达式设置多个匹配模式，且顺序无所谓
 *         - i.e.: str.match(/[A-Za-z]/g);
 * replace() - 替换指定内容为新内容，默认只会替换第一个，可以接受一个正则表达式作为参数，并使用全局匹配模式
 *           - 参数：1.被替换的内容，字符串或正则表达式 2.新的内容
 *           - i.e.: str.replace(/[a-z]/gi,"")
 */

/* 88. 正则表达式语法 
 * var reg = /a{9}/ 量词，通过量词可以设置一个内容出现的次数
 * var reg = /ab{3}/ 量词支队他前边的一个内容起作用
 * var reg = /(ab){3}/ ababab
 * var reg = /a{1,3}/ a出现1次到3次
 * var reg = /a{3,}/ a出现3次及以上
 * var reg = /ab+c/ a(至少一个b)c
 * var reg = /ab*c/ a(0个或多个b)c
 * var reg = /ab?c/ a(0个或1个b)c
 * var reg = /^a/ 以a开头
 * var reg = /a$/ 以a结尾
 * var reg = /^a$/ a既是开头又是结尾，只有一个a
 * var reg = /^a|a$/ 以a开头或结尾
 * 
 * /./ 任意字符
 * /\./ 使用转义字符查找"."
 * /\\/ 使用转义字符查找"\"，在字符串中也需要用"\\"来代表"\"
 * /\w/ 代表任意字母、数字、_    相当于[A-Za-z0-9_]
 * /\W/ 除了任意字母、数字、_    相当于[^A-Za-z0-9_]
 * /\d/ 任意数字
 * /\D/ 除了任意数字
 * /\s/ 空格
 * /\S/ 除了空格
 * /\b/ 单词边界 比如children不能算是child
 * /\B/ 除了单词边界
 * 
 * /^\s*|\s*$/g q 去掉开头或结尾的多个空格
 */

/* 90-100.电子邮件的正则表达式
 * /^\w{3,}(\.\w+)*@[A-Za-z0-9]\.([A-Za-z]{2,5}){1,2}$/
 */

/* 91.宿主对象:DOM (Document Object Model) 和 BOM
 * DOM就是让我们随心所欲的操作网页的
 *
 * document 对象是 window 的属性
 * nodeName, nodeType, nodeValue
 * 
 * 事件 event - 就是文档和浏览器窗口中发生的一些特定的交互瞬间，所有的操作都是事件
 *            - 写事件处理函数要解耦合
 *              i.e.:
 *              var btn = document.getElementById("btn");
 *              btn.onclick = function(){};
 * 
 * 在执行js的时候html必须加载完毕，所以js代码一般写在页面下面，或者写在页面上面使用 onload
 * window.onload = function(){ callbkfn(); }; 确保回调函数在整个页面加载完成之后再执行
 * 
 * 追求性能写下面，html加载快，但差距不大
 * 
 * 通过document获取元素：
 * getElementById()
 * getElementsByTagName() - 返回一个类数组对象，即使只查询到一个元素，可以用于for循环遍历数组
 * getElementsByName()
 * 
 * 如果想要获取元素的属性使用 元素.属性名
 * 唯独class属性不能采用这种方式，因为class是js中的关键字，要用className
 * 
 * 通过元素节点获取元素节点
 * 方法：
 * getElementsByTagName() - 返回当前节点的后代节点 x.getElementsByTagName();
 * 属性：
 * 1·childNodes - IE8没有空白子节点，有兼容性问题
 * 2.children - 获取当前元素的所有子元素，推荐方法
 * 3.firstChild - 可以获取当前元素的第一个子节点，包括空白文本节点
 * 4.firstElementChild - 可以获取当前元素的第一个子元素，不推荐，有IE8兼容问题
 * 5.lastChild - 可以获取当前元素的最后一个子节点，包括空白文本节点
 * 
 * 获取父节点和兄弟节点
 * 属性
 * 1.parentNode
 * 2.previousSiblings - 也可能会获取空白文本
 * 3.previousElementSibiling - 不获取空白文本，但是不兼容IE8
 * 4.nextSiblings
 * 
 * innerText和innerHTML类似，只是innerText不包含标签
 */

/* 101. DOM其他查询方法
 *
 * var body = document.body;
 * var html = document.documentElement; HTML跟标签
 * var all = document.all; 页面里面的所有的元素，有length,可以遍历，但是显示为undefined, typeof 也是 undefined
 * var all = document.getElementsByTagName("*"); 页面里面的所有的元素，有length,可以遍历，但是显示为undefined, typeof 也是 undefined
 * 
 * 根据class查询
 * document.getElementsByClassName(); - 不兼容IE8以下的浏览器
 * 
 * document.querySelector();很好用
 * - 需要一个选择器的字符串作为参数，可以根据一个CSS选择器来查询一个元素节点对象
 * - var div = document.querySelector(".box1 div");
 * - IE8也支持，虽然IE8中没有getElementsByClassNam(),但是可以使用querySelector()代替
 * - 使用该方法总会返回唯一的元素，如果满足条件的元素有多个，只会返回第一个
 * 使用document.querySelectorAll();来获取多个, 返回一个类数组？/数组？，支持IE8及以上
 */

/* 102. DOM 增删改
 * 
 * 创建元素节点对象 x = document.createElement("xxx");
 * 创建文本节点对象 y = document.createTextNode("yyy");
 * 向一个父节点中添加子节点 x.appendChild(y); body.appendChild(x);
 * 
 * 在指定的子节点前面插入新的子节点 父节点调用 insertBefore();需要两个参数：新节点，旧节点
 * 使用指定的子节点替换已有的子节点 父节点调用 replaceChild();需要两个参数: 新节点，旧节点
 * 删除子节点 父节点调用 removeChild(子节点);
 * i.e.: x.parentNode.removeChild(x);
 * 
 * var li = document.createElement("li");
 * li.innerHTML = "广州";
 * x.appendChild(li); 这是常用的方法，但是其他方法也要会
 */

/* 103-105.增删改练习 
 *
 * 使用超链接实现删除功能：
 * 获得<a>数组
 * for循环
 * 取消默认行为, 禁止跳转页面, 在响应函数的最后返回return false; 或在<a>的href中添加javascript:; ？？？
 * for 中的函数只能用this，for中的函数中不能用x[i]因为函数在被点击执行的那一刻for循环已经循环完毕,此时的i等于x.length，因为每一个循环都是对象call的
 * 点击超链接以后删除超链接所在的那行 var tr = this.parentNode.parentNode; tr.parentNode.removeChile(tr);
 * 可以使用confirm()确认
 * 
 * 
 * 
 */

/* 106. a的索引问题
 * for 中的函数只能用this，for中的函数中不能用x[i]因为函数在被点击执行的那一刻for循环已经循环完毕,此时的i等于x.length，因为每一个循环都是对象call的
 */

/* 107-109. 使用 DOM 来操作 CSS 修改和读取内联样式 以及 修改和读取当前显示的样式
 * 
 * 1.固定语法：元素.style.样式名 = 样式值
 * 此方法什么样式都行，修改和读取的是内联样式，如果没有内联样式则读不到，修改内联样式后拥有较高的优先级，所以修改的样式往往会立即显示，但是无法超过!important。 但是要注意命名，连字符应该被换成驼峰命名法
 * background-color -> backgroundColor
 * 可以参考文档
 * 
 * 2.读取（只读，不能修改）当前正在显示的样式 //只有IE支持
 * 语法：元素.currentStyle.样式名 
 * 如果当前元素没有设置改样式，则获取他的默认值
 * 
 * 3.在其他浏览器中（只读，不能修改） //正常浏览器的方式，不支持IE8及以下的浏览器
 *  可以使用getComputedStyle()这个方法来获取当前元素的样式
 *  这个方法是window的方法，可以直接使用
 *  需要两个参数：1.要获取样式的元素 2.可以传递一个伪元素，一般都传null
 *  该方法会返回一个对象，对象中封装了当前元素对应的样式
 *  i.e.: getComputedStyle(box1,null).width
 *  可以通过对象.样式名来去读样式
 *  如果获取的央视没有设置，则会获取到真实的值，而不是默认值
 *  比如：没有设置width，他不会获取auto，而是一个长度
 * 
 *  offsetWidth？
 * 
 *  如何即兼容正常浏览器，又支持IE8
 *  定义一个函数，用来获取指定元素的当前样式
 *  参数：
 *      obj 要获取样式的元素
 *      name 要获取的样式名
 * 
 *  function getStyle(obj , name){
 *      if(window.getComputedStyle){ //变量，即getComputedStyle,没找到报错，而属性，即window.getComputedStyle则返回undefined
 *          return getComputedStyle(obj , null)[name];
 *      }else{
 *          return obj.currentStyle[name];
 *      }
 *  }
 */

/* 110. 其他样式相关的属性
 * element.clientWidth - 不带px，仅仅是数字，包括内容区和内边距，只读的
 * element.clientHeight - 不带px,仅仅是数字，包括内容区和内边距，只读的
 * element.offsetWidth - 不带px，仅仅是数字，包括内容区和内边距和边框，只读的
 * element.offsetParent - 可以用来获取当前元素的定位元素，会获取到里当前元素最近的开启了定位的祖先元素，如果所有的祖先元素都没有开启定位，则返回body
 * element.offsetLeft - 当前元素相对于其定位父元素的水平偏移量
 * element.offsetTop - 当前元素相对于其定位父元素的垂直偏移量
 * element.scrollHeight - 整个滚动区域的高度
 * element.scrollWidth - 整个滚动区域的宽度
 * element.scrollLeft - 水平滚动条滚动的距离
 * element.scrollTop - 垂直滚动条滚动的距离
 * 
 * 当满足scrollHeight - scrollTop == clientHeight的时候 说明垂直滚动条滚动到底了
 * 当满足 scrollWidth - scrollLeft == clientWidth的时候 说明水平滚动条滚动到底了
 * 
 */

/* 111.事件对象 
 * 
 * onmousemove - 该事件会在鼠标移动时触发
 * 
 * 事件对象 
 * - 当事件的响应函数，浏览器每次都会将一个事件对象作为实参传递进响应函数
 * - 在这个事件对象中封装了当前事件相关的一些信息，比如；鼠标坐标，键盘哪个键被按下，鼠标滚轮滚动的方向。。。
 * i.e.: x.onmousemove = function(e){};
 * 
 * 兼容性:IE8不兼容
 * IE8中 event 是undefined
 * 因为响应函数被触发时，浏览器不会传递事件对象，
 * 在IE8及以下的浏览器中，是将事件对象作为window对象的属性保存的,也就是window.event
 * 
 * 所以：
 * 写法一
 * if(!event){
 *      event = window.event
 * }
 * 
 * 写法二
 * event = event || window.event
 * 
 */

/* 112. div跟随师表移动
 * 
 */

/* 113.事件冒泡 //没有兼容性问题
 * 绑定在后代元素的事件被触发时，会向上传导，其祖先元素的相同事件也会被触发
 * 在开发中，在大部分情况下，事件冒泡是有用的
 * 
 * 如果不希望发生冒泡
 * 可以通过事件对象来取消冒泡
 * event.cancelBuble = true;
 */

/* 114.事件的委派 
 * - 把事件处理函数统一绑定给共同的祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素
 * - 事件委派是利用了冒泡，通过委派可以减少事件绑定的次数，提高程序的性能
 * - 如果触发事件的对象是我们期望的元素就执行，否则不执行
 * 
 *  event 中的 target - 返回触发此事件的元素
 */

/* 115.事件的绑定 
 *
 * btn.onclick = function(){}; 此方法的小的局限：使用此方法无法绑定第二个及以上个事件触发函数，如果绑定了多个，后边的会覆盖点前边的，只有最后一个生效
 * 解决方案：可以使用监听器方法
 * btn.addEventListener() 他的this是绑定事件的对象
 * 参数：1事件的字符串，不要on，比如"click",而不是"onclick" 2.回调函数，当事件触发时函数会被调用3.是否在捕获阶段触发事件(关于js的addeventlistener什么叫做在捕获阶段触发事件???)，需要一个布尔值，一般都传false
 * 使用此方法，可以同时为一个元素的相同事件同时绑定多个响应函数
 * 这样当时间被触发时，响应函数将会按照函数的绑定顺序执行
 * 这个方法，IE8及以下的浏览器不支持
 * IE8提供了其他的类似的方法
 * btn.attachEvent(); 但他的this是window
 * 参数：1.事件的字符串，要on，比如"onclick" 2.回调函数
 * 这个方法也可以同时为一个事件绑定多个处理函数，
 * 不同的是他是后绑定先执行，执行顺序和addEventListener()相反
 * 一般不在乎顺序，如果强调顺序就把多个响应函数写成一个函数
 */

/* 116.事件的绑定的全兼容函数
 * 同时要考虑this
 * btn.addEventListener(); 他的this是绑定事件的对象
 * btn.attachEvent(); 但他的this是window
 * 
 * 
* function bind (obj, eventStr, callback) {
 *  if(obj.addEventListener){
 *      大部分浏览器兼容的方式
 *      obj.addEventListener(eventStr, callback, false)};
 *  }else{
 *      IE8及以下
 *  obj.attachEvent("on"+eventStr, function(
 *      使用匿名函数调用callback()函数而不直接使用callback作为回调函数的原因是
 *      这样callback就是我们自己调用的，而不是浏览器，于是我们可以修改callback的this
 *      callback.call(obj)
 *      此时callback函数的this就是obj绑定事件的对象了，而不是window了
 *  ));
 * }
 */

/* 117.事件的传播
 *
 * 关于事件的传播，网景公司和微软公司有不同的理解
 * 微软公司认为事件应该是由内向外传播，也就是先出发当前元素上的事件，然后再向当前元素的祖先元素上传播，也就说时间应该在冒泡阶段执行
 * 网景公司认为事件应该是由外向内传播的，也就是当前事件触发时，应该先触发当前元素的最外层的祖先元素的事件，然后再向内传播给后代元素
 * 
 * W3c说了算，他采取了一种中立的方式，综合了两个公司的方案，将事件的传播分成了三个阶段
 * 1. 捕获阶段 - 在捕获阶段时，由最外层的祖先元素向目标元素进行事件的捕获，但是默认此时不会触发事件，W3s设置由dom开始捕获，大部分浏览器都是从浏览器开始捕获，一直捕获到目标阶段
 * 2. 目标阶段（中间阶段） - 事件捕获到目标，捕获结束开始在目标阶段元素上触发事件
 * 3. 冒泡阶段 - 事件从目标元素向他的祖先元素传递，分别依次触发祖先元素上的事件
 * - 如果希望在捕获阶段就触发事件，可以设置addEventListener()的第三个参数设置为true，一般情况下我们不会希望在捕获阶段触发事件，所以这个参数一般都是false
 * -在IE8一下的浏览器没有捕获事件 
 * 
 * 注意，兄弟关系即使层叠不能冒泡，必须是祖先元素和子元素上下级关系才能冒泡
 */

/* 118-120.拖拽 
 *
 * 拖拽的业务流程:
 * 1. 当鼠标被拖拽元素上按下时，开始拖拽。
 * 2. 当鼠标移动式，被拖拽元素跟随鼠标移动
 * 3. 当鼠标松开时，被拖拽元素固定在当前元素
 * 这对应了三个事件：鼠标按下onmousedown，鼠标移动onmousemove，鼠标松开onmouseup
 * 
 * 获取
 * //为box1绑定一个鼠标按下事件
 * box1 = document.getElementById("box1");
 * box1.onmousedown = function (event){
 *  //alert("鼠标按下，开始拖拽")
 *  //onmousemove要给document绑定而不是给box1绑定,因为这样可以确保在鼠标移动时始终能够捕获到事件，即使鼠标超出了被拖动的元素的范围。如果将onmousemove绑定到被拖动的元素，当鼠标移出该元素后，就无法再继续捕获mousemove事件，导致拖拽功能无法正常工作。将onmousemove绑定到document或window等全局对象上，可以确保无论鼠标移动到哪里，都能够继续捕获到鼠标移动事件。
 * 
 *  if(box1.setCapture){
 *      box1.setCapture();
 * }
 * //或者，box1.setCapture && box1.setCapture(); 与上面代码意思一样
 * 
 *  event = event || window.event //这行代码的目的是为了确保在不同浏览器中正确地获取事件对象。在早期的IE浏览器中，事件对象是作为window.event的属性存在的。而在其他现代浏览器中，事件对象作为事件处理函数的第一个参数传递进来。
 *  let ol = (event.clientX - box1.offsetLeft) 
 *  let ot = (event.clientY - box1.offetTop)
 *  document.onmousemove = function(){
 *      
 *  //接下来获取鼠标的元素
 *  var left = event.clientX - ol;
 *  var top = event.clientY - ot;
 * 
 *  //修改box1的位置
 *  box1.style.left = left+"px";
 *  box1.style.top = right+"px";
 *  }
 * 
 *  //为元素绑定一个鼠标松开事件
 *  document.onmouseup = function(){ //给document绑定而不是给事件元素绑定，因为防止鼠标松在其他元素上，比如和覆盖了子元素得其他层叠元素
 *  //当鼠标送开始被拖拽元素固定在当前位置onmouseup 
 *  //取消document得onmousemove事件
 *  document.onmousemove = null;
 *  document.onmouseup = null;
 *  box1.releaseCapture && box1.releaseCapture();
 *  }
 * 
 *  return false; //取消浏览器默认行为，如全选再拖拽把其他元素也拖拽了，但是这招对IE8不起作用，对IE8 使用 box1.setCapture()捕获事件，放在onmousedown函数最上边捕获，然后再鼠标松开的时候在onmouseup里 使用box1.releaseCapture() cancel捕获。但这个方法在火狐不会报错，在chrome里会报错，会影响chrome的点击功能，所以要判断一下。
 * }
 * 
 * 可以将上面的功能包在一个函数里，传参element对象，然后对任何element开启拖拽，如：
 * drag(box1); 
 */

/* 121.滚轮事件 
 *
 * window.onload = function(){
 * 
 * var box1 = document.getElementByid("box1");
 * 
 * 
 * 
 * box1.onmousewheel = function(event){ //这个事件，火狐不支持该属性，火狐中使用DOMMouseScroll来绑定滚动事件，该事件需要通过addEventListener()函数来绑定
 *      alert("鼠标滚轮滚动了")
 *      event = event || window.event;
 *      event.wheelDelta; //可以获取滚轮滚动的方向，向上滚 120 向下滚 -120，这个值不看大小，只看正负 
 *      //但是火狐不支持这个属性
 *      //火狐中用event.detail
 *      //向上滚是 -3，向下滚是3
 * 
 *      if(event.wheelDelta > 0 || event.detail < 0){
 *          alert("向上滚，box1变短")
 *          box1.style.height = box1.clientHeight - 10 + "px";
 *      }eles{
 *          alert("向下滚，box1边长")
 *          box1.style.height = box1.clientHeight + 10 + "px";
 *      }
 * 
 *      //当滚轮滚动时如果浏览器有滚动条会随之滚动
 *      //这是浏览器的默认行为，如果不希望发生，则取消默认行文，使用return false
 *      //但是在火狐中，因为使用addEventListener()方法绑定响应函数，取消默认行为时不能使用return false
 *      //需要使用event来取消默认行为, event.preventDefault(); 此方法就是针对addEventListener()来取消默认行为的
 *      //IE8不支持event.preventDefault();
 *      //所以 event.preventDefault && even.preventDefault();
 * } ;
 * 
 * bind(box1,"DOMMouseScroll",box1.onmousewheel) //为火狐绑定 
 * } 
 */

/* 122-123
.键盘事件 
 *
 * onkeydown 
 *  - 按键被松开
 *  - 如果一直按着某个按键不松手，则事件会一直触发
 *  - 当onkeydown连续触发时，也就是按住一个按键不放时，第一次和第二次之间会有间隔时间，之后会一直连续出发，浏览器这样设置是为了防止误操作
 * onkeyup - 按键被按下
 * 
 * 键盘事件一般都会绑定给一些可以获取到焦点的对象或者是document, 不是所有element都可以绑定键盘事件
 * 
 * document.onkeydown = function(event){
 *      event = event || window.event; 
 *      
 *      console.log("按键被按下了，event.keyCode") //可以通过keyCode获取按键编码，知道是哪个按键被按下
 *      if(event.keyCode === 89){
 *      console.log("y被按下了")
 * }
 * 
 *      //如何判断y和control是否同时被按下，可以使用event中的其他属性:altKey,ctrlKey,shiftKey返回true 或者 false
 *      if(event.keyCode === 89 && event.ctrlKey)
 *          console.log("ctrl和y都被按下了");
 *      }
 * 
 * document.onkeyup = function(){
 *      console.log("按键被松开了")
 * }
 * 
 * && || 和 & | 的区别？？？
 * 
 * input.onkeydown = function(){
 *      event = event || window.event;
 *      console.log("按键被按下了");
 * 
 *      //return false //在文本框中输入内容属于onkeydown的默认行为，如果在onkeydown中取消了默认行为，则输入的内容，不会出现在文本框中
 *      //如何让文本框中只能输入字母，不能输入数字？
 *      if(event.keyCode >=48 && event.keyCode <= 57){
 *          return false; //使输入框不能输入数字
 *      }
 * }
 * 
 * 用键盘控制div
 * window.onload = function(){
 *      //为document绑定一个键盘按下的事件
 *      document.onkeydown = function(event) {
 *          event = event || window.event;
 *          var speed = 10;
 *          if(event.ctrlKey){
 *              speed = 50;
 *          }
 *          // 左 37 上 38 右 39 下 40
 *          swith(event.keyCode){
 *              case 37:
 *                  alert("向左");
 *                  box1.style.left = box1.offsetleft- speed + "px";
 *                  break;
 *              case 38:
 *                  ...
 *                  break;
 *              case 39:
 *                  ...
 *                  break;
 *              case 40:
 *                  ...
 *                  break;
 *          }
 *      }
 * } 
 */

/*124. js navigator 
 *
 * BOM - browser object model 浏览器也是一个对象
 * BOM可以使我们通过js来操作浏览器
 * 在BOM中为我们提供了一组对象，用来完成对浏览器的操作
 * - BOM对象
 *      window
 *          - 代表的使整个浏览器的窗口，同时window也是网页中的全局对象
 *      navigator
 *          - 代表当前浏览器的信息，通过该对象可以来识别不同的浏览器
 *      location
 *          -代表当前浏览器的地址栏信息，通过Location可以获取地址栏信息，或者操作浏览器跳转页面
 *      history
 *          - 代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录
 *          - 由于隐私的原因，该对象不能获取具体的历史记录，只能用于向前或向后翻页，而且该操作只在当次访问有效
 *      screen(用的不多)
 *          - 代表用户的屏幕信息，通过该对象可以获取到用户的显示器的相关信息
 * - 都是window的属性，也可以当作全局变量来获取
 *          navigator
 *          window.navigator
 * - 由于历史原因 navigator 中的大部分属性已经不能判断不同的浏览器
 *      只有userAgent还能用，也不好用（因为在IE11中已经将与微软相关的标识都去除了），返回一个字符串，字符串包含浏览器信息，不同的浏览器含有不同的userAgent
 *      如果不能通过userAgent来判断，我们可以用过浏览器中特有的对象来判断浏览器
 *      比如currentStyle, attchEvent, ActiveXObject(IE4、5就有了)，使用if(window.ActiveXObject),使用window,因为这样会返回undefined，而不是报错
 *      但这个方法在IE11不兼容，会让这个方法返回false，
 *      所以使用if("ActiveXObject" in window)方法 //检查一个对象里是否包含一个属性，传一个字符串
 */

/*
105. JS history
history里有属性和方法
length属性：获取当次访问的链接数量
back()方法：可以用来回退到上一个页面
forward()方法：前进到下一个页面
go()方法：跳转到指定的页面，他需要一个整数作为参数，1，表示向前跳转一个页面，，2表示向前跳转2个页面，-1，表示向后跳转一个页面
*/

/* 
106.location
封装了当前浏览器的地址栏的信息、
直接打印location就可以获取/修改地址栏的信息（当前页面的完整路径）
修改location会自动跳转到改路径，并生成相应的历史记录

location有一些属性和方法
很多location属性和url中的查询字符串有关
location的方法
assign() 用来跳转到其他页面，作用等于直接修改location
reload()重新加载当前页面，作用等于刷新按钮
reload(true)前置清空缓存刷新
replace()可以使用新的页面替换当前页面，也会跳转，但无法回退，因为没有产生历史记录，这是和assign()的区别
 */
/* 
127. 定时器介绍

window 对象用的比较多
setInterval() 
setTimeout()
clearInterval()
clearTimeout()

setInterval() - 如果希望一段程序，可以每间隔一段时间执行依次，可以使用定时调用。参数：1.回调函数，2.间隔毫秒。相当于一个放慢了速度/可以调整速度的for循环
返回值，返回一个数字类型，这个数字会作为定时器的唯一标识。clearInterval()可以用来关闭定时器，传入这个定时器的唯一标准是作为参数。
在定时器回调函数中设置关闭定时器时的if条件判断
setTimeout()
clearInterval() - 可以接受任意参数,undefined,null也可以，如果参数是有效的定时器标识，则停止对应的定时器，如果是无效的参数，则不做任何事情
clearTimeout()
*/

/* 
128. 可以自动切换的图片轮播图

*/

/* 
129. 修改移动div
*/

/* 
130.  延时调用
setTimeout - 一个函数不马上执行，而是隔一段时间以后再执行，而且只会执行依次
clearTimeout - 关闭延时调用

延时调用和定时调用实际上是可以互相代替的，在开发中可以根据情况选择
*/

/* 
131 - 133. 定时器的应用
*/

/* 
134 - 135. 轮播图
*/

/* 复习，总结此笔记并写成markdown, 不懂得视频再看一遍，可能要着重看100-115 DOM操作
 * dom操作增删改查常用方法/函数/框架/实用技巧/固定搭配练习和记录？
 * 提交表单的两种方式练习和记录？其他方式？
 * postman crush course
 * 表格增删改查练习？
 * flex box 练习和记录？
 * grid 练习和记录？
 * 写HTML的时候什么时候使用什么标签以搭配html固定/常用框架？
 * js DOM 实战常用函数/框架/实用技巧/固定搭配练习和记录？
 * dom中for循环的常用场景练习和记录？
 * css 实战常用方法/函数/框架/实用技巧/固定搭配练习和记录？
 * 50 个小练习？
 * js红宝书
 * 聊一聊Cookies和Sessions有啥区别 https://www.xiaohongshu.com/explore/65858dd9000000000901c78d
 * 51道docker常见面试题【附答案 https://www.xiaohongshu.com/explore/6569937900000000060223c2
 * google warm outreach, "Warm outreach" 是一种商务术语，通常用于描述一种更为友好和个性化的联系方式，与冷冻或冷淡的接触方式相对。这种联系方式旨在建立更紧密的关系，提高沟通的效果。在销售和营销领域，"warm outreach" 意味着与潜在客户建立起一些联系或关系，以便在联系时有一种更亲近和信任的感觉。这可以通过在社交媒体上互动、共同的利益或朋友关系等方式来实现。相比之下，"cold outreach" 是指没有先建立关系的销售或联系方式，通常是向未经邀请的潜在客户发送电子邮件、电话等消息。在进行商务活动时，采用温暖的接触方式通常更容易引起对方的兴趣，并提高建立业务关系的成功率。
 * Use Loom to Make LinkedIn Videos - Without Being on Camera https://www.youtube.com/watch?v=3_VLR-QLLe4
 * How to use Loom for introductions https://support.loom.com/hc/en-us/articles/4408147015185-How-to-use-Loom-for-introductions
 * google linkedin loom video intros
 * 什么是K8S(Kubernetes)? https://www.xiaohongshu.com/explore/65803257000000003403d2cc
 * 什么是Docker容器? https://www.xiaohongshu.com/explore/657b28b000000000380345a9
 * jr-fullstack-notes-20 Public https://github.com/LazeBear/jr-fullstack-notes-20/tree/master
 * 什么是OOP(面向对象编程)？ https://www.xiaohongshu.com/explore/65850909000000003c013f7c
 */

