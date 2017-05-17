module.exports = app => {
  class IssueService extends app.Service{
    * list(page){
      const params = Object.assign({
        action: 'page',
        viewType: 'my'
      }, page);
      const {data : {rows}} = yield this.ctx.curl(`${this.serverAPI}/ytAction.do`, {
        data: params,
        dataType: 'json'
      });
      return rows;
    }
  }
  return IssueService;
}