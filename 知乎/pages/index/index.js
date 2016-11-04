//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
     dragD:{
      x:0,
      y:0
    },
    dragM:{
      moveX:0,
      moveY:0
    },
    slideHeight:app.screenHeight,
    slideFlag:false,
    slideT:null,
    banner:[],
    list:[],
    indicatorDots:true,
    autoplay:true,
    duration:500,
    interval:2000,
    themeData:0
  },
  changeFlag:function(){
    this.setData({
      slideFlag:false
    })
  },
  dragstart:function(event){
  var cx=event.touches[0].clientX;
  var cy=event.touches[0].clientY;
  this.setData({
    dragD:{
      x: cx-event.target.offsetLeft,
      y: cy-event.target.offsetTop
    }
  })
  var that=this;
  this.data.slideT=setTimeout(function(){
    var fl=!that.data.slideFlage;
     that.setData({
         slideFlag:fl
  })
  },300)
  return false
},
dragmove:function(event){
  clearTimeout(this.data.slideT);
  var mx=event.touches[0].clientX;
  var my=event.touches[0].clientY;
  var ox=this.data.dragD.x;
  var oy=this.data.dragD.y;
  this.setData({
    dragM:{
        x:mx-ox,
        y:my-oy
    }
  })
  return false;
},
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    var url="http://news-at.zhihu.com/api/4/news/latest"
    wx.request({
        url:url,
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res){
            that.setData({
              banner:res.data.top_stories,
              list:res.data.stories
            })
           
        }
    })
  }
  

})



