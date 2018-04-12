var config = require('config.js');
var util = require('util.js');
var auth = require('auth.js');

const req = (options) => {
  let opts = {
    //个性化配置
    loading: !util.checkvalue.isnull(options.loading) ? options.loading : true,
    isauth: !util.checkvalue.isnull(options.isauth) ? options.isauth : false,
    timeout: !util.checkvalue.isnull(options.timeout) ? options.timeout : config.api.timeout,
    //必须配置
    url: options.url,
    method: options.method,
    dataType: !util.checkvalue.isnull(options.dataType) ? options.dataType : config.datatype.json,
    responseType: !util.checkvalue.isnull(options.responseType) ? options.responseType : config.datatype.text,
    success: !util.checkvalue.isnull(options.success) ? options.success : null,
    fail: !util.checkvalue.isnull(options.fail) ? options.fail : null,
    complete: !util.checkvalue.isnull(options.complete) ? options.complete : null,
  };
  opts.headers = !util.checkvalue.isnull(options.headers) ? options.headers : { 'content-type': 'application/json' };

  //参数处理
  if (opts.method == config.httpmethod.get) {
    opts.data = options.data;
  } else if (opts.method == config.httpmethod.post) {
    opts.data = options.data;
    if (util.checkvalue.isnull(opts.headers['content-type'])) {
      opts.headers['content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    }
  } else {
    wx.showToast({
      title: '错误，不支持请求方法：' + opts.method,
      icon: 'none',
      duration: 2000
    });
  }
  //身份
  if (opts.isauth && auth.exist()) {
    var auths = auth.get();
    opts.headers['Authorization'] = 'Bearer ' + auths.access_token;
  }
  if (opts.loading) {
    wx.showLoading({
      title: '加载中'
    })
  }
  const requestTask = wx.request({
    url: opts.url,
    data: opts.data,
    method: opts.method,
    header: opts.headers,
    success: function (res) {
      if (opts.loading) {
        wx.hideLoading();
      }
      var ret = res.data;
      if (!ret.success && ret.status == config.statuscode.unauthorized) {
        wx.showToast({
          title: '错误，登录身份已失效，请重新登录',
          icon: 'none',
          duration: 2000
        });
        return;
      }
      if (!util.checkvalue.isnull(opts.success)) {
        opts.success(res.data);
      }
    },
    fail: function (err) {
      console.log(err);
      if (opts.loading) {
        wx.hideLoading();
      }
      if (!util.checkvalue.isnull(opts.fail)) {
        opts.fail(res.data);
      }
    },
    complete: function () {
      if (opts.loading) {
        wx.hideLoading();
      }
      if (!util.checkvalue.isnull(opts.complete)) {
        opts.complete(res.data);
      }
    }
  })

  return requestTask;
};

var request = {
  get: function (options) {
    options.method = config.httpmethod.get;
    return req(options)
  },
  post: function (options) {
    options.method = config.httpmethod.post;
    return req(options)
  }
}

module.exports = request;