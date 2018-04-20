const log = require('tracer').colorConsole()

module.exports = function (logConfig = {}, logProcess) {
    logConfig = logConfig || {}
    return function xlog(req, res, next) {
        log.info(req.method, `${req.protocol}://${req.get('host')}${req.originalUrl}`)
        if (req.method != 'GET') {
            log.info('BODY', req.body)
        }
        if (logConfig.header && logConfig.header.loglist && logConfig.header.loglist.length > 0) {
            for (let item of logConfig.header.loglist) {
                log.info('HEADER.' + item, req.headers[item])
            }
        } else if (logConfig.header) {
            log.info('HEADER', req.headers)
        }
        if (logProcess) {
            logProcess(req)
        }
        return next()
    }
}