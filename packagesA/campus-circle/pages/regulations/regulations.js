// pages/regulations/regulations.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    linkToCopy: 'https://docs.qq.com/aio/DSU1kTkFIbkt1WGZw',
    currentLink: '',
    regulations: [
      {
        id: 1,
        text: "关于做好2025年上半年全国大学英语四、六级笔试及口试报名的通知",
        link: "https://jwb.dgut.edu.cn/info/1071/28061.htm"
      },
      {
        id: 2,
        text: "关于2024-2025学年第二学期结业复读生考试报名的通知",
        link: "https://jwb.dgut.edu.cn/info/1071/28031.htm"
      },
      {
        id: 3,
        text: "关于2025届毕业生重修考试报名的通知",
        link: "https://jwb.dgut.edu.cn/info/1071/28021.htm"
      },
      {
        id: 4,
        text: "关于2024-2025学年第一学期初修课程重修考试的通知",
        link: "https://jwb.dgut.edu.cn/info/1071/28011.htm"
      }
    ]
  },
  // 学生手册
  showModal() {
    this.setData({
      showModal: true
    });
  },

  hideModal() {
    this.setData({
      showModal: false
    });
  },
  copyLink() {
    const link = this.data.linkToCopy;
    wx.setClipboardData({
      data: link,
      success() {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1500
        });
      },
      fail(err) {
        console.error('复制失败:', err);
        wx.showToast({
          title: '复制失败',
          icon: 'none',
          duration: 1500
        });
      }
    });
  },
    // 教学管理规定点击事件
    showRegulationModal(e) {
      const link = e.currentTarget.dataset.link;
      this.setData({
        showModal: true,
        currentLink: link
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