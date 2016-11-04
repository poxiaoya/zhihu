Page({
  data: {
      id:0
  },
  onLoad:function(option){
      this.setData({
          id:option.id
          })
  },
  onReady:function(){
      var that=this;
      var url="http://news-at.zhihu.com/api/4/news/"+this.data.id;
      wx.request({
          url:url,
          header:{
              'Content-Type': 'application/json'
          },
          success: function(res){
            that.setData({
             body:res.data.body
            })
            console.log(res.data)
        }
        
      })
  }
})