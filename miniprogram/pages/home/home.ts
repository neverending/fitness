// pages/home/home.ts
import { ROLE_CONFIG, UserRole, UserRoleInfo } from '../../utils/types';

Page({
  data: {
    userInfo: {
      id: '1',
      name: '王五',
      avatar: '',
      roles: ['member', 'trainer', 'manager', 'boss', 'cleaner'] // 测试数据：同时拥有所有角色
    },
    userRoles: [] as UserRoleInfo[],
    currentIndex: 0,
    indicatorDots: [] as boolean[]
  },

  onLoad() {
    this.initRoles();
  },

  initRoles() {
    const userInfo = this.data.userInfo;
    const userRoles: UserRoleInfo[] = [];
    
    userInfo.roles.forEach((role: UserRole) => {
      userRoles.push(ROLE_CONFIG[role]);
    });

    const indicatorDots = userRoles.map((_, index) => index === 0);

    // 调试信息
    console.log('用户角色数据:', userInfo.roles);
    console.log('生成的userRoles:', userRoles);
    console.log('角色数量:', userRoles.length);
    console.log('保洁角色存在:', userRoles.some(role => role.type === 'cleaner'));

    this.setData({
      userRoles,
      indicatorDots
    });
  },

  onSwiperChange(e: WechatMiniprogram.SwiperChange) {
    const currentIndex = e.detail.current;
    const indicatorDots = this.data.indicatorDots.map((_, index) => index === currentIndex);
    
    this.setData({
      currentIndex,
      indicatorDots
    });
  },

  onDotTap(e: WechatMiniprogram.TouchEvent) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      currentIndex: index
    });
  },

  goToTest() {
    wx.navigateTo({
      url: '/pages/test/test'
    });
  }
});
