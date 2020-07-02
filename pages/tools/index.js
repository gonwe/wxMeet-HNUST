// pages/tools/index.js
Page({
    data: {
      imgUrls: [
        'http://www.hevttc.edu.cn/images/sjd-3.jpg',
        'http://www.hevttc.edu.cn/images/4.jpg',
        'http://www.hevttc.edu.cn/images/111.jpg'
      ],
      
      swiperIdx: 0
    },
    
    // 轮播特效果二
    bindchange(e) {
      this.setData({
        swiperIdx: e.detail.current
      })
    },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var listService = [
      {
        title: '校园',
        items: [{
          name: '录取查询',
          url: '',
          icon: '/images/tools/lqcx.png',
          code: '11'
        },
    
        {
          isBind: true,
          name: '课表查询',
          url: '',
          icon: '/images/tools/kebiao.png',
          code: '11'
        },
        {
          isBind: true,
          name: '校园日历',
          url: '/pages/toolspages/xiaoli',
          icon: '/images/tools/xiaoli.png',
          code: '11'
        },
        {
          isBind: true,
          name: '考试安排',
          url: '',
          icon: '/images/tools/ksjh.png',
          code: '11'
        },
     
        {
          isBind: true,
          name: '成绩查询',
          url: '',
          icon: '/images/tools/cjcx.png',
          code: '11'
        },
        ]
      },

      {
        title: '生活',
        items: [{
          name: '手机归属地',
          url: '/pages/phone/phone',
          icon: '/images/tools/gsd.png',
          code: '11'
        },
        {
          isBind: true,
          name: '万年历',
          url: '/pages/wannianli/wan',
          icon: '/images/tools/years.png',
          code: '11'
        }, {
          isBind: true,
          name: '历史今日',
          url: '/pages/history/history',
          icon: '/images/tools/lishi.png',
          code: '11'
        },
        {
          isBind: true,
          name: '天气查询',
          url: '/pages/weather/weather',
          icon: '/images/tools/tianqi.png',
          code: '11'
        },
        {
          isBind: true,
          name: '快递查询',
          url: '/pages/kuaidi/kuaidi',
          icon: '/images/tools/ziyuanxhdpi.png',
          code: '11'
        },
       
        ]
      }

    ]
    this.setData({
      servers: listService
    })
  },

  /**
   * 当点击Item的时候传递过来
   */
  bindNavigator: function (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.path,
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