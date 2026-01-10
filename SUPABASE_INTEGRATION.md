# Supabase 集成方案

## 概述

本方案实现了前端网站与您已经部署的 Supabase 后台管理系统的实时数据同步。通过这个集成，当您在后台管理系统中修改网站内容时，前端网站将自动实时更新，无需手动刷新页面。

## 实现功能

- ✅ Supabase 客户端配置
- ✅ 实时数据同步（基于 Postgres Change Data Capture）
- ✅ 多语言支持（英文、简体中文、繁体中文）
- ✅ 自动错误处理和回退机制
- ✅ 加载状态管理

## 技术实现

### 1. Supabase 客户端配置

创建了 `src/lib/supabaseClient.ts` 文件，实现了：
- Supabase 客户端初始化
- 网站内容获取函数
- 内容变更订阅机制

### 2. 数据同步逻辑

修改了 `src/contexts/LanguageContext.tsx`，实现了：
- 从 Supabase 加载网站内容
- 订阅内容变更事件
- 实时更新前端显示

### 3. 环境变量

创建了 `.env.example` 文件，定义了需要的环境变量：
- `VITE_SUPABASE_URL`: Supabase 项目 URL
- `VITE_SUPABASE_ANON_KEY`: Supabase 匿名访问密钥

## 配置步骤

### 1. 设置环境变量

在项目根目录创建 `.env` 文件，并添加以下内容：

```env
# 替换为您的 Supabase 项目信息
VITE_SUPABASE_URL=https://khsacwexxzyhefwrpgnz.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_MR9Kayww1inXFAICuzdbwg_d_CxDeVN
```

### 2. 创建 Supabase 数据库表

在您的 Supabase 项目中创建 `website_content` 表，包含以下字段：

| 字段名 | 数据类型 | 约束 | 描述 |
|--------|----------|------|------|
| id | uuid | primary key default uuid_generate_v4() | 记录 ID |
| language | text | not null | 语言代码（en/zh-CN/zh-TW） |
| navHome | text | optional | 导航栏首页文本 |
| navAbout | text | optional | 导航栏关于我们文本 |
| navServices | text | optional | 导航栏服务文本 |
| navContact | text | optional | 导航栏联系我们文本 |
| navEnterpriseForm | text | optional | 导航栏企业表单文本 |
| heroTitle | text | optional | Hero 区域标题 |
| heroSubtitle | text | optional | Hero 区域副标题 |
| heroDescription | text | optional | Hero 区域描述 |
| heroCTAPrimary | text | optional | Hero 区域主要按钮文本 |
| heroCTASecondary | text | optional | Hero 区域次要按钮文本 |
| aboutTitle | text | optional | 关于我们标题 |
| aboutDescription | text | optional | 关于我们描述 |
| aboutMissionTitle | text | optional | 使命标题 |
| aboutMissionDescription | text | optional | 使命描述 |
| aboutVisionTitle | text | optional | 愿景标题 |
| aboutVisionDescription | text | optional | 愿景描述 |
| servicesTitle | text | optional | 服务标题 |
| servicesIPOTitle | text | optional | IPO 服务标题 |
| servicesIPODescription | text | optional | IPO 服务描述 |
| servicesMarketTitle | text | optional | 市值管理标题 |
| servicesMarketDescription | text | optional | 市值管理描述 |
| servicesInvestmentTitle | text | optional | 投资银行服务标题 |
| servicesInvestmentDescription | text | optional | 投资银行服务描述 |
| servicesSupportTitle | text | optional | 上市后支持标题 |
| servicesSupportDescription | text | optional | 上市后支持描述 |
| contactTitle | text | optional | 联系我们标题 |
| contactDescription | text | optional | 联系我们描述 |
| contactAddress | text | optional | 联系地址 |
| contactPhone | text | optional | 联系电话 |
| contactEmail | text | optional | 联系邮箱 |
| contactFormName | text | optional | 表单姓名字段文本 |
| contactFormEmail | text | optional | 表单邮箱字段文本 |
| contactFormMessage | text | optional | 表单留言字段文本 |
| contactFormSubmit | text | optional | 表单提交按钮文本 |
| enterpriseTitle | text | optional | 企业表单标题 |
| enterpriseDescription | text | optional | 企业表单描述 |
| aboutCompanyOverview | text | optional | 公司概述 |
| aboutGlobalPresence | text | optional | 全球布局 |
| aboutExpertise | text | optional | 专业能力 |
| statsTransactionsNumber | text | optional | 交易金额统计 |
| statsTransactionsLabel | text | optional | 交易金额标签 |
| statsTimelineNumber | text | optional | IPO 时间线统计 |
| statsTimelineLabel | text | optional | IPO 时间线标签 |
| statsFoundedNumber | text | optional | 成立年份统计 |
| statsFoundedLabel | text | optional | 成立年份标签 |
| statsOfficesNumber | text | optional | 办事处数量统计 |
| statsOfficesLabel | text | optional | 办事处数量标签 |
| created_at | timestamp | default now() | 创建时间 |
| updated_at | timestamp | default now() | 更新时间 |

### 3. 设置 Row Level Security (RLS)

为 `website_content` 表启用 RLS，并添加以下策略：

```sql
-- 允许匿名用户读取网站内容
CREATE POLICY "Allow public read access" ON "public"."website_content"
FOR SELECT
USING (true);

-- 只允许管理员修改内容（根据您的认证系统调整）
CREATE POLICY "Allow admin update" ON "public"."website_content"
FOR UPDATE
USING (auth.role() = 'authenticated' AND auth.email() = 'admin@example.com');
```

## 测试步骤

### 1. 安装依赖

```bash
npm install
```

### 2. 运行开发服务器

```bash
npm run dev
```

### 3. 测试实时同步

1. 打开网站（默认地址：http://localhost:8080）
2. 登录您的 Supabase 后台管理系统
3. 修改 `website_content` 表中的某个字段（例如 `heroTitle`）
4. 观察前端网站是否自动更新，无需手动刷新页面

## 故障排除

### 1. 环境变量配置错误

**症状**：前端显示默认内容，控制台显示 "Supabase URL and Anon Key are required" 错误。

**解决方案**：
- 检查 `.env` 文件是否正确配置
- 确保环境变量名称与 `src/lib/supabaseClient.ts` 中的名称一致

### 2. 数据库表配置错误

**症状**：前端显示默认内容，控制台显示 "Error fetching website content" 错误。

**解决方案**：
- 检查 `website_content` 表是否正确创建
- 确保表字段名称与 `src/contexts/LanguageContext.tsx` 中的映射一致

### 3. RLS 配置错误

**症状**：前端显示默认内容，控制台显示权限错误。

**解决方案**：
- 检查 RLS 策略是否正确配置
- 确保匿名用户有读取权限

## 扩展功能

### 1. 添加更多内容类型

如果需要添加更多内容类型，只需要：
1. 在 `website_content` 表中添加相应字段
2. 在 `src/contexts/LanguageContext.tsx` 中的 `loadCMSContent` 函数中添加字段映射

### 2. 实现内容版本控制

可以通过添加 `version` 字段和 `history` 表来实现内容版本控制，允许回滚到之前的版本。

### 3. 添加缓存机制

可以添加本地缓存机制，减少对 Supabase 的请求次数，提高性能。

## 总结

本方案实现了前端网站与 Supabase 后台管理系统的实时数据同步，当您在后台修改内容时，前端将自动更新。配置简单，功能完善，支持多语言，具有良好的错误处理和回退机制。