// pages/authority/authority.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: [
      { id: 1, icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/学校官网.svg", name: "学校官网",url:"http://www.dgut.edu.cn"},
      { id: 2, icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/教务平台.svg", name: "教务平台",url:"http://jwc.dgut.edu.cn" },
      { id: 3, icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/学工系统.svg", name: "学工系统",url:"http://stu.dgut.edu.cn" },
      { id: 4, icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/学生事务中心.svg", name: "学生事务中心",url:"https://sa.dgut.edu.cn"},
      { id: 5, icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/青果系统.svg", name: "青果系统",url:"https://jw.dgut.edu.cn/cas/login.action" },
      { id: 6, icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/WebVpn.svg", name: "WevVpn",url:"https://webvpn.dgut.edu.cn/" },
      { id: 7, icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/材料订购.svg", name: "教材订购",url:"http://bkm.dgut.edu.cn " },
      { id: 8, icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/校园网.svg", name: "校园网",url:"https://self.dgut.edu.cn/" },
      { id: 9, icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/体育选课.svg", name: "体育选课",url:"https://sport.dgut.edu.cn" },
      { id: 10, icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/知行学院.svg", name: "知行学院",url:"https://zxs.dgut.edu.cn/pc/activity" },
      { id: 11, icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/通识课堂 (1).svg", name: "通识教育",url:"https://tsjy.dgut.edu.cn/" },
      { id: 12, icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/课外学分.svg", name: "课外学分",url:"http://kwxf.dgut.edu.cn/h5" },
    ],
    contactList: [
      {
          id: 1,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/电话.svg",
          title: "校医室电话    ",
          info: "22861120"
      },
      {
          id: 2,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/电话.svg",
          title: "饮用水服务    ",
          info: "22861382"
      },
      {
          id: 3,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/电话.svg",
          title: "网络故障报修",
          info: "22861378"
      }
  ],
    // 新增不同标签对应的数据
    allItems: [
      // 平台账号
      [
        { 
          id: 1,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/微信.svg",
          text: "东莞理工学院微信公众号",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/平台账号/东莞理工学院微信公众号.jpg"
        },
        {
          id: 2,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/微信.svg",
          text: "东莞理工学院微信视频号",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/平台账号/东莞理工学院微信视频号.jpg"
        },
        {
          id: 3,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/抖音-copy.svg",
          text: "东莞理工学院抖音",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/平台账号/东莞理工学院抖音.jpg"
        },
        {
          id: 4,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/微博.svg",
          text: "东莞理工学院微博",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/平台账号/东莞理工学院微博.jpg"
        }
      ],
      // 职能部门
      [
        {
          id: 1,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/职能部门.svg",
          text: "智慧莞工",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/职能部门/智慧莞工.jpg"
        },
        {
          id: 2,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/职能部门.svg",
          text: "莞工教务",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/职能部门/莞工教务.jpg"
        },
        {
          id: 3,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/职能部门.svg",
          text: "莞工心理",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/职能部门/莞工心理.jpg"
        },
        {
          id: 4,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/职能部门.svg",
          text: "莞工学工",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/职能部门/莞工学工.jpg"
        },
        {
          id: 5,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/职能部门.svg",
          text: "东莞理工学院图书馆",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/职能部门/东莞理工学院图书馆.jpg"
        },
        {
          id: 6,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/职能部门.svg",
          text: "莞工就业",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/职能部门/莞工就业.jpg"
        },
        {
          id: 7,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/职能部门.svg",
          text: "莞工资助",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/职能部门/莞工资助.jpg"
        },
        {
          id: 8,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/职能部门.svg",
          text: "莞工总务后勤",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/职能部门/莞工总务后勤.jpg"
        }
      ],
      //二级学院
      [
        {
          id: 1,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/二级学院.svg",
          text: "材料科学与技术学院",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/二级学院公众号/材料科学与技术学院.jpg"
        },
        {
          id: 2,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/二级学院.svg",
          text: "电信工程与智能化学院",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/二级学院公众号/电信工程与智能化学院.jpg"
        },
        {
          id: 3,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/二级学院.svg",
          text: "东莞理工学院法国国立工艺学院联合学院",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/二级学院公众号/东莞理工学院法国国立工艺学院联合学院.jpg"
        },
        {
          id: 4,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/二级学院.svg",
          text: "法律与社会工作学院",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/二级学院公众号/法律与社会工作学院.jpg"
        },
        {
          id: 5,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/二级学院.svg",
          text: "国际微电子学院",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/二级学院公众号/国际微电子学院.jpg"
        },
        {
          id: 6,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/二级学院.svg",
          text: "国际学院",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/二级学院公众号/国际学院.jpg"
        },
        {
          id: 7,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/二级学院.svg",
          text: "化学工程与能源技术学院",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/二级学院公众号/化学工程与能源技术学院.jpg"
        },
        {
          id: 8,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/二级学院.svg",
          text: "机械工程学院",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/二级学院公众号/机械工程学院.jpg"
        },
        {
          id: 9,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/二级学院.svg",
          text: "计算机科学与技术学院",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/二级学院公众号/计算机科学与技术学院.jpg"
        },
        {
          id: 10,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/二级学院.svg",
          text: "继续教育学院",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/二级学院公众号/继续教育学院.jpg"
        },
        {
          id: 11,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/二级学院.svg",
          text: "教育学院",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/二级学院公众号/教育学院.jpg"
        },
        {
          id: 12,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/二级学院.svg",
          text: "经济与管理学院",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/二级学院公众号/经济与管理学院.jpg"
        },
        {
          id: 13,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/二级学院.svg",
          text: "马克思主义学院",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/二级学院公众号/马克思主义学院.jpg"
        },
        {
          id: 14,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/二级学院.svg",
          text: "生命健康技术学院",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/二级学院公众号/生命健康技术学院.jpg"
        },
        {
          id: 15,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/二级学院.svg",
          text: "生态环境与建筑工程学院",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/二级学院公众号/生态环境与建筑工程学院.jpg"
        },
        {
          id: 16,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/二级学院.svg",
          text: "文学与传媒学院",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/二级学院公众号/文学与传媒学院.jpg"
        },
        {
          id: 17,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/二级学院.svg",
          text: "学生社区知行学院",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/二级学院公众号/学生社区知行学院.jpg"
        },
        {
          id: 18,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/二级学院.svg",
          text: "研究生学院",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/二级学院公众号/研究生学院.jpg"
        },
        {
          id: 19,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/二级学院.svg",
          text: "粤台产业科技学院",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/二级学院公众号/粤台产业科技学院.jpg"
        }
      ],
      //校级组织
      [
        {
          id: 1,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/校级组织.svg",
          text: "《莞工青年论坛》办公室",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/校级学生组织/《莞工青年论坛》办公室.jpg"
        },
        {
          id: 2,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/校级组织.svg",
          text: "学生会",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/校级学生组织/学生会.jpg"
        },
        {
          id: 3,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/校级组织.svg",
          text: "学生媒体中心",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/校级学生组织/学生媒体中心.jpg"
        },
        {
          id: 4,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/校级组织.svg",
          text: "学生社团发展中心",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/校级学生组织/学生社团发展中心.jpg"
        },
        {
          id: 5,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/校级组织.svg",
          text: "学生自律会",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/校级学生组织/学生自律会.jpg"
        },
        {
          id: 6,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/校级组织.svg",
          text: "学生艺术团",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/校级学生组织/学生艺术团.jpg"
        },
        {
          id: 7,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/校级组织.svg",
          text: "志愿服务中心",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/校级学生组织/志愿服务中心.jpg"
        },
        {
          id: 8,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/校级组织.svg",
          text: "校团委学生办公室",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/校级学生组织/校团委学生办公室.jpg"
        },
        {
          id: 9,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/校级组织.svg",
          text: "研究生会",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/校级学生组织/研究生会.jpg"
        },
        {
          id: 10,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/校级组织.svg",
          text: "青年创新创业服务中心",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/校级学生组织/青年创新创业服务中心.jpg"
        }
      ],
      //学生社区
      [
        {
          id: 1,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/学生社区.svg",
          text: "莞华社区",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/学生社区/莞华社区.jpg"
        },
        {
          id: 2,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/学生社区.svg",
          text: "莞博社区",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/学生社区/莞博社区.jpg"
        },
        {
          id: 3,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/学生社区.svg",
          text: "莞雅社区",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/学生社区/莞雅社区.jpg"
        },
        {
          id: 4,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/学生社区.svg",
          text: "莞逸社区",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/学生社区/莞逸社区.jpg"
        },
        {
          id: 5,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/学生社区.svg",
          text: "莞馨社区",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/学生社区/莞馨社区.jpg"
        },
        {
          id: 6,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/学生社区.svg",
          text: "莞和社区",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/学生社区/莞和社区.jpg"
        },
        {
          id: 7,
          icon: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/pictures/学生社区.svg",
          text: "莞思社区",
          qrCodeUrl: "cloud://zouyanqing-8gcva3coe0f95523.7a6f-zouyanqing-8gcva3coe0f95523-1350716191/二维码/学生社区/莞思社区.jpg"
        }
      ]
    ],
  currentTab: 0,
  tabs: ["平台账号", "职能部门", "二级学院", "校级组织", "学生社区"],
  currentList: [],
  items: [], // 动态加载的数据
  showModal: false,
  qrCodeUrl: "",
  currentItems: []
  },
  // 点击显示链接跳转
  handleClick(e) {
    const url = e.currentTarget.dataset.url;
    wx.showModal({
      title: '复制链接',
      content: `点击确认复制链接：\n${url}`,
      success: (res) => {
        if (res.confirm) {
          // 复制链接
          wx.setClipboardData({
            data: url,
            success: () => {
              wx.showToast({
                title: '复制成功',
                icon: 'none',
                duration: 1500
              });
            },
            fail: (err) => {
              console.error('复制失败的原因:', err);
              wx.showToast({
                  title: '复制失败：' + (err.errMsg || '未知错误'),
                  icon: 'none'
              });
          }
          });
        }
      }
    });
  },

    // 复制联系信息
    copyContactInfo(e) {
      const info = e.currentTarget.dataset.info;
      if (!info) {
          return wx.showToast({ title: '无内容可复制', icon: 'none' });
      }

      wx.setClipboardData({
          data: info,
          success: () => {
              wx.showToast({
                  title: '复制成功',
                  icon: 'none',
                  duration: 1500
              });
          },
          fail: (err) => {
              console.error('复制失败:', err);
              wx.showToast({
                  title: '复制失败，请重试',
                  icon: 'none',
                  duration: 1500
              });
          }
      });
  },

  // 跳转到更多页面
  navigateToNewPage() {
      wx.navigateTo({
          url: '/packagesA/campus-circle/pages/more/more'
      });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 初始化加载第一个标签数据
  this.loadTabData(0);
  this.calculateContentHeight();
  },
    // 修改数据加载方法
    loadTabData(tabIndex) {
      this.setData({
        items: this.data.allItems[tabIndex] || [],  // 同步到items
        currentItems: this.data.allItems[tabIndex] || []
      });
    },
  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    if (this.data.currentTab === index) return;
    this.setData({ currentTab: index });
    this.loadTabData(index);
  },
  onSwiperChange(e) {
    const index = e.detail.current;
    this.setData({ currentTab: index });
    this.loadTabData(index);
  },
  showModal(e) {
      const qrcode = e.currentTarget.dataset.qrcode;
    this.setData({
      showModal: true,
      qrCodeUrl: qrcode
    });
  },
  hideModal() {
    this.setData({ showModal: false });
  },
  loadData() {
    // 模拟异步加载数据
    setTimeout(() => {
      this.setData({
        items: Array.from({length: 10}, (_, i) => ({
          id: i,
          icon: `../../images/icon${i}.png`,
          text: `条目内容 ${i+1}`
        }))
      });
    }, 500);
  },
  calculateContentHeight() {
    const query = wx.createSelectorQuery().in(this);
    query.select('.box3').boundingClientRect(rect => {
      const systemInfo = wx.getSystemInfoSync();
        // 新计算方式：可用高度 = 窗口高度 - 容器顶部位置 - 底部安全距离
        const height = systemInfo.windowHeight - rect.top - systemInfo.screenHeight * 0.1;
      this.setData({
        contentHeight: Math.max(height, 600) // 设置最小高度保证显示
      });
    }).exec();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.calculateContentHeight();
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