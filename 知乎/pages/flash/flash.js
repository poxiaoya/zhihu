var app=getApp();
Page({
    data:{
        imgData:{
            text:'@zhihu',
            img:''
        },
        st:0
    },
    onLoad: function(options) {
    getFlash.call(this)
  },
  onReady: function() {
      this.data.st=setTimeout(function(){
          wx.redirectTo({url:"../index/index"})
      },2000)
  },
  onShow: function() {
    
  },
  onHide: function() {
   
  },
  onUnload: function() {
      clearTimeout(this.data.st)
  },
  onPullDownRefresh: function() {
   
  },
  onReachBottom: function() {
   
  }
})

function getFlash(){
    var that=this;
    var w=app.screenWidth;
    var size="1080*1776";
    if(w>=720&&w<=1080){
        size="720*1184";
    }else if(w>=480&&w<=720){
        size="480*728";
    }else if(w>=320&&w<=480){
        size="320*432";
    }
    wx.request({
        url:'http://news-at.zhihu.com/api/4/start-image/'+size,
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res){
            that.setData({
                imgData:res.data
            })
        }
    })
}
