Page({
  data:{
    result:{},
    isFold:true,
    code:''
  },
  onLoad:function(options){
     wx.showLoading({
        title: '获取数据中',
            })
    var Month = getMonths(new Date)
    var Day = getDays(new Date)
    // 生命周期函数--监听页面加载
    var that =this
    wx.request({
      url: 'http://www.jiahengfei.cn:33550/port/history?dispose=easy&key=jiahengfei&month=4&day=1',
    
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
          wx.hideLoading()
        // success
         wx.showToast({
                            title: '获取数据成功',
                            icon: 'success',
                            duration: 2000
                            })
        that.setData({
            result:res.data
        })
      },
      fail: function(res) {
         wx.hideLoading()
        // success
          console.log(res);
      
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  
   

  },
  flodFn:function(){
         this.setData({
       isFold:false
    });
   
  }
})
function getMonths(date){
    var Month = date.getMonth() +1
     return Month.toString()
}
function getDays(date){
    var Day = date.getDate()
    return Day.toString()
}
