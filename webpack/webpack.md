# WebPack
## 1. Webpack 概念知识
> 通常来说，webpack.config.js 配置文件的行数可能在 50 行到几百行之间。
### 1.1 CommonJS 语法
Webpack 的配置文件采用的是 CommonJS 的模块化语法。CommonJS 是一种模块规范，最初用于 Node.js 环境，后来也在前端开发中被广泛采用。  
在 Webpack 中，配置文件通常被命名为 webpack.config.js，它是一个 CommonJS 模块，导出一个包含配置选项的对象。  
需要注意的是，虽然 Webpack 在配置文件中使用 CommonJS 语法，但它并不限制你在项目的其他地方使用其他模块系统，比如 ES6 模块。Webpack 本身有能力处理多种模块系统的代码。
### 1.2 Webpack 和 Node.js 的关系：
- Webpack 和 Node.js 的共同点:
  - Webpack 是一个基于 Node.js 构建工具，它借助 Node.js 的模块系统和生态系统来实现模块化开发、构建和打包。
  - Webpack 通过 Node.js 的 require 语法来引入模块，使用 Node.js 的文件系统和路径处理模块，同时也可以使用 Node.js 的核心模块。
- Webpack 的独立性:
  - 尽管 Webpack 使用了 Node.js 的一些功能，但它本身是一个独立的工具。Webpack 在构建时创建了一个独立的运行时环境，使得 JavaScript 代码能够在浏览器中运行，而不仅仅是在 Node.js 环境中运行。
- Node.js 的角色:
  - 在 Webpack 中，Node.js 主要用于执行构建脚本（通常是 webpack.config.js 文件）和处理模块依赖关系。Webpack 借助了 Node.js 提供的模块系统、文件系统和其他功能来实现构建过程。
- 总体而言，Webpack 和 Node.js 之间有一种协同作用的关系，Node.js 提供了构建和运行环境，Webpack 则是在这个环境中完成模块化开发和构建的工具。
### 1.3 Node.js 模块
在 Webpack 中，Node.js 模块系统允许你在你的代码中直接引用它们，而不需要通过 npm 安装，因为它们是 Node.js 核心模块或者已经内置在 Node.js 环境中的第三方模块。
- path 模块：
  - path 是 Node.js 中的一个核心模块，用于处理文件路径。它提供了一系列用于处理文件路径的方法，如拼接路径、解析路径等。由于是核心模块，因此在 Node.js 环境中直接引用，无需额外安装。
  - `const path = require('path');`
- axios 模块：
  - axios 是一个基于 Promise 的 HTTP 客户端，通常用于发起 HTTP 请求。虽然它不是 Node.js 的核心模块，但是可以通过直接在代码中引用来使用。在使用 axios 之前，需要确保你的项目已经安装了这个模块，通常通过运行 npm install axios 命令进行安装。
  - `const axios = require('axios');`
- fs 模块:
  - fs 是 Node.js 中的文件系统模块，用于处理文件和目录。它提供了许多用于读取、写入、删除、创建文件和目录等操作的方法。
  - `const fs = require('fs');`
- http 模块:
  - http 是 Node.js 中的 HTTP 服务器和客户端模块，用于创建和处理 HTTP 服务。通过它，你可以创建自己的 HTTP 服务器或发起 HTTP 请求。
  - `const http = require('http');`
- events 模块:
  - events 模块用于实现事件处理。Node.js 中的许多核心模块和第三方模块都使用了事件驱动的编程模型，而 events 模块提供了实现和处理事件的工具。
  - `const events = require('events');`
- util 模块:
  - util 模块提供了一系列实用工具函数，用于支持 Node.js 应用程序的开发。
  - `const util = require('util');`
- summary: 当你在使用 Webpack 构建项目时，Webpack 会处理模块依赖关系，并且对于 Node.js 核心模块或者已经安装的第三方模块，Webpack 会自动处理这些依赖，无需在 Webpack 配置文件中进行额外配置。如果你使用的是 Webpack 5.x 或更高版本，Webpack 通常会对 Node.js 模块进行自动 polyfill，以确保它们在浏览器环境中的正常运行。










- Code Splitting (代码分割)
  - 作用: 将应用程序的代码分割成小块，实现按需加载，提高应用程序性能。
  - 示例: 使用 import() 动态导入模块。
- Tree Shaking (摇树优化)
  - 作用: 从 bundle 中移除未引用的代码，减小文件体积。
  - 配置: 在 webpack.config.js 中设置 mode: 'production'。
- Hot Module Replacement (HMR) (模块热替换)
  - 作用: 在应用程序运行时替换、添加或删除模块，而无需完全刷新页面。
  - 配置: 使用 webpack-dev-server 并配置 hot: true。
- Webpack Devtool (调试工具)
  - 作用: 配置用于生成 source map，方便调试。
  - 配置: 在 webpack.config.js 中设置 devtool。
- summary: 以上概念提供了更多关于 Webpack 构建过程的灵活性和优化。根据项目的需要，深入了解这些概念将有助于更好地配置和使用 Webpack。
- 补充webpack概念
## 2. WebPack Initial Setup
- `dist` folder - where static assets are built to, 类似于 react 中的 build 文件夹
  - index.html
- `src` - source code
  - index.js

- `npm webpack webpack-cli`
  - 构建webpack
## 3. loader and plugins
> plugins are little more powerful than loaders
### 3.1 npm install
在使用 npm 安装包时，你可以选择将包作为 --save（或 -S）或 --save-dev（或 -D）的依赖项。这取决于你希望在项目的哪个环境中使用这个包。
- --save 或 -S：用于将包添加到项目的运行时依赖项。这意味着该包在应用程序运行时是必需的，因此会被包含在生成的产品代码中。这对于在你的应用程序中直接使用的包非常有用。
  - `npm install package-name --save`
- --save-dev 或 -D：用于将包添加到开发环境的依赖项。这意味着该包仅在开发、构建或测试过程中使用，不会被包含在生成的产品代码中。这对于构建工具、测试库、Lint 工具等在开发时使用的包非常有用。
  - `npm install package-name --save-dev`
- 比如：对于 SCSS（Sass）这样的预处理器，通常你会选择将其安装为开发依赖项，因为预处理器的代码在构建过程中会被转译成纯 CSS，而纯 CSS 是在运行时由浏览器解析的。因此，你的应用程序在运行时不需要 Sass，只需要在构建时将其转换成 CSS。
  - `npm install node-sass --save-dev`
- 如果你的应用程序在运行时需要某个包，那么你应该将其安装为运行时依赖项（使用 --save 或 -S）。在构建工具配置文件（如 webpack 配置）中，你可能会使用一些加载器（例如 sass-loader）来处理 SCSS 文件，但这并不意味着你的应用程序在运行时需要 Sass。
### 3.2 loader
#### 3.2.1 已使用 loader
  - SCSS loader
    - 作用: SCSS Loader 使得 Webpack 能够处理 SCSS 文件，将其转换为可以在应用程序中使用的 CSS。style-loader 将样式注入到 DOM 中。
    - `npm i -D sass style-loader css-loader sass-loader`
  - babel loader: backward compatible older broswer
    - 作用: Babel 用于向后兼容老版本浏览器。Webpack 中的 Babel Loader 允许将现代 JavaScript 代码转译为与较旧浏览器版本兼容的格式。@babel/preset-env 根据指定的目标环境确定所需的转换。
    - `npm i -D babel-loader @babel/core @babel/preset-env`
#### 3.2.2 ChatGPT补充的其他Loader (还未尝试)
  - File Loader:
    - 作用: 用于处理文件，将它们复制到输出目录，并返回相对路径，可用于在代码中引用这些文件。
    - `npm install -D file-loader`
  - URL Loader:
    - 作用: 类似于 File Loader，但对于小文件可以将它们转换为 Data URL，以减少 HTTP 请求次数。
    - `npm install -D url-loader`
  - Image Loader:
    - 作用: 优化和压缩图像，可以在构建过程中自动将图像进行优化。
    - `npm install -D image-webpack-loader`
  - JSON Loader:
    - 作用: 用于加载 JSON 文件，将其转换为 JavaScript 对象。
    - `npm install -D json-loader`

#### 3.2.3 去google或blog寻找一些其他好用的loader并尝试

### 3.3 plugins
#### 3.3.1 已使用 plugins
  - HTML plugin
    - 作用: 此插件简化了创建用于提供打包后 JavaScript 文件的 HTML 文件的过程。它自动将生成的 bundle 的 script 标签注入到 HTML 文件中，简化了开发工作流。
    - `npm i -D html-webpack-plugin`
  - DevServer plugin
  - webpack-bundle-analyzer
    - 作用: 此工具提供了对 bundle 大小的洞察，帮助你识别和优化大的依赖项。它生成 bundle 大小和模块组成的可视化表示，有助于优化应用程序的性能。
    - `npm i -D webpack-bundle-analyzer`
#### 3.3.2 ChatGPT补充的其他 plugins (还未尝试)
- CleanWebpackPlugin:
  - 作用: 在每次构建前清理输出目录，确保只包含最新生成的文件。
  - `npm install -D clean-webpack-plugin`
- MiniCssExtractPlugin:
  - 作用: 从 bundle 中提取 CSS 到单独的文件，适用于生产环境。
  - `npm install -D mini-css-extract-plugin`
- DefinePlugin:
  - 作用: 允许你在编译时创建全局常量，可用于在代码中注入环境变量。
- CopyWebpackPlugin:
  - 作用: 复制指定的文件或目录到构建目录，用于处理静态资源。
  - `npm install -D copy-webpack-plugin`
- ProvidePlugin:
  - 作用: 自动加载模块，而不必每次都用 import 或 require 显式引入。
#### 3.3.3 去google或blog寻找一些其他好用的plugin并尝试







