module.exports = app =>{
  app.get('/', 'home.index');
  app.get('/api/v1/user/login', 'user.login');
  app.get('/api/v1/issues/todo/:status', 'issues.todo');
  app.get("/api/v1/issues/:id", "issues.show");
  app.resources('issues', '/api/v1/issues', 'issues');
}