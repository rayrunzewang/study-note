# Async_JS

## Callback

```js
// Callback Example
const posts = [
  { title:"post one", body:"This is post one" },
  { title:"post two", body:"This is post two" }
]

function getPosts() {
  setTimeout(()=>{
    let output = "";
    posts.forEach((post, index)=>{
      output.append += `<li>${post.title}</li>`;
      document.body.innerHTML = output;

    })
  }, 1000);
}

function createPost(post, /* callback */){
  setTimeout(()=>{
    posts.put(post);
    
    /* callback() */
  }, 2000);
}

getPost();
createPost({title:"post three", body:"This is post three"}, /* getPost*/);

// -> post one
// -> post two

// 这段代码的逻辑是，因为createPost()第三篇post的时候延迟两秒执行
// 而getPost()延迟一秒执行，所以先返回了两篇post，才加入了第三篇post
// 解决办法是在createPost()里加入callback参数并在调用的时候传入getPost()

// -> post one
// -> post two
// -> post three
```

## Promise
### Promise
```js
// Promise Example
const posts = [
  { title:"post one", body:"This is post one" },
  { title:"post two", body:"This is post two" }
]

function getPosts() {
  setTimeout(()=>{
    let output = "";
    posts.forEach((post, index)=>{
      output.append += `<li>${post.title}</li>`;
      document.body.innerHTML = output;

    })
  }, 1000);
}

function createPost(post){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      posts.put(post);

      const error = false;
      if(!error){
        resolve();
      } else {
        reject("opps! An Error occurred");
      }
    }, 2000);
  })
}

createPost({ title:"post three", body:"This is post three" })
  .then(getPost)
  .catch(error => console.log(error));
```

### Promise.all
> 使用promise.all就不需要一直.then().then().then()

```js
// Promise.all Example
const promise1 = Promise.resolve("Hello World");
// 这行代码是合法的。Promise.resolve 创建一个已解决的 Promise，其值为指定的字符串 "Hello World"。
const promise2 = 10;
// 这行代码也是合法的。然而，promise2 不是一个 Promise；它只是一个简单的变量，保存着数值 10。
// 在这种情况下，如果使用了 .then()，对于 promise2，它会被包装成一个已解决的 Promise，并将其值作为回调的参数传递。但请注意，这不会改变 promise2 本身的性质，它仍然是一个简单的变量，不是一个 Promise。
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "GoodBye");
});
// 这行代码是合法的。它创建了一个 Promise，在 2000 毫秒延迟后使用 setTimeout 解决为值 "GoodBye"。
const promise4 = fetch("https://domain.com/users").then(res => res.json());
// fetch 需要两步.then() 第一步 format to json 第二步 json to data
// 这行代码就是合法的。它发起一个到指定 URL 的 fetch 请求，promise4 将会在响应的 JSON 内容上解决。
Promise.all([promise1, promise2, promise3, promise4]).then(
value => console.log(value);
)
// Promise.all 接受一个包含多个 Promise 的数组，并在所有 Promise 都解决后返回一个新的 Promise。这个新 Promise 将包含一个值数组，其中包括每个 Promise 解决的值。
```
## Async Await
```js
async function init(){
  await createPost({title:"post three", body:"This is post three"});
  getPost();
}

init();

// 代码逻辑：init 是一个异步函数，在执行这个异步函数时，当遇到函数内部 await 碧血等这行代码执行结束才能继续执行下面的代码
```
Async with Fetch Example
```js
//Async with Fetch Example
async function fetchUser() {
  const res = await fetch("https://domain.com/users");

  const data = await res.json();

  console.log(data);
}

fetchUser();
```