const auth = {
  name: 'auth',
  set: function (data) {
    this.clear();
    wx.setStorage({ key: this.name, data: JSON.stringify(data) });
  },
  get: function () {
    var authdata = null;
    wx.getStorage({
      key: this.name,
      success: function (res) {
        authdata = res.data;
      }
    });
    return (authdata != null && authdata != undefined && authdata != '') ? JSON.parse(authdata) : null;
  },
  clear: function () {
    if (this.exist()) {
      wx.removeStorage({ key: this.name });
    }
  },
  exist: function () {
    var authdata = this.get();
    if (authdata != null && authdata != undefined && authdata != '') {
      return true;
    }
    return false;
  }
}

module.exports = auth;
