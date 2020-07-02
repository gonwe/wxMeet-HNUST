//index.js
//获取应用实例
const app = getApp()
var common = require('../../utils/index.js')
Page({
  
  // 页面的初始数据
  data: {
    inputShowed: false,  //初始文本框不显示内容
    newsList:[]
  },
  goTodetailindex:function(e){
    //获取携带data-id的数据
    let id = e.currentTarget.dataset.id
    //console.log(e)
    //携带新闻ID进行页面跳转
    wx.navigateTo({
      url: '../detailindex/detailindex?id=' + id,
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list = common.getNewList()
    this.setData({
      newsList:list
    })
  },
  // 使文本框进入可编辑状态
  showInput: function () {
    this.setData({
      inputShowed: true   //设置文本框可以输入内容
    });
  },
  // 取消搜索
  hideInput: function () {
    this.setData({
      inputShowed: false
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    swiperImg: [
      { src: "http://www.hevttc.edu.cn/__local/F/AF/B7/FDA51BEE73B93E791AB596C2FBD_0AB9419F_33678.jpg" },
      { src: "http://www.hevttc.edu.cn/__local/E/53/F7/B7572A9D71EAF2A3CDA393DBB9E_8B9D4E03_22FC8.jpg" },
      { src: "http://www.hevttc.edu.cn/__local/C/D1/48/C7CA2446B20EE62FBA5552F3E5C_44F14D4B_39AE2.jpg" }
    ],
    parent_city:"秦皇岛",
    location:"海港",
    loc:"2020年-05-06 星期三",
    nowtmp:"",
    nowcond_code:"",
    nowcond_text:"晴天"
  },
  

  getWeather:function(){
    var that=this 
    wx.request({
      url:'https://free-api.heweather.net/s6/weather/now?',
      data:{
        location:that.data.loc,
        key:'c1075d9e33c34e1bbd73f717f84d5dd5'
      },
      success:function(res){
        console.log(res.data)
        that.setData({
          parent_city:res.data.HeWeather6[0].basic.parent_city,
          location:res.data.HeWeather6[0].basic.location,
          loc:res.data.HeWeather6[0].update.loc,
          nowtmp:res.data.HeWeather6[0].now.tmp,
          nowcond_code:res.data.HeWeather6[0].now.cond_code,
          nowcond_txt:res.data.HeWeather6[0].now.cond_txt
        })
      }


    })
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.getLocation({
      success:function(res) {
        console.log(res.latitude,res.longitude)
        var locat=res.latitude.toString()+","+res.longitude.toString()
        console.log(locat)
        that.data.loc=locat  
        that.getWeather()
     },
    })

    let list = common.getNewList()
    this.setData({
      newsList:list
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})