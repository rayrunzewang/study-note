# GraphQL
## Introduction
a memo code snippet  
from freecodecamp  
by net Nijna  
course name: GraphQL Crash Course  
course: crash-course-lesson-9  
TODO: 快速再听一遍，从全局角度去理解

## GraphQL 语法和基础概念：


理解 GraphQL 的基本类型系统，例如 Scalar、Object、List 等。

### 服务器搭建：

确保你有一个 GraphQL 服务器。你可以使用不同的后端技术来搭建服务器，比如 Node.js（使用 Express 或 Apollo Server）、Java（使用 Spring Boot 或 GraphQL Java）等。
```js
// EMS 语法
// import ApolloServer module
import { ApolloServer } from '@apollo/server'

// types
import { typeDefs } from './schema.js'

// resolvers
const resolvers = {
  Query: {
    
  },
  Game: {
    
  },
  
  // ...

  Mutation: {
    addGame(_, args) {
      // ...
    },
    deleteGame(_, args) {
      // ...
    },
    updateGame(_, args) {
      // ...
    }
  }
}

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers
})
```
创建一个入口类型（Entry Type），这是 GraphQL Schema 的根类型，通常包括 `Query` 和 `Mutation` 类型。
#### Query 和 Mutation：

创建 Query 和 Mutation 类型，定义你的应用程序的读取和写入操作。
确保在 Query 和 Mutation 中定义了合适的字段和参数。
关系类型：

定义对象之间的关系，包括一对一关系、一对多关系等。
在 Schema 中使用字段来表示这些关系。

#### Schema：
```js
export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
  }
  type Review {
    // ...
  }
  type Author {
    // ...
  }
  type Query {
    // ...
  }
  type Mutation {
    addGame(game: AddGameInput!): Game
    deleteGame(id: ID!): [Game]
    updateGame(id: ID!, edits: EditGameInput): Game
  }
  input AddGameInput {
    title: String!,
    platform: [String!]!
  }
  input EditGameInput {
    title: String,
    platform: [String!]
  }
`
```
理解 Schema 的作用，它定义了你的 GraphQL API 的结构和操作。
将上述步骤中创建的类型和关系添加到 Schema 中。
GraphQL Explorer：

使用 GraphQL Explorer（通常在默认端口4000/graphql）来模拟和构建前端发送的请求。
在 Explorer 中测试你的查询和变更操作，查看返回的数据。