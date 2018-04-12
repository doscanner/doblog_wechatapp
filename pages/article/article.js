var article = require('../../api/modules/article.js');
var util = require('../../utils/util.js');
var WxParse = require('../../utils/wxParse/wxParse.js');

Page({
  data: {
    article: null,
    pid: ''
  },
  onLoad: function (options) {
    this.data.pid = options.pid;
    this.init();
  },
  init: function () {
    this.requestData();
  },
  requestData: function () {
    var that = this;
    if (util.checkvalue.isnull(that.data.pid)) {
      wx.showToast({
        title: '错误，文章id为空',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    article.getsingle(
      that.data.pid,
      function (res) {
        that.setData({
          article: res.data
        });
        WxParse.wxParse('article', 'html', that.data.article.content, that, 5);
      }
    )
  }
})