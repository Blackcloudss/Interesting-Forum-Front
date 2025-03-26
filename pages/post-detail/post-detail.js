Page({
  data: {
      showFollowModal: false,
      showAllComments: false,
      comments: [
          {
              nickname: "pursue",
              time: "1分钟前",
              content: "我有大学物理C版本和大学物理实验。",
              replies: [
                  {
                      fromNickname: "邶邶",
                      toNickname: "pursue",
                      content: "可以可以，我私信你"
                  }
              ],
              likeCount: 10,
              collectCount: 5
          },
          {
              nickname: "折星",
              time: "1分钟前",
              content: "我有计算机组成原理。",
              replies: [
                {
                    fromNickname: "邶邶",
                    toNickname: "折星",
                    content: "多少钱卖呢？"
                }
            ],
              likeCount: 18,
              collectCount: 2,
          },
          {
            nickname: "pursue",
            time: "1分钟前",
            content: "我有大学物理C版本和大学物理实验。",
            replies: [
              {
                  fromNickname: "邶邶",
                  toNickname: "pursue",
                  content: "可以可以，我私信你"
              }
          ],
            likeCount: 18,
            collectCount: 2
          }
      ]
  },
  // 显示关注模态框
  showFollowModal() {
      this.setData({
          showFollowModal: true
      });
  },
  // 隐藏关注模态框
  hideFollowModal() {
      this.setData({
          showFollowModal: false
      });
  },
  // 切换显示所有评论
  toggleShowAllComments() {
      this.setData({
          showAllComments: !this.data.showAllComments
      });
  },
  // 跳转到用户主页
  goToUserPage() {
      // 这里可以添加跳转到用户主页的逻辑
      wx.showToast({
          title: '跳转到用户主页',
          icon: 'none'
      });
  },
  // 输入框内容变化处理
  onInputChange(e) {
    this.setData({
        inputValue: e.detail.value
    });
},
// 发送消息处理
sendMessage() {
    if (this.data.inputValue) {
        // 这里可以添加发送消息的逻辑，例如将消息添加到评论列表中
        const newComment = {
            nickname: "你的昵称",
            time: new Date().toLocaleString(),
            content: this.data.inputValue,
            replies: [],
            likeCount: 0,
            collectCount: 0
        };
        this.setData({
            comments: [...this.data.comments, newComment],
            inputValue: ''
        });
    }
}
})
  