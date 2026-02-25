// components/boss-page/boss-page.ts
Component({
  properties: {
    userInfo: {
      type: Object,
      value: null
    }
  },
  data: {},
  methods: {
    viewAllStores() {
      wx.showToast({
        title: '查看所有门店',
        icon: 'none'
      });
    },
    financialReport() {
      wx.showToast({
        title: '财务报表',
        icon: 'none'
      });
    },
    businessAnalysis() {
      wx.showToast({
        title: '经营分析',
        icon: 'none'
      });
    }
  }
});
