# Docker 容器化 和 AWS 微服务云部署

## Docker是什么

docker是一个容器化的工具而不是微服务架构，但此容器化技术可以帮助实现微服务架构。在使用Docker进行容器化时，容器的划分通常是基于应用程序的模块化和解耦原则，以便更好地支持微服务架构的设计理念。
### image
- 他可以运行一个具有多各只读层的image镜像，每个只读层应用于不同的文件系统。这个镜像可以划分为多个container容器（即instance实例），每一个容器都是独立的，而每个实例中又拥有多个application应用。

- Docker的只读层（Read-Only Layer）包含了镜像的静态部分，而可写层（Read-Write Layer）用于存储运行时产生的数据，例如日志、运行时配置等。但这并部署与开发需要关心的。
### 容器划分
- 容器划分原则：
  1. 模块化划分： 应用程序被拆分为独立的、相互关联的模块，每个模块都可以独立地打包成一个容器。这样可以降低耦合性，提高可维护性和可扩展性。
  2. 单一责任原则： 每个容器应该负责一个特定的功能或服务。这有助于降低容器之间的依赖性，使系统更加灵活和可维护。
  3. 独立可部署： 每个容器都应该是可独立部署的单元，这使得团队可以单独升级、替换或扩展特定的服务，而不影响整个应用程序。
  4. 通信机制： 容器之间的通信通常通过网络实现。微服务之间的通信可以使用RESTful API、消息队列等机制。

- 例如，考虑一个简单的电子商务应用程序，可以将其拆分为以下不同的容器：
  1. 用户服务容器： 负责处理用户认证、授权以及用户信息管理。
  2. 商品服务容器： 处理商品信息、库存管理等功能。
  3. 订单服务容器： 管理订单、支付和配送等功能。
  4. 前端应用容器： 提供用户界面和与后端服务的交互。

### 部署
最终通过docker构建的后端应用可以被部署在aws云服务器上，比如ECS和EC2实例。并形成微服务器和全球部署。

- EC2实例可以通过Amazon控制台或API进行启动、停止和配置，提供灵活的计算资源。而Amazon ECS（Elastic Container Service）则是AWS提供的一种容器编排服务，用于在云中运行、停止和管理Docker容器。与EC2实例不同，ECS专注于容器化应用程序。它使您能够轻松地在一个或多个EC2实例上运行、调度和管理Docker容器。

- 一般，我们不会把多个容器部署在一个EC2实例，而是使用容器编排服务，比如AWS ECS（Elastic Container Service）来协调和管理多个Docker容器实例的部署。ECS可以自动将容器实例分配给不同的EC2实例，实现高可用性和负载均衡。

  - 优点： 高可用性、负载均衡、横向扩展、适用于大规模应用。
  - 示例： 使用AWS ECS或Kubernetes等容器编排服务，在多个EC2实例上运行各个服务的多个容器实例。

### 其他需要学习的知识
容器编排： 容器编排是一种自动化容器的部署、伸缩和管理的技术。除了AWS ECS，还有其他流行的容器编排工具，如Kubernetes、Docker Swarm等。它们能够协调多个容器实例，提供高可用性、负载均衡和自动伸缩等功能。

配置管理： 微服务架构中的服务通常需要动态地适应环境变化，包括配置信息的变更。配置管理工具帮助管理应用程序的配置，确保各个服务可以根据需要更新其配置。

持续集成和持续部署（CI/CD）： CI/CD是一种软件开发实践，通过自动化测试和部署流程，加快交付新功能的速度。Docker可以与CI/CD工具集成，确保容器化应用程序在各个阶段都能够一致、可靠地部署。

容器注册表： 容器注册表用于存储和管理Docker镜像。Docker Hub是一个公共的Docker注册表，而私有注册表可以用于组织内部或安全性要求较高的场景。

Lambda


## AWS 云部署
AWS 云部署的时候可能需要的文件：
- .npmrc 文件
  `unsafe-perm=true`
是做什么的？
---
PM2
- 当 server 出现错误时，会自动重启 server, 保证我们的 server 一直在运行
- 现在不太用了，因为 docker 会监控我们的 server 是否健康
---
部署前验证我们production的连接是否有效
- 关于mongoDB
  - 通常情况下，开发者是没有权限访问云端/production数据库的。只有team lead可以，我们只可以读，不能修改
  - 建议开发的时候使用本地mongoDB数据库，和production是不同的数据库
---
部署到 AWS elastic beanstalk
- elastic beanstalk 环境
  - key pair
  - AWS role
    - eslastic beanstalk web tier
    - eslastic beanstalk work tier
    - eslastic beanstalk web multicontainer docker
- codepipline
  - 通过codepipline可以自动将github上的repo自动部署和自动更新
- 只有一年的 free tier， 记得关掉
  - environment and codepipline
---
- 什么是 token, token如何工作， 什么是bear token
- 后端发送一个 token 给前端, 前端可以存在localStorage或cookie，不适合跨域名开发
  - cookie的好处是同域名会自动带上，跨域名不行，但是server会在cookie里面取, 所以后端代码要做相应的更改
  - interaccepter?
  - localStorage需要手动添加到header里面，server会在header里面取
---
取数据的时候要做分页
- 在controller里面，如果数据很大要做分页操作
- 在query里面接收几个参数，page 和 pageSize
- 设置默认值，如果客户没传参数，使用默认值
- 如果客户传了参数，使用客户的参数
- joi 的 schema 对 query 做 validation? joi validation的好处是可以自动帮我们做格式转换，验证数据是不是我们想要的等等
  - 并可以转换类型，因为query在url上是字符串类型，而page和pageSize是数字类型
- limit 和 skip，限制和跳过
- 虽然skip过了不会报错，只返回空数组，但是后端可以告诉后端一共有多少数据 totalPage `res.json((date: students, pagination: {page, pageSize, totalPage: xxx}))`，也可以通过检测是否还有值来判断是否还有数据 infinite rolling ，不用考虑还有多少页，一直往下拉直到检测到没有值[匠人 20期 docker 最后 10 分钟] 