// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showOverviewModal1: false,
    showLinkModal1: false,
    showOverviewModal2: false,
    showLinkModal2: false,
    showImageModal: false,
    campusLink1: 'https://www.720yun.com/t/11vkshpmgry?scene_id=50170170',
    campusLink2: 'https://www.720yun.com/t/11vkshpmgry?scene_id=50170183',
    imageSrc: 'cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/校园地图/校巴时间.jpg',
    campusOverview1: '  松山湖校区坐落在松山湖高新技术产业开发区大学路1号，占地1860亩（含370亩国际合作创新区）；\n  莞城校区坐落在莞城区学院路251号，占地332亩。',
    campusOverview2: '  松山湖校区坐落在松山湖高新技术产业开发区大学路1号，占地1860亩（含370亩国际合作创新区）；\n  莞城校区坐落在莞城区学院路251号，占地332亩。'
  },
  showCampusOverviewModal1() {
    this.setData({
        showOverviewModal1: true
    });
},
hideCampusOverviewModal1() {
    this.setData({
        showOverviewModal1: false
    });
},
 // 复制链接
 copyLink1() {
  wx.setClipboardData({
      data: this.data.campusLink1,
      success: () => {
          wx.showToast({
              title: '复制成功',
              icon: 'none',
              duration: 1500
          });
      }
  });
},
showCampusLinkModal1() {
    this.setData({
        showLinkModal1: true
    });
},
hideCampusLinkModal1() {
  this.setData({
      showLinkModal1: false
  });
},
showCampusOverviewModal2() {
  this.setData({
      showOverviewModal2: true
  });
},
hideCampusOverviewModal2() {
  this.setData({
      showOverviewModal2: false
  });
},
showCampusLinkModal2() {
  this.setData({
      showLinkModal2: true
  });
},
hideCampusLinkModal2() {
  this.setData({
      showLinkModal2: false
  });
},
copyLink2() {
  wx.setClipboardData({
      data: this.data.campusLink2,
      success: () => {
          wx.showToast({
              title: '复制成功',
              icon: 'none',
              duration: 1500
          });
      }
  });
},
showImageModal() {
  this.setData({
      showImageModal: true
  });
},
hideImageModal() {
  this.setData({
      showImageModal: false
  });
},
    // 图片预览
    previewImage() {
      wx.previewImage({
          current: this.data.imageSrc,
          urls: [this.data.imageSrc]
      });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})