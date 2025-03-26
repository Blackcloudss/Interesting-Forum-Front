Page({
  data: {
    // 第一个板块
    avatarUrl: '/莞工趣谈/“我的”页面补充/默认头像 1.svg', // 默认头像地址
    nickname: '', // 昵称

    // 第二个板块
    signature: '', // 个性签名
    genders: ['请选择性别','男', '女'],
    genderIndex: 0, // 性别索引

    // 第三个板块
    realName: '', // 真实姓名
    studentId: '2023414320201', // 完整学号
    studentIdDisplay: '*************', // 显示的学号
    departments: ['','马克思主义学院','计算机科学与技术学院（软件学院、网络空间安全学院）', '卓越工程师学院','电信工程与智能化学院','生态环境与建筑工程学院','化学功能与能源技术学院','机械工程学院','材料科学与工程学院','国际微电子学院','生命健康技术学院','经济与管理学院','文学与传媒学院','法律与社会工作学院','教育学院','粤台产业科技学院','东莞理工学院法国国立工艺学院联合学院','学生社区知行学院','国际学院','其他'],
    departmentIndex: 0, // 院系索引
    major: '', // 专业
    enrollmentYears: ['','2025年','2024年','2023年', '2022年', '2021年', '2020年','2019年','2018年','2017年','2016年','2015年','2014年','2013年','2012年','2011年','2010年','2009年','2008年','2007年','2006年','2005年','2004年','2003年','2002年','2001年','2000年'],
    enrollmentYearIndex: 0, // 入学年份索引
    phoneNumber: '' // 手机号
  },

  onLoad() {
    // 模拟从登录信息获取昵称
    this.setData({
      nickname: ''
    });
  },

  // 选择头像
  chooseAvatar() {
    wx.chooseMedia({
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success: (res) => {
        this.setData({
          avatarUrl: res.tempFiles[0].tempFilePath
        });
      }
    });
    // 上传头像到服务器（可选）
    this.uploadAvatar(avatarUrl);
  },
  uploadAvatar(tempFilePath) {
    // 实际开发中需替换为你的上传接口
    wx.uploadFile({
      url: 'https://your-api.com/upload',
      filePath: tempFilePath,
      success: (res) => {
        const serverUrl = JSON.parse(res.data).url;
        this.setData({ avatarUrl: serverUrl }); // 替换为服务器存储的头像
      }
    });
  },


  // 昵称输入事件
  onNicknameInput(e) {
    this.setData({
      nickname: e.detail.value
    });
  },

  // 个性签名输入事件
  onSignatureInput(e) {
    this.setData({
      signature: e.detail.value
    });
  },

  // 性别选择事件
  onGenderChange(e) {
    this.setData({
      genderIndex: e.detail.value
    });
  },


  saveProfile() {
    const { 
      avatarUrl, 
      nickname, 
      signature, 
      genderIndex,
      realName, 
      phoneNumber 
    } = this.data;

    // 校验必填项
    if (avatarUrl === '/莞工趣谈/“我的”页面补充/默认头像 1.svg') {
      wx.showToast({ title: '请上传头像', icon: 'none' });
      return;
    }
    if (!nickname.trim()) {
      wx.showToast({ title: '请输入昵称', icon: 'none' });
      return;
    }
    if (!signature.trim()) {
      wx.showToast({ title: '请输入个性签名', icon: 'none' });
      return;
    }
    if (genderIndex === 0) {
      wx.showToast({ title: '请选择性别', icon: 'none' });
      return;
    }

    // 所有校验通过后执行保存
    wx.showLoading({ title: '保存中...' });
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({ title: '资料保存成功！', icon: 'success' });
      
      // 实际开发中这里需要：
      // 1. 提交数据到服务器
      // 2. 保存成功后返回上一页
      // wx.navigateBack();
      wx.navigateTo({
        url: '/pages/aboutus/aboutus',
        success: () => {
          // 跳转成功后执行额外逻辑
          console.log("跳转页面")
        },
        fail: (err) => {
          console.error('跳转失败', err);
        }
      });
    }, 800);
      // 在目标页面禁止返回（需要自定义导航栏）
wx.hideHomeButton(); // 隐藏首页按钮
  },
});