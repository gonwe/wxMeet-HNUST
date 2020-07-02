// pages/detail/detail.js
var common = require('../../utils/common.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {
      id: '10005',
      title: '关于师范教育专题数据库开通试用的通知',
      add_date: '2020-05-20',
      content: '    各位读者：图书馆已于近日开通《师范教育专题数据库》的试用。欢迎广大读者积极试用，并提出宝贵意见！《师范教育专题数据库》是按照“新课标”的要求，按照教育理论、教育技术、教学案例、教学策略等四个方面进行资源组织，资源覆盖小学、初中、高中、学前教育各个学段，各个年级，资源内容针对各学科、各年级的教学需求精心设计，广泛结合课堂实录、教学观摩与研讨、案例解读、专题研讨、专家讲座、名师培训等多种形式，多层面体现资源用用的知识性、专业性、结构性和实用性，能够帮助教师和学生快速达到即用即知即学即会的效果。'
    },
    isAdd:false
  },
  //添加收藏
  addFavorites:function(){
    let article = this.data.article
    wx.setStorageSync(article.id, article)
    this.setData({
      isAdd:true
    })
  },
  //取消收藏
  cancelFavorites:function(){
    let article = this.data.article
    wx.removeStorageSync(article.id)
    this.setData({
      isAdd:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id

    //检查当前新闻是否在收藏夹中
    var newarticle = wx.getStorageSync(id)
    //已存在
    if( newarticle != '' ){
      this.setData({
        isAdd:true,
        article:newarticle
      })
    }
    //不存在
    else{
      let result = common.getNewsDetail(id)
      //获取新闻内容
      if( result.code == '200' ){
        this.setData({
          article:result.news,
          isAdd:false
        })
      }
    }
    
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