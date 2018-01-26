const Koa = require('koa')
const views = require('koa-views')
const Router = require('koa-router')
const path = require('path')
const static = require('koa-static')

const service = require('./service/data.js')

const app = new Koa()
const router = new Router()

//模板
app.use(views(__dirname + '/view', {
  extension: 'html',
}));

//静态资源
app.use(static(
  path.join(__dirname, './static')
))
app.use(static(
  path.join(__dirname, './data')
))

// 路由
// 主页
router.get('/', async (ctx) => {
  await ctx.render('index')
});

// 阅读器
router.get('/show', async (ctx) => {
   await ctx.render('show');
});


// ************任务代码************
// 首页列表数据
router.get('/indexShow', async (ctx) => {
  ctx.body =  service.getAllbooklist();
});

// 阅读器的列表数据
router.get('/showImg', async (ctx) => {
  ctx.body =service.getIistimg( ctx.query);
});

// 章节名称
router.get('/chapter', async (ctx) => {
  ctx.body =service.chapterTilte( ctx.query);
});

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())
app.listen(8086);




