module.exports = () => {
    return function* (next) {
        yield next;
        console.log(this.status);
        console.log(this.body);
        console.log(this.acceptJSON);
        if (this.status === 404 && !this.body) {
            if (this.acceptJSON)
                this.body = { success: false, msg: '无法找到请求地址或页面' };
            else
                this.body = '<h1>无法找到请求地址或页面</h1>';
        }
    };
};