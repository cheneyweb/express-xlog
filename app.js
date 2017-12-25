// 系统配置
const config = require('config')
const port = config.server.port
const controllerRoot = config.server.controllerRoost
// 应用服务
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const xlog = require(__dirname + '/xlog_modules/express-xlog/index.js')
// 日志相关
const log = require('tracer').colorConsole({ level: config.log.level })

// 初始化应用服务器
const app = express()
app.use(bodyParser.json())
// 引入express-xlog中间件
app.use(xlog(config.log, (req) => { log.info('异步日志处理', req.body) }))

// 1、GET日志
router.get('/test', async function (req, res) {
    res.send('hello')
})
// 2、POST日志
router.post('/test', async function (req, res) {
    res.send(req.body)
})
app.use(router)

// 启动应用服务
app.listen(port)
log.info(`XLog服务启动【执行环境:${process.env.NODE_ENV},端口:${port}】`)
log.info(`GET日志路径 【GET】【localhost:${port}/test】`)
log.info(`POST日志路径【POST】【localhost:${port}/test】`)
