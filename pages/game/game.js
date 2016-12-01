var app = getApp()
Page({
  data: {
    defaultSize: "mini",
    loading: false,
    plain: false,
    disabled: false,
    lists: [
        {
            "redirecturl": "http://phptest.guoxinad.com.cn/insun_zhongqiu2016/index.php",
            "mainimg": "upload1/20160922/1609220519248400.jpg",
            "title": "映盛中秋",
            "description": "游戏/弹幕/互动",
            "content": "佳节游戏福利不停"
        },
        {
            "redirecturl": "http://peugeot.guoxinad.com.cn/pg_408_cut/index.php",
            "mainimg": "upload1/20160630/1606301056151271.jpg",
            "title": "全能男神邀您来剪彩",
            "description": "",
            "content": "汽车/游戏/福利兑换"
        },
        {
            "redirecturl": "http://dongfeng.guoxinad.com.cn/xiaokang/dfxk_secretGarden/",
            "mainimg": "upload1/20160629/1606290202267512.jpg",
            "title": "风光580的秘密花园",
            "description": "",
            "content": "填色游戏"
        },
        {
            "redirecturl": "http://phptest.guoxinad.com.cn/jili_fivestart/",
            "mainimg": "upload1/20160629/1606291119451653.jpg",
            "title": "五星大考验",
            "description": "",
            "content": "摇一摇游戏"
        },
        {
            "redirecturl": "http://peugeot.guoxinad.com.cn/pg_301_liuliang/index.php",
            "mainimg": "upload1/20160202/1602020100094822.jpg",
            "title": "省油大作战（迷宫）",
            "description": "",
            "content": "在迷宫中，选择最近的路，尽量节省301的油耗，以为自己争取更多的剩余油量变现为流量红包"
        },
        {
            "redirecturl": "http://php.guoxinad.com.cn/borui_dinuan/",
            "mainimg": "upload1/20160202/1602021235174666.jpg",
            "title": "我要暖宝宝",
            "description": "游戏/手绘/动画",
            "content": "萌动手绘小游戏"
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