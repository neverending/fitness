// 角色类型定义
export type UserRole = 'member' | 'trainer' | 'manager' | 'boss';

// 用户角色信息
export interface UserRoleInfo {
  type: UserRole;
  name: string;
  icon: string;
}

// 用户信息
export interface UserInfo {
  id: string;
  name: string;
  avatar: string;
  roles: UserRole[];
}

// 角色配置
export const ROLE_CONFIG: Record<UserRole, UserRoleInfo> = {
  member: { type: 'member', name: '会员', icon: '👤' },
  trainer: { type: 'trainer', name: '私教', icon: '🏋️' },
  manager: { type: 'manager', name: '店长', icon: '👔' },
  boss: { type: 'boss', name: '老板', icon: '👑' }
};
