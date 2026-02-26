// components/cleaner-page/cleaner-page.ts
Component({
  properties: {
    userInfo: {
      type: Object,
      value: {}
    }
  },

  data: {
    // 保洁任务列表
    tasks: [
      { id: 1, name: '器械区清洁', time: '08:00-10:00', status: '待完成', area: '器械区' },
      { id: 2, name: '更衣室消毒', time: '10:00-11:00', status: '进行中', area: '更衣室' },
      { id: 3, name: '瑜伽垫清洁', time: '11:00-12:00', status: '未开始', area: '瑜伽区' },
      { id: 4, name: '卫生间清洁', time: '14:00-15:00', status: '未开始', area: '卫生间' },
      { id: 5, name: '地面拖洗', time: '15:00-16:00', status: '未开始', area: '全场' }
    ],
    
    // 清洁用品库存
    supplies: [
      { name: '消毒液', quantity: 5, unit: '瓶' },
      { name: '抹布', quantity: 20, unit: '条' },
      { name: '垃圾袋', quantity: 100, unit: '个' },
      { name: '清洁剂', quantity: 3, unit: '桶' }
    ],
    
    // 今日完成情况
    todayStats: {
      completed: 2,
      total: 5,
      areas: ['器械区', '更衣室']
    }
  },

  methods: {
    // 标记任务完成
    markTaskComplete(e: WechatMiniprogram.TouchEvent) {
      const taskId = e.currentTarget.dataset.id;
      const tasks = this.data.tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, status: '已完成' };
        }
        return task;
      });
      
      const completedTasks = tasks.filter(task => task.status === '已完成').length;
      
      this.setData({
        tasks,
        'todayStats.completed': completedTasks
      });
      
      wx.showToast({
        title: '任务已完成',
        icon: 'success'
      });
    },
    
    // 查看任务详情
    viewTaskDetail(e: WechatMiniprogram.TouchEvent) {
      const task = e.currentTarget.dataset.task;
      wx.showModal({
        title: task.name,
        content: `区域：${task.area}\n时间：${task.time}\n状态：${task.status}`,
        showCancel: false
      });
    },
    
    // 申请补给
    applySupply() {
      wx.showModal({
        title: '申请清洁用品',
        content: '确定要申请补充清洁用品吗？',
        success: (res) => {
          if (res.confirm) {
            wx.showToast({
              title: '申请已提交',
              icon: 'success'
            });
          }
        }
      });
    },
    
    // 查看工作记录
    viewWorkRecords() {
      wx.navigateTo({
        url: '/pages/logs/logs'
      });
    }
  }
});