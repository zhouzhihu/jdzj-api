module.exports = app =>{
  /**
   * 系统启动提示
   */
  app.beforeStart(function* () {
    console.log("==== start egrand node app ====");
  });
  /**
   * 请求之前监听，用于处理公共请求前的处理
   */
  app.httpclient.on('request', req => {
    if("undefined" != typeof req.ctx.req.headers.cookie) {
      req.args['headers'] = req.args['headers'] || {}
      req.args.headers['cookie'] = req.args.headers['cookie'] || {};
      req.args.headers['cookie'] = req.ctx.req.headers.cookie;
    }
  });
  /**
   * 请求结束后监听，用于处理公共请求后的处理
   */
  app.httpclient.on('response', result => {
    const {headers} = result.res;
    setCookies(result.ctx, headers);
  });
  /**
   * 自定义EgrandController基类，用于提供公共方法等
   */
  class EgrandController extends app.Controller {
    get page(){
      return Object.assign(this.ctx.query, {
        pageNo: this.ctx.query.pageNo || 1,
        pageSize: this.ctx.query.pageSize || 5,
        order: this.ctx.query.order || '',
        dir: this.ctx.query.dir || 'asc'
      });
    }
    notFound(msg) {
      msg = msg || 'not found';
      this.ctx.throw(404, msg);
    }
  };
  app.Controller = EgrandController;
  /**
   * 自定义EgrandService基类，用于提供公共方法等
   */
  class EgrandService extends app.Service {
    get serverAPI(){
      const {api : {egrand_api : serverAPI}} = app.config;
      return serverAPI;
    }
  };
  app.Service = EgrandService;
  /**
   * 设置代理请求cookies到浏览器
   * @param ctx
   * @param headers
     */
  setCookies = (ctx, headers) => {
    if (!headers || !validateCookies(headers['set-cookie'])) {
      return
    }
    let cookies = headers['set-cookie'];
    ctx.res._headers = ctx.res._headers || {};
    ctx.res._headerNames = ctx.res._headerNames || {};

    // 以下set-cookie的方案参见nodejs源码：https://github.com/nodejs/node/blob/master/lib/_http_outgoing.js#L353-L359
    // 设置头字段中set-cookie为对应cookie
    ctx.res._headers['set-cookie'] = ctx.res._headers['set-cookie'] || [];
    ctx.res._headers['set-cookie'] = ctx.res._headers['set-cookie'].concat(cookies);

    // 设置头字段set-cookie的名称为set-cookie
    ctx.res._headerNames['set-cookie'] = 'set-cookie';
  };
  /**
   * 检查cookie的合法性
   * @param  {Array} cookies  cookies字段数组
   * @return {Boolean}        是否合法
   */
  validateCookies =  cookies  =>{
    if (!cookies || !cookies.length || 0 >= cookies.length) {
      return false
    }
    if (!cookies[0]) {
      return false
    }
    return true
  };
}