const Koa = require('koa')
const views = require('koa-views')
const Router = require('koa-router')
const path = require('path')
const static = require('koa-static')

const app = new Koa()
const router = new Router()

// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))

//静态资源
app.use(static(
  path.join( __dirname, './static')
))

app.use(static(
  path.join( __dirname, './data')
))

// 路由
router.get('/', async ( ctx )=>{
  await ctx.render('index')
})

router.get('/show', async ( ctx )=>{
  await ctx.render('show')
})


router.get('/index', async ( ctx )=>{
    let title = 'hello index'
    await ctx.render('index', {
      title,
    })
})


// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(8086);




