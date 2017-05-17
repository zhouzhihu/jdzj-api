module.exports = app => {
  class LoginService extends app.Service{
    * login(loginName, loginPassword, isSavePwd){
      const {data : {context : egdContext}} = yield this.ctx.curl(`${this.serverAPI}/loginAction.do`, {
        data: {
          action: 'loginByAjax',
          loginName: loginName,
          loginPassword: loginPassword,
          isSavePwd : isSavePwd || false
        },
        dataType: 'json'
      });
      return {egdContext};
    }
  }
  return LoginService;
}