// pages/found/found.js
Page({
data:{
  history: [
    "今天吃什么？",
    "有人出《操作系统》二手书嘛？",
    "菜鸟驿站怎么退货？",
    "附近有什么吃的",
    "饭堂新品",
  ],
  hotTopics: [
    "放假只开二饭一楼，求晚餐推荐",
    "期末绩点怎么算？",
    "食堂门口的猫好可爱",
    "期末60分，是不是老师捞的？",
    "找留校羽毛球搭子",

    "放假只开二饭一楼，求晚餐推荐",
    "期末绩点怎么算？",
    "食堂门口的猫好可爱",
    "期末60分，是不是老师捞的？",
    "找留校羽毛球搭子",

    "放假只开二饭一楼，求晚餐推荐",
    "期末绩点怎么算？",
    "食堂门口的猫好可爱",
    "期末60分，是不是老师捞的？",
    "找留校羽毛球搭子",
    "放假只开二饭一楼，求晚餐推荐",
    "期末绩点怎么算？",
    "食堂门口的猫好可爱",
    "期末60分，是不是老师捞的？",
    "找留校羽毛球搭子"

  ],
  inputValue: '' // 添加inputValue初始值
},
  onInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  onSearch() {
    const inputValue = this.data.inputValue;
    if (inputValue) {
      // 先去重，再添加到历史记录中
      const newHistory = [...new Set([inputValue, ...this.data.history])];
      this.setData({
        history: newHistory,
        inputValue: '' // 搜索后清空输入框
      });
    }
  },
    onDeleteHistory(e) {
      const index = e.currentTarget.dataset.index;
      const newHistory = this.data.history.filter((_, i) => i !== index);
      this.setData({
        history: newHistory
      });
    }
  
});

