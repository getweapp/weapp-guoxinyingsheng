var app = getApp()
Page({
  data: {
    defaultSize: "mini",
    loading: false,
    plain: false,
    disabled: false,
    lists: [
         {
            "redirecturl": "http://dongfeng.guoxinad.com.cn/citroenwish/wishes/index",
            "mainimg": "upload1/20160629/1606291217132033.jpg",
            "title": "2016心愿墙",
            "description": "",
            "content": "春节借势营销，照片合成"
        },
        {
            "redirecturl": "http://www.hjgmk.com.cn/heijingen_qm/",
            "mainimg": "upload1/20160629/1606291137536065.jpg",
            "title": "全民热议黑金根",
            "description": "",
            "content": ""
        },
        {
            "redirecturl": "http://www.hjgmk.com.cn/heijingen_invite/",
            "mainimg": "upload1/20160629/1606291130363273.jpg",
            "title": "玛咖粉丝节",
            "description": "",
            "content": ""
        },
        {
            "redirecturl": "http://dongfeng.guoxinad.com.cn/xiaokang/4s/index.php",
            "mainimg": "upload1/20161128/1611280305593288.png",
            "title": "东风小康掌上4S店",
            "description": "",
            "content": "移动端的4S店3D式全景观看体验"
        },
        {
            "redirecturl": "http://phptest.guoxinad.com.cn/jili_manhua/",
            "mainimg": "upload1/20160629/1606291001242494.jpg",
            "title": "博越体验官集结令",
            "description": "",
            "content": "纯手绘漫画，剧情式体验"
        },
        {
            "redirecturl": "http://peugeot.guoxinad.com.cn/pg_ask/",
            "mainimg": "upload1/20160629/1606290432003924.png",
            "title": "活，该快乐",
            "description": "",
            "content": "幻灯片展示+测试问答"
        },
         {
            "redirecturl": "http://dongfeng.guoxinad.com.cn/C3-XR-movie/",
            "mainimg": "upload1/20160202/1602020429253917.jpg",
            "title": "自由我心 幻彩巴黎",
            "description": "",
            "content": "创意互动，乐享趣味体验"
        },
        {
            "redirecturl": "http://phptest.guoxinad.com.cn/borui_liuliang/index.php",
            "mainimg": "upload1/20160202/1602021250108703.jpg",
            "title": "博瑞抢红包",
            "description": "",
            "content": "屏戳破了还是晚了一步"
        },
        {
            "redirecturl": "http://peugeot.insun-china.com/pg_blue/friend.php",
            "mainimg": "upload1/20160129/1601290159442620.jpg",
            "title": "东风标致的朋友圈",
            "description": "汽车/朋友圈/模拟/互动",
            "content": "看东风标致新推在朋友圈如何逗比"
        },
        {
            "redirecturl": "http://peugeot.guoxinad.com.cn/pg_408club/index.php",
            "mainimg": "upload1/20160129/1601291228356308.jpg",
            "title": "408男神CLUB",
            "description": "",
            "content": "480专属个性综合信息平台"
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