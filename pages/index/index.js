const app = getApp();
const atoken = app.globalData.atoken;
Page({
  data: {
    lastRefreshTime: 0,
    scrollText: '这是一个自动滚动的文字示例，点击我可以查看完整内容。这是完整的文字内容，可能包含更多详细信息。',
    marqueeCopy: '', // 用于显示重复文本
    animationData: {},
    isPopupVisible: false,
    features: [
      { id: 1, icon: 'cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/校园指南.png', title: '校园指南', desc: '校园老司机带路', pagePath: '/packagesA/campus-circle/pages/xyzhinan/xyzhinan' },
      { id: 2, icon: 'cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/校园生活（图标）.png', title: '校园生活', desc: '吃喝玩乐大合集', pagePath: '/packagesA/campus-circle/pages/campusLife/campusLife' },
      { id: 3, icon: 'cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/学习交流（图标）.png', title: '学习交流', desc: '卷王修炼秘籍', pagePath: '/packagesA/campus-circle/pages/studyExchange/studyExchange' },
      { id: 4, icon: 'cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/校园杂谈（图标）.png', title: '校园杂谈', desc: '树洞碎碎念', pagePath: '/packagesA/campus-circle/pages/campusChat/campusChat' },
    ],
    posts: [
      {
        id: 605578004096,
        avatar: '/图片素材/post-icon/touxiang/头像3.png',
        avatarl:'/图片素材/post-icon/postsort/校园生活.png',
        
        username: 'Pursue',
        time: '刚刚',
        content: '求大物、Java、数据库、概率论资料，求求！',
        likes: 10,
        comments: 5,
      },
      {
        id: 2,
        avatar: '/图片素材/post-icon/touxiang/头像2.png',
        avatarl:'/图片素材/post-icon/postsort/校园杂谈.png',
        
        username: '折星',
        time: '1分钟前',
        content: '最近听到一首好听的歌曲，给大家推荐《天外来物》。',
        likes: 8,
        comments: 3,
      },
      {
        id: 3,
        avatar: '/图片素材/post-icon/touxiang/头像1.png',
        avatarl:'/图片素材/post-icon/postsort/有爱校园.png',
        
        username: '邶邶',
        time: '2分钟前',
        content: '收计算机组成原理，计算机系统，大学物理的教材~',
        likes: 15,
        comments: 6,
      },
      {
        id: 4,
        avatar: '/图片素材/post-icon/touxiang/头像1.png',
        avatarl:'/图片素材/post-icon/postsort/校园生活.png',
      
        username: '邵邵1',
        time: '3分钟前',
        content: '收计算机组成原理、计算机系统、',
        likes: 15,
        comments: 6,
      },
      {
        id: 5,
        avatar: '/图片素材/post-icon/touxiang/头像1.png',
        avatarl:'/图片素材/post-icon/postsort/有爱校园.png',
        username: '邵邵2',
        time: '4分钟前',
        content: '收计算机组成原理、计算机系统、大学物理的教材~',
        likes: 15,
        comments: 6,
      },
    ],
    page: 1,
    pageSize: 5,
    hasMore: true,
    isRefreshing: false,
    isFeaturesVisible: true, // 控制features区域是否可见
  },
  handlePostClick(e) {
    const postId = e.detail.postId; // 从组件事件获取
    wx.navigateTo({
      url: `/pages/post-detail/post-detail?postId=${postId}`
    });
  },
  navigateToDetail(e) {
    const postId = e.currentTarget.dataset.postid;
    wx.navigateTo({
      url: `/pages/post-detail/post-detail?postId=${postId}`
    })
  },
  //监听点赞
  onLike(e) {
    const { postId, isLiked, likes } = e.detail;
    const posts = this.data.posts.map(post => {
      if (post.id === postId) {
        return { ...post, isLiked, likes };
      }
      return post;
    });
    this.setData({ posts });
  },
// 公告
onLoad() {
  // 方式1：直接调用（简单场景）
  app.login().then(userInfo => {
    console.log('登录成功', userInfo);
  }).catch(error => {
    console.error('登录失败', error);
    wx.showToast({ title: '登录失败' })
  });
  this.startMarqueeAnimation();
  // 复制文字实现无缝衔接
  this.setData({
    marqueeCopy: this.data.scrollText.repeat(2)
  })
  this.startMarqueeAnimation()
},
startMarqueeAnimation() {
  const query = wx.createSelectorQuery().in(this)
  query.select('.marquee-text').boundingClientRect()
  query.select('.marquee-notice').boundingClientRect()
  query.exec((res) => {
    const textWidth = res[0]?.width || 0
    const noticeWidth = res[1]?.width || 0

    // 计算总运动距离（文字完全离开视野）
    const totalDistance = textWidth + noticeWidth
    
    // 设置滚动速度（值越小越快，建议30-50）
    const speedFactor = 1500 // 每像素需要的时间（毫秒）
    
    const animation = wx.createAnimation({
      duration: totalDistance * (speedFactor / 100), // 动态计算时间
      timingFunction: 'linear',
    })

    animation.translateX(-totalDistance).step()

    this.setData({
      animationData: animation.export(),
    }, () => {
      setTimeout(() => {
        const resetAnim = wx.createAnimation({ duration: 0 })
        resetAnim.translateX(noticeWidth).step()
        this.setData({
          animationData: resetAnim.export()
        }, () => {
          this.startMarqueeAnimation()
        })
      }, totalDistance * (speedFactor / 100)) // 同步时间设置
    })
  })
},

// 显示完整文字弹窗
showFullText() {
  this.setData({
    isPopupVisible: true
  });
},

// 隐藏弹窗
hidePopup() {
  this.setData({
    isPopupVisible: false
  });
},
  // 切换显示状态
  toggleFeatures() {
    this.setData({
      isFeaturesVisible: !this.data.isFeaturesVisible
    })
  },

  
  
  refreshPosts: function () {
    if (Date.now() - this.data.lastRefreshTime < 3000) {
      wx.stopPullDownRefresh();
      return;
    }
  
    wx.showLoading({ title: '加载中...' });
    this.setData({ 
      isRefreshing: true,
      lastRefreshTime: Date.now()
    });
  
    // 构建查询参数（兼容方案）
    const params = {
      page: 1,
      page_size: 2 // 与后端参数命名一致
    };
    
    const queryParts = [];
    for (const key in params) {
      queryParts.push(
        encodeURIComponent(key) + '=' + 
        encodeURIComponent(params[key])
      );
    }
    const queryString = queryParts.join('&');
  
    app.request({
      url: `http://117.50.46.248:8085/api/blog/list?${queryString}`,
      method: 'GET',
      data: {} // 必须保留空对象
    }).then(res => {
      const blogs = res.data?.data?.blogs || [];
      const newPosts = blogs.map(blog => ({
        id: blog.blog_id,
        avatar: blog.avatar || '/图片素材/post-icon/touxiang/默认头像.webp',
        avatarl: this._mapBlogTag(blog.blogtag),
        username: blog.nickname || '匿名用户',
        time: this._formatTime(blog.create_at),
        content: blog.content || '暂无内容',
        likes: blog.be_liked || 0,
        comments: blog.comment_count || 0
      }));
  
      this.setData({
        posts: newPosts,
        page: res.data?.data?.page || 1,
        hasMore: (res.data?.data?.page || 1) < 
                 Math.ceil((res.data?.data?.total || 0)/5)
      });
    }).catch(err => {
      console.error('加载失败:', err);
      wx.showToast({ title: '加载失败', icon: 'none' });
    }).finally(() => {
      wx.hideLoading();
      this.setData({ isRefreshing: false });
    });
  },

// 添加分类图标映射方法
_mapBlogTag: function(tag) {
  const map = {
    '学习交流': '/图片素材/post-icon/postsort/学习交流（图标）.png',
    '校园生活': '/图片素材/post-icon/postsort/校园生活（图标）.png',
    '校园杂谈': '/图片素材/post-icon/postsort/校园杂谈（图标）.png',
  };
  return map[tag] || '/图片素材/post-icon/postsort/default.png';
},

// 调整时间格式化方法
_formatTime: function(timeString) {
  if (!timeString) return '刚刚';
  const date = new Date(timeString);
  const now = new Date();
  const diff = now - date;
  
  const minute = Math.floor(diff / 60000);
  if (minute < 1) return '刚刚';
  if (minute < 60) return `${minute}分钟前`;
  
  const hour = Math.floor(diff / 3600000);
  if (hour < 24) return `${hour}小时前`;
  
  const day = Math.floor(diff / 86400000);
  return `${day}天前`;
},

  // 加载更多数据
  loadMorePosts: function () {
    if (!this.data.hasMore || this.data.loading) return;
    this.setData({ loading: true });
    setTimeout(() => {
      const newPosts = [
        {
          id: 8,
          avatar: '/图片素材/post-icon/touxiang/默认头像.webp',
          avatarl:'/图片素材/post-icon/postsort/有爱校园.png',
          picture:'/图片素材/post-icon/post-picture/小八.jpg',
          username: '上拉触底1',
          time: '3分钟前',
          content: '新内容：这里是加载的更多数据。',
          likes: 10,
          comments: 5,
        },
        {
          id: 9,
          avatar: '/图片素材/post-icon/touxiang/默认头像.webp',
          avatarl:'/图片素材/post-icon/postsort/校园杂谈.png',
          picture:'/图片素材/post-icon/post-picture/肥兔.jpg',
          username: '上拉触底2',
          time: '4分钟前',
          content: '新内容：这里是加载的更多数据。',
          likes: 8,
          comments: 3,
        }
      ];
      this.setData({
        posts: this.data.posts.concat(newPosts),
        hasMore: newPosts.length > 0
      });
    }, 1000);
  },

  // 上拉触底事件
  onReachBottom: function () {
    this.loadMorePosts();
  },

  // 下拉刷新事件
  onPullDownRefresh: function () {
    this.refreshPosts();
    wx.stopPullDownRefresh();
  },
});