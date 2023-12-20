# JS OOP
## Description:
A simple guide to js oop programming

[JS OOP Crash Course](https://www.youtube.com/watch?v=vDJpGenyHaA)

## Basic Literals?
in js almost everything is an object  
ans some are primitives: string, number, boolean  
but you can use method on them  
Example  
```js
const s1 = 'Hello';
console.log(type s1); //string

const s2 = new String('Hello');
console.log(type s2); //object


## what an object is?

console.log(window) // parent object of everything in DOM

```
Object literals
```js
    //Example
    const book1 = { //object literal
        title: 'Book One',
        author: 'John Doe',
        year: '2013'

        getSummary: function() {
            return `${this.title} was written by ${this.author} in ${this.year}`;
        }
    }

    console.log(book1.getSummary());

    const book2 = { //object literal
        title: 'Book Two',
        author: 'Jane Doe',
        year: '2016'

        getSummary: function() {
            return `${this.title} was written by ${this.author} in ${this.year}`;
        }
    }

    console.log(book2.getSummary());

    // object 的 key value pair
    console.log(Object.value(book2));//返回一个array with all the values in side
    console.log(Object.key(book2));//返回一个array with all the keys in side

```

## ES5 Constructor Functions
创造上面两个类似的对象，可以使用constructor function  
It is basically just a function in ES5
```js
function Book(title, author ,year){
    this.title = title;
    this.author = author;
    this.year = year;

    prototype.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;

    }
}

const book1 = new Book('Book One', 'John Doe', '2013'); // Instantiate 的同时constructor will run 实例化的同时，构造函数也会执行
const book2 = new Book('Book Two', 'Jane Doe', '2016'); // Instantiate 的同时constructor will run 实例化的同时，构造函数也会执行

console.log(book1.title);
```

## Inheritance
```js
function Book(title, author ,year){
    this.title = title;
    this.author = author;
    this.year = year;

    prototype.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Magazine Constructor, Inherit from Book
function Magazine(title, author ,year, month){
    book.call(this, title, author ,year);
    this.month = month; 
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'Jone Doe','2018', 'jan')

// Use Magazine Constructor
Magainze.prototype.constructor = Magazine;

console.log(mag1.getSummary());
```

## Object Create
```js
// Object Of Protos
const bookProtos = {
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Create Object 第一种方法
// const book = Object.create(bookProtos);
// boot1.title = 'Book One';
// boot1.author = 'John Doe';
// boot1.year = '2013';

// Create Object 第二种方法
const book1 = Object.create(bookProtos, {
    title: { value: 'Book One' },
    author: { value: 'John Doe' },
    year: { value: '2013' }
})

console.log(book1);
```

## ES6 Class - Syntax Sugar
```js
    class Book {
        constructor(title, book, year){
            this.title = title;
            this.book = book;
            this.year = year;
        }

        getSummary(){
            return `${this.title} was written by ${this.author} in ${this.year}`;
        }

        //static method - 不需要实例化
        static topBookStore(){
            return 'Barne & Noble';
        }
    }

    // Instantiate Object
    const book1 = new Book('Book One', 'John Doe', '2013')

    console.log(book1)
    
    console.log(Book.topBookStore();)

```

## Subclasses
```js
// Magazine Subclass
class Magazine extends Book {
    constructor(title, author, year, month){
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate Magazine
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

console.log(mag1);
console.log(mag1.getSummary());

```


