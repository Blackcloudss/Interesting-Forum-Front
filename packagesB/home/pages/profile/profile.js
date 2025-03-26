Page({
  data: {
    signature: '写下个性签名会更容易获得别人关注哦~',
    id: '2023414******',
    college: '计算机学院',
    posts: [
      { date: '01-17', content: '求Java优质网课推荐。' },
      { date: '01-01', content: '新的一年，祝大家新年快乐！喜乐相伴，永远做自己~' }
    ],
    favorites: [
      { date: '01-18', content: '收藏的帖子1' },
      { date: '01-19', content: '收藏的帖子2' }
    ],
    currentTab: 'posts',
    editSignatureModalVisible: false,
    editInfoModalVisible: false,
    avatarUrl: '/图片素材/1-5我的主页/个人主页.png' // 默认头像路径
  },
  
  showPosts() {
    this.setData({
      currentTab: 'posts'
    });
  },
  
  showFavorites() {
    this.setData({
      currentTab: 'favorites'
    });
  }
});