// pages/test/test.ts
import { ROLE_CONFIG, UserRole, UserRoleInfo } from '../../utils/types';

Page({
  data: {
    userInfo: {
      id: '1',
      name: '测试用户',
      avatar: '',
      roles: ['member', 'trainer', 'manager', 'boss', 'cleaner'] as UserRole[]
    },
    userRoles: [] as UserRoleInfo[],
    debugInfo: ''
  },

  onLoad() {
    this.initTest();
  },

  initTest() {
    const userInfo = this.data.userInfo;
    const userRoles: UserRoleInfo[] = [];
    
    userInfo.roles.forEach((role: UserRole) => {
      userRoles.push(ROLE_CONFIG[role]);
    });

    const debugInfo = `
      用户角色: ${JSON.stringify(userInfo.roles)}
      生成的角色列表: ${JSON.stringify(userRoles.map(r => r.type))}
      角色数量: ${userRoles.length}
      保洁角色索引: ${userRoles.findIndex(r => r.type === 'cleaner')}
      所有角色类型: ${userRoles.map(r => r.type).join(', ')}
    `;

    console.log('调试信息:', debugInfo);

    this.setData({
      userRoles,
      debugInfo
    });
  },

  goBack() {
    wx.navigateBack();
  }
});