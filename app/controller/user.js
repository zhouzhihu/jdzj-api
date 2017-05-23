module.exports = app => {
  class LoginController extends app.Controller{
    * login(){
      const ctx = this.ctx;
      const loginName = ctx.query.loginName;
      const loginPassword = ctx.query.loginPassword;
      const isSavePwd = ctx.query.isSavePwd || false;
      const {success, msg, egdContext} = yield ctx.service.login.login(loginName, loginPassword, isSavePwd);
      if(success)
        ctx.body = {success, result : JSON.parse(egdContext)};
      else{
        ctx.body = {success, msg};
      }
    }
  }
  return LoginController;
}