module.exports = app => {
  class IssuesService extends app.Service{
    * page(params){
      const {data : {rows}} = yield this.ctx.curl(`${this.serverAPI}/ytAction.do?action=page`, {
        data: params,
        dataType: 'json'
      });
      return rows;
    }
    * todo(params){
      const {data : {rows}} = yield this.ctx.curl(`${this.serverAPI}/ytAction.do?action=getToDoPage`, {
        data: params,
        dataType: 'json'
      });
      return rows;
    }
  }
  return IssuesService;
}