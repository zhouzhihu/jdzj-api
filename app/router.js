module.exports = app =>{
  app.get('/', 'home.index');
  app.get('/login', 'login.index');
  app.get('/issue', 'issue.list');
}