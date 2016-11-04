//app.js
App({
  screenHeight:0,
  themeData:null,
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
     var that=this;
    wx.getSystemInfo({
      success: function(res) {
        that.screenHeight = res.windowHeight
      }
    }),
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    var url="http://news-at.zhihu.com/api/4/themes";
    wx.request({
        url:url,
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res){
          that.themeData=res.data.others;  
        }
    })
  },

  

  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})



