// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contactList: [
      {
          id: 1,
      
          title: "校医室电话",
          info: "22861120\n备注：就诊时间：\n（周一至周五）8:30-12:30  14:00-18:30\n（周末节假日）9:00-11:00  15:00-17:00"
      },
      {
          id: 2,
      
          title: "饮用水服务",
          info: "22861382"
      },
      {
          id: 3,
      
          title: "网络故障报修",
          info: "22861378"
      },
      {
        id: 4,
    
        title: "预约心里咨询电话",
        info: "22863163（松山湖校区）\n22625570(莞城校区)"
    },
    {
      id: 5,
  
      title: "教务处电话",
      info: "22861099"
  },
  {
    id: 6,

    title: "安保值班电话",
    info: "22861310"
},
{
  id: 7,
  title: "学校警务室",
  info: "19928137801"
},
{
  id: 8,
  title: "学术交流中心",
  info: "22862286"
},
{
  id: 9,
  title: "图书馆电话",
  info: "22861213"
},
{
  id: 10,
  title: "校党委宣传部",
  info: "22861229"
},
{
  id: 11,
  title: "紧急维修电话",
  info: "22861221"
},
{
  id: 12,
  title: "学生公寓服务中心电话",
  info: "22861366"
},
{
  id: 13,
  title: "招生就业办",
  info: "22861919"
},
{
  id: 14,
  title: "收发室",
  info: "22861658"
},
{
  id: 15,
  title: "本校总值班",
  info: "22861008"
},
{
  id: 16,
  title: "保卫处",
  info: "22861310"
},
{
  id: 17,
  title: "校卫队",
  info: "22861119"
},
{
  id: 18,
  title: "松山湖派出所",
  info: "22891110"
},
{
  id: 19,
  title: "学校热水投诉电话",
  info: "22861373"
},
{
  id: 20,
  title: "广播站点歌",
  info: "22861339"
},
  ],
  },
    // 复制联系信息
    copyContactInfo(e) {
      const info = e.currentTarget.dataset.info;
      if (!info) {
          return wx.showToast({ title: '无内容可复制', icon: 'none' });
      }
      wx.setClipboardData({
        data: info,
        success: () => {
            wx.showToast({
                title: '复制成功',
                icon: 'none',
                duration: 1500
            });
        },
        fail: (err) => {
          console.error('复制失败:', err);
          wx.showToast({
              title: '复制失败，请重试',
              icon: 'none',
              duration: 1500
          });
      }
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