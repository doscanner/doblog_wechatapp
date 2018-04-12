var article = require('../../api/modules/article.js');
var util = require('../../utils/util.js');
Page({
  data: {
    articleList: [],
    pageIndex: 1,
    pageSize: 5,
    select_keyword: "",
    select_catalog: "",

    inputShowed: false,
    inputVal: ""
  },
  onLoad: function () {
    this.init();
  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  init: function () {
    this.requestData();
  },
  requestData: function () {
    var that = this;
    article.search(
      this.data.pageIndex,
      this.data.pageSize,
      this.data.select_keyword,
      this.data.select_catalog,
      !util.checkvalue.isnull(this.data.select_keyword),
      "",
      "",
      "",
      function (res) {
        that.setData({
          articleList: res.data.items
        })
      }
    )
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  inputEnter: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
})
