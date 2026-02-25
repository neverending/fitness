# 24小时健身微信小程序 - 项目交互记录

## 项目概述
这是一个24小时健身的微信小程序端，支持多角色系统。

## 需求描述
- 用户角色：会员、私教、店长、老板（四种）
- 每个角色有独立功能页面
- 页面通过左右滑动切换
- 用户可兼任多个角色（如既是店长又是老板）
- 页面根据用户拥有的角色数动态显示
- 底部有光点指示器，随页面滑动切换

## 实现方案

### 1. 角色类型定义 (`miniprogram/utils/types.ts`)
```typescript
// 角色类型
type UserRole = 'member' | 'trainer' | 'manager' | 'boss';

// 角色配置
ROLE_CONFIG: Record<UserRole, UserRoleInfo>
- member: 会员 👤
- trainer: 私教 🏋️
- manager: 店长 👔
- boss: 老板 👑
```

### 2. 四个角色页面组件

#### 会员页面 (`components/member-page/`)
- 功能：签到打卡、预约课程、课程表、训练记录
- 背景：紫色渐变 (#667eea → #764ba2)

#### 私教页面 (`components/trainer-page/`)
- 功能：我的排课、会员管理、添加课程、教学统计
- 背景：粉色渐变 (#f093fb → #f5576c)

#### 店长页面 (`components/manager-page/`)
- 功能：员工管理、经营报表、设备管理、收支管理
- 背景：蓝色渐变 (#4facfe → #00f2fe)

#### 老板页面 (`components/boss-page/`)
- 功能：门店管理、财务报表、经营分析、系统设置
- 背景：橙黄渐变 (#fa709a → #fee140)

### 3. 主页面 (`pages/home/`)

#### 核心功能
- 使用 `swiper` 组件实现左右滑动切换
- 动态渲染用户拥有的角色页面
- 底部光点指示器实时响应页面切换

#### 数据结构
```typescript
data: {
  userInfo: {
    id: string;
    name: string;
    avatar: string;
    roles: UserRole[];  // 用户拥有的角色列表
  };
  userRoles: UserRoleInfo[];  // 角色配置信息
  currentIndex: number;       // 当前页面索引
  indicatorDots: boolean[];   // 光点状态数组
}
```

#### 关键方法
- `initRoles()`: 初始化用户角色和光点状态
- `onSwiperChange()`: swiper 切换时更新 currentIndex 和指示器
- `onDotTap()`: 点击光点切换到对应页面

### 4. 底部光点指示器
- 固定位置：底部 80rpx 处
- 样式：
  - 普通：16rpx 圆形，半透明白色
  - 激活：40rpx 圆角矩形，高亮并发光
- 支持点击跳转

### 5. 全局配置
- 页面路由：`pages/home/home`
- 导航栏：黑色背景 + 白色文字
- 背景：全黑色主题
- 导航样式：自定义

## 测试数据说明

当前测试位置：`miniprogram/pages/home/home.ts` 第 10 行

```typescript
roles: ['member', 'trainer', 'manager', 'boss']  // 同时拥有所有角色
```

### 其他测试场景示例
```typescript
// 纯会员
roles: ['member']

// 既是店长又是老板
roles: ['manager', 'boss']

// 既是会员又是私教
roles: ['member', 'trainer']
```

## 技术栈
- 框架：微信小程序原生开发
- 语言：TypeScript
- UI：原生 WXML + WXSS
- 组件：swiper

## 项目文件结构
```
fitness/
├── miniprogram/
│   ├── app.ts/json/wxss          # 应用入口
│   ├── pages/
│   │   └── home/                 # 主页面（多角色切换）
│   │       ├── home.ts
│   │       ├── home.wxml
│   │       ├── home.wxss
│   │       └── home.json
│   ├── components/
│   │   ├── member-page/          # 会员页面
│   │   ├── trainer-page/         # 私教页面
│   │   ├── manager-page/         # 店长页面
│   │   └── boss-page/            # 老板页面
│   └── utils/
│       └── types.ts              # 类型定义
├── .codebuddy/
│   └── project-history.md        # 本文件
├── package.json
├── project.config.json
└── tsconfig.json
```

## 完成状态
✅ 角色类型定义
✅ 四个角色页面组件
✅ 左右滑动切换功能
✅ 底部光点指示器
✅ 全局配置和样式

## 待续...
（后续交互和需求变更将记录在此）
