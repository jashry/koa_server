const Router = require('koa-router')
const fs = require('fs')

const home = new Router()

home.get('home', async ctx => {
    ctx.body = 'This is home router!'

})

home.get('index', async ctx => {
    ctx.body = 'This is index router'
})

home.post('article', async ctx => {
    let postdata = ctx.request.body
    ctx.body = postdata
})

module.exports = home