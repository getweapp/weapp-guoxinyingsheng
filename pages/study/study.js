var app = getApp()
Page({
  data: {
    defaultSize: "mini",
    loading: false,
    plain: false,
    disabled: false,
    lists: [
          {
            "redirecturl": "http://mp.weixin.qq.com/s?__biz=MzAxNjA3NzU4NQ==&mid=402158072&idx=1&sn=9ab2499feb7198980e4595ecb31cf039#rd",
            "mainimg": "upload1/20161010/1610100438314668.png",
            "title": "微信病毒营销的玩法",
            "description": "H5/营销/研究",
            "content": ""
        }
    ]
  },
  getMore: function(){
    console.log('获取更多');
  },
  onLoad: function(){
    
  },
  onPullDownRefresh () {
    wx.stopPullDownRefresh()
  }
})