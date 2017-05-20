module.exports = app => {
  class LoginService extends app.Service{
    * login(loginName, loginPassword, isSavePwd){
      const {data : {result: result, context : egdContext, msg}} = yield this.ctx.curl(`${this.serverAPI}/loginAction.do`, {
        data: {
          action: 'loginByAjax',
          loginName: loginName,
          loginPassword: loginPassword,
          isSavePwd : isSavePwd || false
        },
        dataType: 'json'
      });
      return {result, msg, egdContext};
    }
  }
  return LoginService;
}