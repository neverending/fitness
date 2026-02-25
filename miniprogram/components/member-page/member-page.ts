// components/member-page/member-page.ts
Component({
  properties: {
    userInfo: {
      type: Object,
      value: null
    }
  },
  data: {},
  methods: {
    checkIn() {
      wx.showToast({
        title: '签到成功！',
        icon: 'success'
      });
    },
    bookClass() {
      wx.showToast({
        title: '预约课程功能开发中',
        icon: 'none'
      });
    },
    viewSchedule() {
      wx.showToast({
        title: '查看排课',
        icon: 'none'
      });
    }
  }
});
