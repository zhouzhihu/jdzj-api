exports.keys = "ssss";
exports.middleware = [ 'cors', 'errorHandler' ];
exports.cors = {
  origin: 'http://10.1.10.16:8080',
  maxAge: 1000000,
  credentials: true
};
exports.errorHandler = {
  match: '/api'
}
exports.api = {
  egrand_api: 'http://10.1.10.205:8083'
}
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.html': 'nunjucks'
  }
}
