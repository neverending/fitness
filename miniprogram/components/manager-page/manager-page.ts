// components/manager-page/manager-page.ts
Component({
  properties: {
    userInfo: {
      type: Object,
      value: null
    }
  },
  data: {},
  methods: {
    manageStaff() {
      wx.showToast({
        title: '员工管理',
        icon: 'none'
      });
    },
    viewReports() {
      wx.showToast({
        title: '查看报表',
        icon: 'none'
      });
    },
    manageEquipment() {
      wx.showToast({
        title: '设备管理',
        icon: 'none'
      });
    }
  }
});
