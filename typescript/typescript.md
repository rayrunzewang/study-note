# Typescript
The second most loved language
## Description
- The main reason to use TS: to add static types into JS (dynamically typed language).
  - statically typed language: Java, C, C++, Rust, Go
  - dynamically typed language: JS, Python, Ruby, PHP

## Table of Content
## Install
- could be either globally or locally
- `npm i -g typescript`
- 检查安装或版本：`tsc -v`
- `npm i -g typescript` on windows
- on window, use `tsc.cmd`
- `tsc.cmd` is the complier, by defalut compile to es5, you can change it in tsconfig.js
- you can `tsc.cmd --init` and use tsconfig.js to config ts
- `tsc.cmd --watch` can watch your syntax, while coding
- next.js and react.js allow you use ts without extra setup
  - target:
    - ES5 
    - ES6
  - module: 
    - commonjs 
    - es2015
  - ourDir: "./dist"
  - rootDir: "./src"
## code
```ts
// data type and any
let boo: string = "String";
let boo2: number = 1;
let boo3: boolean = true;

let boo4: any = "String";
boo4 = 1

let boo5: number;
boo5 = 1;

// array type and any
let arr1: any[] = [1, 2, 3];

let arr2: number[] = [1, 2, 3];
arr2.push(4)

console.log('ID:', boo);

// Tuple
let person: [number, string, boolean] = [1, "ray", true];
// Tuple Array
let employee: [number, string][] = [
  [1, "ray"],
  [1, "ray"],
  [1, "ray"]
];
// Unions
let boo6: string | number = 1;
boo6 = "string";
// Enum
enum Direction1 {
  Up = 1, // by default it is 0
  Down,
  Left,
  Right
}
enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right"
}

// Object
type User = {
  readonly id: number,
  name: string,
  age?: number
}

const user: User = {
  id: 1,
  name: "ray"
}

// type assertion
let cid: any = 1;
// way 1
// let xxx = cid as number;
// way2
let xxx = <number>cid;

// Function
function addNum(x: number, y: number): number {
  return x + y
}

console.log(addNum(1, 2))

function log(message: string | number): void {
  console.log(message)
}

// Interfaces, simliar with customised type
type UserInterface = {
  readonly id: number,
  name: string,
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: "ray"
}
// difference btw customised type and interface
type Point = number | string; // customised type 可以用于 union, 但是 interface不行
let point = 1;
// interface normally will be use for Object anf Function
interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Class

type PersonInterface = {
  id: number,
  name: string,
  register(): string
}

class Person implements PersonInterface {
  id: number
  name: string
  //  job?: string

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    console.log(1, 2, 3)
  }

  register() {
    return `${this.name} is now registered`
  }
}

const bread = new Person(1, "ray");
// subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}
const emp = new Employee(3, "ray", "Full Stack Developer")

// Generics
/* 
function getArray(items: any[]): any[] {
  return new Array().concat(items)
}

let numArray = getArray([1, 2, 3, 4])
let strArray = getArray(["brad", "john", "jill"])
*/
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(["brad", "john", "jill"])


```
## typescript with react
`npx create-react-app . --template typescript
`
##
##
##
##
##
##
##