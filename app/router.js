module.exports = app =>{
  app.get('/', 'home.index');
  app.get('/login', 'login.index');
  app.get('/api/v1/issues/todo/:status', 'issues.todo');
  app.get("/api/v1/issues/:id", "issues.show");
  app.resources('issues', '/api/v1/issues', 'issues');
}