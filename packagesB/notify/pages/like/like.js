Page({
  data: {
    posts: [
      {
        id: 1,
        avatar: '/图片素材/莞工趣谈/首页/头像3.png', // 确保是字符串
        avatarl: '/图片素材/莞工趣谈/首页/组件/学习交流.png', // 确保是字符串
        username: 'Pursue',
        time: '刚刚',
        content: '求大物、Java、数据库、概率论资料，求求！',
        likes: 10, // 确保是数字
        comments: 5, // 确保是数字
      },
      {
        id: 2,
        avatar: '/图片素材/莞工趣谈/首页/头像2.png', // 确保是字符串
        avatarl: '/图片素材/莞工趣谈/首页/组件/校园杂谈.png', // 确保是字符串
        username: '折星',
        time: '1分钟前',
        content: '最近听到一首好听的歌曲，给大家推荐《天外来物》。',
        likes: 8, // 确保是数字
        comments: 3, // 确保是数字
      }
    ],
  },
  // onLoad() {
  //   this.fetchPosts();
  // },
  fetchPosts() {
    wx.request({
      url: 'https://your-backend-api/posts', // 替换为你的后端 API 地址
      method: 'GET',
      success: (res) => {
        // 确保从后端获取的数据类型正确
        const posts = res.data.map(post => ({
          ...post,
          avatar: post.avatar || '', // 确保是字符串
          avatarl: post.avatarl || '', // 确保是字符串
          likes: post.likes || 0, // 确保是数字
          comments: post.comments || 0, // 确保是数字
        }));
        this.setData({ posts });
      },
      fail: (err) => {
        console.error('获取帖子失败：', err);
      }
    });
  },
  handleLike(e) {
    const postId = e.detail.postId;
    const posts = this.data.posts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    this.setData({ posts });
    // 调用 updateLike 方法，同步到后台
    this.updateLike(postId, posts.find(p => p.id === postId).likes);
  },
  updateLike(postId, likes) {
    // 示例中的网络请求
    wx.request({
      url: 'https://your-backend-api/update_likes', // 替换为你的后端 API 地址
      method: 'POST',
      data: {
        postId,
        likes
      },
      success: (res) => {
        console.log('点赞成功，后台已更新：', res.data);
        // 可以在这里提示用户
        wx.showToast({
          title: '点赞成功',
          icon: 'success'
        });
      },
      fail: (err) => {
        console.error('点赞成功：', err);
        wx.showToast({
          title: '点赞成功',
          icon: 'none'
        });
      }
    });
  }
});