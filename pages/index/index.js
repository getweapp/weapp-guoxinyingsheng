//index.js
var app = getApp()
Page({
  data: {
    userInfo: {},
    imgUrls: [
      {
        url: 'http://phptest.guoxinad.com.cn/insun_mediawap/upload1/20161128/1611280144232120.png',
        txt: '荣耀时刻 见证辉煌'

      },
      {
        url: 'http://phptest.guoxinad.com.cn/insun_mediawap/upload1/20161128/1611280338034298.png',
        txt: '咪咕G客12小时终极G战'

      },
      {
        url: 'http://phptest.guoxinad.com.cn/insun_mediawap/upload1/20161125/1611251209342788.png',
        txt: '吉利丨双十一大神就是我'
      }
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad: function(){
    console.log('onLoad')
    var ths = this;
    app.getUserInfo(function(userInfo){
      ths.setData({
        userInfo: userInfo
      })
    })
  },
  onPullDownRefresh () {
    wx.stopPullDownRefresh()
  }
})