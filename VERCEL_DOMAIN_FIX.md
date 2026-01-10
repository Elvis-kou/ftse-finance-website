# Vercel 域名配置修复指南

## 问题分析

从 Vercel 域名配置页面的截图可以看到：
- `ftsefinance.com` 和 `www.ftsefinance.com` 显示 "Invalid Configuration"
- 而 `ftse-finance-website.vercel.app` 显示 "Valid Configuration"

这表明部署本身是成功的，但自定义域名的 DNS 记录配置不正确。

## 解决方案

### 1. 检查 DNS 记录配置

登录您的域名注册商（如阿里云、腾讯云、GoDaddy 等），确保为 `ftsefinance.com` 和 `www.ftsefinance.com` 配置了正确的 DNS 记录。

#### 对于 `ftsefinance.com`（主域名）：

添加以下 A 记录：
- **类型**：A
- **名称**：@（或留空）
- **值**：76.76.21.21

或者添加以下 AAAA 记录（IPv6）：
- **类型**：AAAA
- **名称**：@（或留空）
- **值**：2606:4700:3031::6815:175c
- **类型**：AAAA
- **名称**：@（或留空）
- **值**：2606:4700:3032::6815:185c

#### 对于 `www.ftsefinance.com`（www 子域名）：

添加以下 CNAME 记录：
- **类型**：CNAME
- **名称**：www
- **值**：cname.vercel-dns.com

### 2. 验证 DNS 记录

在配置 DNS 记录后，使用 `nslookup` 或 `dig` 命令验证记录是否生效：

```bash
# 验证主域名 A 记录
nslookup ftsefinance.com

# 验证 www 子域名 CNAME 记录
nslookup www.ftsefinance.com
```

### 3. 刷新 Vercel 域名配置

1. 登录 Vercel 控制台
2. 进入您的项目页面
3. 点击左侧菜单的 `Settings` > `Domains`
4. 对每个显示 "Invalid Configuration" 的域名点击 `Refresh` 按钮
5. 等待几分钟，Vercel 将重新验证 DNS 记录

### 4. 启用 HTTPS

一旦域名配置显示为 "Valid Configuration"，请确保启用 HTTPS：

1. 在 Vercel 域名配置页面，点击域名旁边的 `Edit` 按钮
2. 确保 `HTTPS/SSL` 选项已启用
3. Vercel 将自动为您的域名配置 SSL 证书

## 注意事项

- DNS 记录可能需要 5-30 分钟（甚至更长时间）才能全局生效
- 如果使用 CDN（如 Cloudflare），请确保 CDN 配置与 Vercel 兼容
- 如果问题仍然存在，请检查域名是否已解锁并正确指向 Vercel 的服务器

## 项目配置检查

### 路由配置

项目当前使用 `HashRouter`，这可能会导致 URL 中包含 `#` 符号。如果您希望使用更干净的 URL（没有 `#`），可以考虑切换到 `BrowserRouter`：

在 `src/App.tsx` 中：

```tsx
// 将
import { HashRouter, Routes, Route } from "react-router-dom";

// 替换为
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 然后将
<HashRouter>
  {/* ... */}
</HashRouter>

// 替换为
<BrowserRouter>
  {/* ... */}
</BrowserRouter>
```

切换到 `BrowserRouter` 后，您需要确保 Vercel 正确配置了回退路由。Vercel 会自动为 React 应用配置正确的回退路由，所以通常不需要额外配置。

## 联系支持

如果您在配置过程中遇到任何问题，可以：

1. 查看 Vercel 官方文档：https://vercel.com/docs/custom-domains
2. 联系 Vercel 支持：https://vercel.com/support
3. 联系您的域名注册商获取 DNS 配置帮助