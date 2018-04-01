"strict mode";
const Koa = require('koa');
const koaStatic = require('koa-static');
const render = require('koa-ejs');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const server = new Koa();

render(server, {
  root: path.join(__dirname, '../view'),
  layout: false,
  viewExt: 'html',
  cache: false,
  debug: false
});

server.use(router.routes());
server.use(router.allowedMethods());
server.use(koaStatic('./public'));
server.use(bodyParser());

module.exports = server;
