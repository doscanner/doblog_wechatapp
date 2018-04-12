var config = require('../../utils/config.js');
var request = require('../../utils/request.js');

const article = {
  search: function (page, size, keyword, catalogpath, ishighlight, startdate, enddate, orderby, success) {
    var param = {
      url: config.api.module.article.search,
      data: {
        page: page,
        size: size,
        keyword: keyword,
        catalogpath: catalogpath,
        startdate: startdate,
        enddate: enddate,
        orderby: orderby,
        ishighlight: ishighlight,
        status: 1
      },
      success: success
    }
    return request.post(param)
  },
  getsingle: function (pid, success) {
    var param = {
      url: config.api.module.article.getsingle,
      data: {
        pid: pid
      },
      success: success
    }
    return request.get(param)
  },
  updatebrowsenum: function (pid, success) {
    var param = {
      url: config.api.module.article.updatebrowsenum,
      data: {
        id: pid
      },
      success: success
    }
    return request.post(param)
  }
}

module.exports = article;