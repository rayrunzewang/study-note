### Docker 和 AWS 云部署
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
- 虽然skip过了不会报错，只返回空数组，但是后端可以告诉后端一共有多少数据 totalPage，也可以通过检测是否还有值来判断是否还有数据 infinite rolling ，不用考虑还有多少页，一直往下拉直到检测到没有值