Component({
  properties: {
    id: String,
    avatar: String,
    avatarl: String,
    username: String,
    time: String,
    content: String,
    likes: Number,
    comments: Number,
    collects: Number,
    isLiked: { // 新增isLiked属性
      type: Boolean,
      value: false
    }
  },
  methods: {
    handleLike(e) {
      const postId = this.properties.id;
      const isLiked = this.properties.isLiked;
      const url = isLiked ? 'http://117.50.46.248:8085/api/blog/unlike' : 'http://117.50.46.248:8085/api/blog/like';
      const data = { blog_id: postId };

      const app = getApp();
      app.request({
        url: url,
        method: 'POST',
        data: data
      }).then(res => {
        console.log('后端返回数据:', res);
        // 触发事件通知父组件更新
        const newLikes = isLiked ? this.properties.likes - 1 : this.properties.likes + 1;
        this.triggerEvent('like', {
          postId: postId,
          isLiked: !isLiked,
          likes: newLikes
        });
      }).catch(err => {
        console.error('点赞操作失败:', err);
      });
    },

      
    onPostClick(e) {
      // 必须手动触发父页面事件
      this.triggerEvent('tap', { postId: this.properties.id }, {
        bubbles: true,  // 事件冒泡
        composed: true  // 跨越组件边界
      });
    }
  }
});