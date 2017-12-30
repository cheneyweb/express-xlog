# express-xlog
Node后端微服务框架，基于express-xlog中间件，异步日志

[传送门：XServer官网文档](http://www.xserver.top)

框架目录结构
>
    ├── app.js
    ├── config
    │   ├── default.json
    │   ├── develop.json
    │   └── production.json
    ├── node_modules
    ├── package.json
    └── xlog_modules
        └── express-xlog

快速上手
>
    1、const xlog = require('express-xlog')
    2、app.use(xlog())

帮助联系
>
	作者:cheneyxu
	邮箱:457299596@qq.com
	QQ:457299596

更新日志
>
	2017.12.25:初版
