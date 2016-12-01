var app = getApp()
Page({
  data: {
    defaultSize: "mini",
    loading: false,
    plain: false,
    disabled: false,
    lists: [
        {
            "redirecturl": "http://dongfeng.guoxinad.com.cn/xiaokang/dfxk_zp/",
            "mainimg": "upload1/20160629/1606290358393979.jpg",
            "title": "东风小康招贤纳士",
            "description": "",
            "content": "多维度介绍高效人才招聘"
        },
        {
            "redirecturl": "http://www.insun-china.com/item/insun2016/index.php",
            "mainimg": "upload1/20160629/1606291134207266.jpg",
            "title": "在一起更锋芒",
            "description": "",
            "content": ""
        },
        {
            "redirecturl": "http://peugeot.insun-china.com/new4080814/index.html",
            "mainimg": "upload1/20160202/1602020451004977.jpg",
            "title": "新一代东风标致408问鼎而至",
            "description": "",
            "content": "品创意交互呈现产品匠心"
        },
        {
            "redirecturl": "http://www.insun-china.com/item/insun_meeting/",
            "mainimg": "upload1/20160202/1602020545059897.jpg",
            "title": "心相映 盛华章",
            "description": "",
            "content": "映盛2015年年会邀请函"
        },
        {
            "redirecturl": "http://phptest.guoxinad.com.cn/thehanshow/hanshow_shuimo/",
            "mainimg": "upload1/20160202/1602020424595729.jpg",
            "title": "汉秀中国风邀请函",
            "description": "",
            "content": "中国风设计感，古典元素大气之作"
        },
        {
            "redirecturl": "http://dongfeng.guoxinad.com.cn/dfct_c3xr_manhua/",
            "mainimg": "upload1/20160202/1602020413397202.jpg",
            "title": "探索星际之外不一样的精彩",
            "description": "",
            "content": "以次电影情节为主线的漫画故事型H5"
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