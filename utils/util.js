const util = {
  checkvalue: {
    isnull: function (obj) {
      if (obj == null || undefined == obj) {
        return true;
      } else {
        if (typeof (obj) == 'number') {
          return false;
        }
        if (typeof (obj) == 'boolean') {
          return obj;
        } else {
          return (null == obj || '' == obj || undefined == obj);
        }
      }
      // return (null == obj || '' == obj || undefined == obj);
    },
    isfunction: function (callback) {
      return typeof callback === "function";
    },
    isdate: function (obj) {
      return obj.match(/^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/);
    },
    isphone: function (obj) {
      return obj.match(/^1\d{10}$/);
    },
    isemail: function (obj) {
      return obj.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    },
    isurl: function (obj) {
      return obj.match(/(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/);
    },
    isint: function (obj) {
      return !isNaN(obj);
    },
    isnumber: function (obj) {
      return obj.match(/^\d+$/);
    },
    isidentity: function (obj) {
      return obj.match(/(^\d{15}$)|(^\d{17}(x|X|\d)$)/);
    },
    isInArray: function (arr, value) {
      for (var i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
          return true;
        }
      }
      return false;
    },
    isStartInArray: function (arr, value) {
      for (var i = 0; i < arr.length; i++) {
        if (value.indexOf(arr[i]) == 0) {
          return true;
        }
      }
      return false;
    },
    startWith: function (sourcestr, str) {
      var reg = new RegExp("^" + str);
      return reg.test(sourcestr);
    },
    endWith: function (sourcestr, str) {
      var reg = new RegExp(str + "$");
      return reg.test(sourcestr);
    }
  },
  newGuid: function () {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
      var n = Math.floor(Math.random() * 16.0).toString(16);
      guid += n;
      if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
        guid += "-";
    }
    return guid;
  }
}

module.exports = util;