// pages/ai/ai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showHistory: false,
    isCollapsed: false, // 新增折叠状态
    messages: [], 
    inputValue: '',
    historyList: [],
    isSending: false,
    historyList: [
      { question: "问题1", answer: "回答1" },
      { question: "问题2", answer: "回答2" }
    ],
    modelList: [
      { name: '中英文翻译', type: 'translation' },
      { name: '文本大纲生成', type: 'outline' },
      { name: '宣传标语定制', type: 'slogan' },
      { name: 'ITAD学姐', type: 'itad' },
      { name: '琪露诺', type: 'cirno' }
    ],
    selectedModel: 'translation'
  },
  // 新增折叠方法
toggleCollapse() {
  this.setData({ 
    isCollapsed: !this.data.isCollapsed,
    showHistory: false // 关闭历史侧边栏
  })
},
// 新增方法
handleHistory(e) {
  this.setData({ 
    showHistory: true,
    isCollapsed: true // 新增此行
  })
  return false
},

  // 切换历史侧边栏
  toggleHistory() {
    const newState = !this.data.showHistory
    this.setData({ 
      showHistory: newState,
      isCollapsed: newState ? true : this.data.isCollapsed // 当打开侧边栏时强制收起
    })
  },
  
    // 新增阻止触摸默认行为
    preventTouch() {
      return false
    },
// 标签点击处理
selectModel(e) {
  console.log('当前消息列表:', this.data.messages);
  const type = e.currentTarget.dataset.type;
  this.setData({ selectedModel: type });
  // 调用接口时传递模型参数
},
  // 输入处理
  onInput(e) {
    this.setData({ inputValue: e.detail.value })
  },
   // 发送消息
   sendMessage() {
    const msg = this.data.inputValue.trim()
    if (!msg || this.data.isSending) return
    
    // 添加临时用户消息
    const newMessage = {
      role: 'user',
      content: msg,
      timestamp: +new Date()
    }
    
    this.setData({
      messages: [...this.data.messages, newMessage],
      inputValue: '',
      isSending: true
    }, () => {
      // 在回调中确保渲染完成
      this.setData({
        scrollTop: this.data.messages.length * 1000 // 动态计算滚动位置
      })
      
      // 模拟AI回复
      setTimeout(() => {
        const aiResponse = {
          role: 'ai',
          content: '收到你的消息啦！这里是模拟回复：' + msg,
          timestamp: +new Date()
        }
        this.setData({
          messages: [...this.data.messages, aiResponse],
          isSending: false
        }, () => {
          this.setData({
            scrollTop: this.data.messages.length * 1000
          })
        })
      }, 800)
    })
  },
   
     // 清除历史记录
clearHistory() {
  wx.request({
    url: `https://your-domain.com/api/ai/delete/${this.data.selectedModel}`,
    method: 'DELETE',
    success: () => {
      this.setData({ historyList: [] });
      wx.removeStorageSync('chatHistory');
    }
  });
},
      // 点击历史记录搜索
  searchHistory(e) {
    const content = e.currentTarget.dataset.content;
    this.setData({
      inputValue: content,
      showHistory: false
    })
  },
  parseSSEData(rawData) {
    try {
      const text = new TextDecoder().decode(rawData);
      const event = text.match(/event: (\w+)/)?.[1];
      const content = text.match(/data: (.*)/)?.[1];
      return { event, content };
    } catch (e) {
      return { event: 'error', content: e.message };
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const history = wx.getStorageSync('chatHistory') || []
    this.setData({
      messages: history,
      scrollTop: history.length ? 999999 : 0
    })
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