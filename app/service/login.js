module.exports = app => {
  class LoginService extends app.Service{
    * login(loginName, loginPassword, isSavePwd){
      const {data : {result: success, context : egdContext, msg}} = yield this.ctx.curl(`${this.serverAPI}/loginAction.do`, {
        data: {
          action: 'loginByAjax',
          loginName: loginName,
          loginPassword: loginPassword,
          isSavePwd : isSavePwd || false
        },
        dataType: 'json'
      });
      return {success, msg, egdContext};
    }
  }
  return LoginService;
}