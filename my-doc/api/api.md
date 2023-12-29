# API
## Description
My Personal used Document
## 1 Introduction
1.1 如何选择不同的API
- 如果你需要底层的、原始的控制，可以选择使用 XMLHttpRequest，但这可能会涉及更多的手动操作和代码。
- 如果你在一个现代的项目中，推荐使用 Fetch API。它提供了更简单、更强大的语法，并且在现代浏览器中广泛支持。
- 如果你需要一个更高级的 HTTP 客户端，带有更多功能和工具，可以选择使用 Axios。它对请求和响应的处理更加灵活，同时在浏览器和 Node.js 中都能使用。
- 总的来说，选择使用哪个工具取决于项目的要求、个人偏好以及当前技术栈的情况。在现代的 Web 开发中，Fetch API 和 Axios 是更常见的选择，因为它们提供了更现代、简洁和易用的接口。
## 2 AJAX - Asynchronous JavaScript & XML
### 2.1 什么是XML
可扩展标记语言： 早期的一种数据格式。然而，由于 XML 的冗长和繁琐，更轻量级的JSON 成为了更流行的选择。
### 2.2 XMLHttpRequest
XMLHttpRequest 是一个 API，最初是由 Microsoft 在 Internet Explorer 5 中引入的，用于在客户端（浏览器）和服务器之间进行异步数据传输。它支持在不刷新整个页面的情况下更新部分页面内容。虽然最初的目标是实现对 XML 数据的异步访问，但由于它的灵活性和通用性，它很快就被广泛用于处理各种类型的数据，所以虽然名字中包含 "XML"，但它实际上可以用于传输任何类型的数据，包括纯文本、JSON 和其他格式。  
XMLHttpRequest是现代异步 Web 通信的基础，也是 AJAX 技术的奠基石。后来，随着 Fetch API 和其他现代 Web API 的出现，开发人员有了更多的选择，但 XMLHttpRequest 仍然被广泛使用。
### 2.3 AJAX
异步 JavaScript 和 XML  
出现时间： 2005 年由 Jesse James Garrett 提出的。将各种技术结合起来，包括 XMLHttpRequest、JavaScript、DOM、CSS 等，形成一种新的开发模式，以强调实现异步通信和无需重新加载整个页面的动态页面更新的能力。AJAX 本质上是一种思想和技术组合，XMLHttpRequest 作为其中的核心技术，为这种模式的实现提供了基础。  
随着时间的推移，出现了许多基于 AJAX 的框架和库。  
### 2.4 代码：
onload:
- 用途：onload 事件在请求成功完成时触发。可以用来处理成功加载数据后的操作，比如更新页面内容。
  ```js
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log('Request successful');
      console.log(xhr.responseText);
    } else {
      console.log('Request failed with status ' + xhr.status);
    }
  };
  ```

`onprogress`:
- 用途：onprogress 事件在请求过程中持续地触发，通常用于监控下载进度。
  ```js
  xhr.onprogress = function(event) {
    if (event.lengthComputable) {
      var percentComplete = (event.loaded / event.total) * 100;
      console.log('Download progress: ' + percentComplete + '%');
    }
  };
  ```
`onerror`:
- 用途：onerror 事件在请求发生错误时触发。可以用来处理请求失败的情况。
  ```js
  xhr.onerror = function() {
    console.log('Request failed');
  };
  ```
`send`:
- 用途：send 方法用于发送 HTTP 请求。通常与 open 方法一起使用，设置请求的方法和 URL。
  ```js
  xhr.open('GET', 'https://example.com/api/data', true);
  xhr.send();
  ```
`onreadystatechange`:
- 用途：onreadystatechange 事件在 XMLHttpRequest 对象的状态发生变化时触发。可以通过检查 readyState 属性来了解当前状态。
  ```js
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log('Request successful');
        console.log(xhr.responseText);
      } else {
        console.log('Request failed with status ' + xhr.status);
      }
    }
  };
  ```
Summary:
- 这些事件和方法可以根据具体需求进行组合使用。例如，你可能会在 onload 处理成功响应，而在 onerror 处理失败响应，同时使用 onprogress 监控下载进度。 onreadystatechange 则可以用来处理更细粒度的状态变化。



## Fetch
- Fetch API 是一种现代的、基于 Promise 的 API，提供了更简洁和强大的方式来进行网络请求，支持 JSON 数据和其他数据格式。
- Fetch API 不仅可以用于浏览器中，还可以在 Node.js 中使用。
- Fetch API 为处理 HTTP 响应提供了更直观的方法，同时支持流式操作。

## Axios
- Axios 是一个基于 Promise 的 HTTP 客户端，可以用于浏览器和 Node.js。它对 XMLHttpRequest 和 Fetch API 进行了封装，提供了更简单和易用的接口。
- Axios 具有一些额外的功能，例如自动转换 JSON 数据、拦截请求和响应等，使其更灵活和强大。

