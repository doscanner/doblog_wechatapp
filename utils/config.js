const apiurl = 'https://api.doscanner.cn';
//  const apiurl = 'http://localhost:21531';
const resurl = 'http://res.doscanner.cn';
//const resurl = 'http://localhost:46940';
const config = {
  api: {
    url: apiurl,
    timeout: 10000,
    module: {
      article: {
        search: apiurl + '/api/article/search',
        getsingle: apiurl + '/api/article/getsingle',
        updatebrowsenum: apiurl + '/api/article/updatebrowsenum'
      },
      catalog: {
        getlist: apiurl + '/api/catalog/getlist'
      }
    }
  },
  web: {
    module: {
      index: '/',
      article: {
        index: '/article/list',
        list: '/article/list/:path',
        detail: '/article/detail/:id'
      },
    }
  },
  res: {
    url: resurl,
    module: {}
  },
  httpmethod: {
    post: 'POST',
    get: 'GET'
  },
  datatype: {
    json: 'json',
    xml: 'xml',
    html: 'html',
    jsonp: 'jsonp',
    text: 'text'
  },
  statuscode: {
    error: 501,
    unauthorized: 401,
    notfound: 404,
    notpermission: 502
  },
  enums: {
    orderby: {
      asc: {
        key: 'ASC',
        value: 0
      },
      desc: {
        key: 'DESC',
        value: 1
      }
    }
  },
  catalog: {
    path1: '00000000'
  }
};

module.exports = config;