module.exports = app => {
  class LoginController extends app.Controller{
    * index(){
      const ctx = this.ctx;
      const loginName = ctx.query.loginName;
      const loginPassword = ctx.query.loginPassword;
      const isSavePwd = ctx.query.isSavePwd || false;
      console.log("loginName1 = " + loginName);
      console.log("loginPassword = " + loginPassword);
      console.log("isSavePwd = " + isSavePwd);
      const {egdContext} = yield ctx.service.login.login(loginName, loginPassword, isSavePwd);
      ctx.body = egdContext;
    }
  }
  return LoginController;
}