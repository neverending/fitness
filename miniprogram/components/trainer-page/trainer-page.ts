// components/trainer-page/trainer-page.ts
Component({
  properties: {
    userInfo: {
      type: Object,
      value: null
    }
  },
  data: {},
  methods: {
    viewSchedule() {
      wx.showToast({
        title: '查看排课表',
        icon: 'none'
      });
    },
    manageMembers() {
      wx.showToast({
        title: '会员管理',
        icon: 'none'
      });
    },
    addClass() {
      wx.showToast({
        title: '添加课程',
        icon: 'none'
      });
    }
  }
});
