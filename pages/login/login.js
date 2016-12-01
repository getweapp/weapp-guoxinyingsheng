var app = getApp()
Page({
  data: { },
  formSubmit: function(e){
      console.log(e);
  },
  onLoad: function(){
    
  },
  onPullDownRefresh () {
    wx.stopPullDownRefresh()
  }
})