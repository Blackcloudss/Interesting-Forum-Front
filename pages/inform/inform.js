Page({
  data: {
    // 模拟数据
    messages: [
      { nickname: '豆浆', time: '01-15', content: '请问出《操作系统》的二手书嘛？' },
{ nickname: 'pursue', time: '01-15', content: '请问出《python数据分析与应用》的二手书嘛？' },
      { nickname: '邹围有只燕子的晴天', time: '2025-01-14', content: '你今天发的那只猫猫好可爱呀！' }
    ]
  },
  navigateToLike: function() {
    wx.navigateTo({
      url: '/packagesB/notify/pages/like/like'
    });
  },
  navigateToComment: function() {
    wx.navigateTo({
      url: '/packagesB/notify/pages/comment/comment'
    });
  },
  navigateToFollow: function() {
    wx.navigateTo({
      url: '/packagesB/notify/pages/follow/follow'
    });
  },
  navigateToNotification: function() {
    wx.navigateTo({
      url: '/packagesB/notify/pages/notification/notification'
    });
  },
  
  onLoad: function () {
         // 处理数据加载逻辑等
  },
}); 

