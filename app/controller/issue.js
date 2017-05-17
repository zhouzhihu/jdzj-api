module.exports = app => {
  class IssueController extends app.Controller{
    * list(){
      const ctx = this.ctx;
      const newsList = yield ctx.service.issue.list(this.page);
      //yield ctx.render('issue/index.html', { list: newsList });
      ctx.body = newsList;
    }
  }
  return IssueController;
}