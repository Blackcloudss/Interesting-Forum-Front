const app = getApp();
console.log('当前 atoken:', app.globalData.atoken);

Page({
  data: {
    title: '',
    titleCount: 0,
    showTopicPopup: false,
    categories: [
      { name: '校园生活', subTags: ['二手交易', '失物招领', '爱心校园', '吃喝玩乐', '跑腿代拿', '兼职招聘'] },
      { name: '学习交流', subTags: ['资料分享', '课程评价', '赛事大全', '答疑解惑'] },
      { name: '校园杂谈', subTags: ['表白', '求助答题', '找搭子', '其他'] }
    ],
    currentCategory: null,
    currentSubTags: [],
    selectedCategory: '',
    selectedSubTag: '',
    inputText: '',
    wordCount: 0,
    images: [],
    viewPermission: '',
    showPermissionPopup: false,
  },

  selectMainCategory(e) {
    const category = e.currentTarget.dataset.category;
    const subTags = this.data.categories.find(c => c.name === category).subTags;
    this.setData({ currentCategory: category, currentSubTags: subTags });
  },

  backToMainCategory() {
    this.setData({ currentCategory: null, currentSubTags: [] });
  },

  selectSubTag(e) {
    const subTag = e.currentTarget.dataset.tag;
    this.setData({
      selectedSubTag: subTag,
      showTopicPopup: false,
      selectedTopic: `${this.data.currentCategory} > ${subTag}`
    });
  },

  onTitleInput(e) {
    const value = e.detail.value;
    this.setData({ title: value, titleCount: value.length });
  },

  onInputChange(e) {
    const value = e.detail.value;
    this.setData({ inputText: value, wordCount: value.length });
  },

  chooseImage() {
    const { images } = this.data;
    wx.chooseImage({
      count: 5 - images.length,
      success: (res) => {
        this.setData({ images: [...images, ...res.tempFilePaths] });
      },
      fail: (err) => console.error('选择图片失败', err)
    });
  },

  previewImage(e) {
    const { url } = e.currentTarget.dataset;
    wx.previewImage({ current: url, urls: this.data.images });
  },

  deleteImage(e) {
    const index = e.currentTarget.dataset.index;
    const { images } = this.data;
    this.setData({ images: images.filter((_, i) => i !== index) });
  },

  onTopicSelect() {
    this.setData({ showTopicPopup: true });
  },

  closeTopicPopup() {
    this.setData({ showTopicPopup: false });
  },

  showPermissionPopup() {
    this.setData({ showPermissionPopup: true });
  },

  selectOption(e) {
    const option = e.currentTarget.dataset.option;
    this.setData({ viewPermission: option, showPermissionPopup: false });
  },

  closePopup() {
    this.setData({ showPermissionPopup: false });
  },

  async onPublish() {
    const { title, inputText, images, viewPermission, selectedSubTag, currentCategory } = this.data;
  
    if (!title || !inputText || !viewPermission || !selectedSubTag || !currentCategory) {
      wx.showToast({ title: '请填写完整信息', icon: 'none' });
      return;
    }
  
    try {
      const formData = {
        title: title,
        content: inputText,
        blogtag: currentCategory,
        sub_tag: selectedSubTag,
        view_permission: viewPermission
      };
  
      // 统一使用上传文件接口格式
      const uploadPromises = [];
      const boundary = '--------Boundary' + Math.random().toString(16);
      const headers = {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
        'Authorization': getApp().globalData.atoken
      };
  
      // 构建 multipart 请求体
      let body = '';
      for (const key in formData) {
        body += `--${boundary}\r\n`;
        body += `Content-Disposition: form-data; name="${key}"\r\n\r\n`;
        body += `${formData[key]}\r\n`;
      }
      
      // 添加图片部分
      images.forEach((imagePath, index) => {
        body += `--${boundary}\r\n`;
        body += `Content-Disposition: form-data; name="image_files"; filename="image${index}.jpg"\r\n`;
        body += `Content-Type: image/jpeg\r\n\r\n`;
        body += wx.getFileSystemManager().readFileSync(imagePath, 'base64') + '\r\n';
      });
  
      body += `--${boundary}--\r\n`;
  
      // 统一发送请求
      const res = await getApp().request({
        url: 'http://117.50.46.248:8085/api/blog/create',
        method: 'POST',
        data: body,
        header: headers
      });
  
      wx.showToast({ title: '发布成功', icon: 'success' });
      this.resetForm();
    } catch (error) {
      console.error('发布失败:', error);
      wx.showToast({ title: `发布失败: ${error.message}`, icon: 'none' });
    }
  },
  
  resetForm() {
    this.setData({
      title: '',
      inputText: '',
      images: [],
      viewPermission: '',
      electedCategory: '',
      selectedSubTag: '',
      currentCategory: null,
      wordCount: 0,
      titleCount: 0
    });
  }
});