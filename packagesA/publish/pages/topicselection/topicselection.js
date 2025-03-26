Page({
  selectTopic(e) {
    const topic = e.currentTarget.dataset.topic
    console.log('[DEBUG] 选中话题:', topic)
    
    // ✅ 优先使用事件通道
    const eventChannel = this.getOpenerEventChannel()
    if (eventChannel) {
      eventChannel.emit('acceptSelectedTopic', { topic })
    }
    
    // ✅ 确保在emit之后才返回
    wx.navigateBack({ delta: 1 })
  }
})