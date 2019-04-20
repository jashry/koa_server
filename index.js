const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const morgan = require('koa-morgan')
const path = require('path')
const config = require('config')
const home = require('./routers/home')

if(app.env === 'development'){
    app.use(morgan('tiny'))
}

app.use(static(path.join(__dirname,'./static')))

app.use(bodyParser())

let router = new Router()
router.use('/', home.routes(), home.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())

let port = process.env.PORT || 3000

app.listen(() => {
    console.log(`koa server start@port: ${port}`)
})