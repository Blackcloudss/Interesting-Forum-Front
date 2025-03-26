Component({
  properties: {
    // 可自定义图标颜色
    color: {
      type: String,
      value: '#07c160'
    }
  },

  data: {
    showPopup: false
  },

  methods: {
    togglePopup() {
      this.setData({
        showPopup: !this.data.showPopup
      })
    },

    navigateToAI() {
      this.setData({ showPopup: false })
      wx.navigateTo({
        url: '/pages/ai/ai'
      })
    }
  }
})