"use strict";
// data type and any
let boo = "String";
let boo2 = 1;
let boo3 = true;
let boo4 = "String";
boo4 = 1;
let boo5;
boo5 = 1;
// array type and any
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
arr2.push(4);
console.log('ID:', boo);
// Tuple
let person = [1, "ray", true];
// Tuple Array
let employee = [
    [1, "ray"],
    [1, "ray"],
    [1, "ray"]
];
// Unions
let boo6 = 1;
boo6 = "string";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "ray"
};
// type assertion
let cid = 1;
// way 1
// let xxx = cid as number;
// way2
let xxx = cid;
// Function
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "ray"
};
let point = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    //  job?: string
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(1, 2, 3);
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const bread = new Person(1, "ray");
// subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "ray", "Full Stack Developer");
// Generics
/*
function getArray(items: any[]): any[] {
  return new Array().concat(items)
}

let numArray = getArray([1, 2, 3, 4])
let strArray = getArray(["brad", "john", "jill"])
*/
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "john", "jill"]);
