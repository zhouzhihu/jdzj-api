module.exports = app => {
  class LoginController extends app.Controller{
    * index(){
      const ctx = this.ctx;
      const loginName = ctx.query.loginName;
      const loginPassword = ctx.query.loginPassword;
      const isSavePwd = ctx.query.isSavePwd || false;
      const {result, msg, egdContext} = yield ctx.service.login.login(loginName, loginPassword, isSavePwd);
      if(result)
        ctx.body = {result, egdContext};
      else{
        ctx.body = {result, msg};
      }
    }
  }
  return LoginController;
}