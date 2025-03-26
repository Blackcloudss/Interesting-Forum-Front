// pages/set/set.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isNotificationEnabled: false, // 开关的初始状态，false表示关闭，true表示开启
    privateMessageOptions: ['所有人', '仅好友', '仅自己'],
    postShowOptions: ['所有人', '仅好友', '仅自己'],
    commentShowOptions: ['所有人', '仅好友', '仅自己'],
    privateMessageIndex: 0,
    postShowIndex: 0,
    commentShowIndex: 0
  },
  
  
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const app = getApp();
    this.setData({
      privateMessageIndex: this.data.privateMessageOptions.indexOf(app.globalData.privateMessageScope),
      postShowIndex: this.data.postShowOptions.indexOf(app.globalData.postShowScope),
      commentShowIndex: this.data.commentShowOptions.indexOf(app.globalData.commentShowScope),
      isNotificationEnabled: app.globalData.isNotificationEnabled
    });
  },
  //消息通知开关
  onNotificationToggle(e) {
    const app = getApp();
    const newStatus = e.detail.value;
    app.globalData.isNotificationEnabled = newStatus;
    this.setData({
        isNotificationEnabled: newStatus
    });
},
  bindPrivateMessageChange(e) {
    const app = getApp();
    app.globalData.privateMessageScope = this.data.privateMessageOptions[e.detail.value];
    this.setData({
      privateMessageIndex: e.detail.value
    });
  },
  bindPostShowChange(e) {
    const app = getApp();
    app.globalData.postShowScope = this.data.postShowOptions[e.detail.value];
    this.setData({
      postShowIndex: e.detail.value
    });
  },
  bindCommentShowChange(e) {
    const app = getApp();
    app.globalData.commentShowScope = this.data.commentShowOptions[e.detail.value];
    this.setData({
      commentShowIndex: e.detail.value
    });
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