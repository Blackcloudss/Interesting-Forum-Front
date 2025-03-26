Page({
  data: {
    followCount: 0,
    followerCount: 1
  },
  navigateTo: function(e) {
    const page = e.currentTarget.dataset.page;
    wx.navigateTo({
      url: `/packagesB/home/pages/${page}/${page}`
    });
  },
  navigateToProfile: function() {
    wx.navigateTo({
      url: '/packagesB/home/pages/profile/profile'
    });
  },
  onLoad: function() {
    // 模拟 getABTestConfig 的返回值
    wx.getABTestConfig({
      success: (res) => {
        console.log('AB Test Config:', res);
        // 处理返回的数据
      },
      fail: (err) => {
        console.error('Failed to get AB Test Config:', err);
        // 处理错误情况
      }
    });
  }
});