# 住宿預訂應用程式

一個使用 Next.js、TypeScript 和 Tailwind CSS 構建的現代化住宿預訂應用程式。

## 功能特色

- 🔍 搜索功能：按城市、國家或住宿類型搜索
- 🎚️ 價格篩選：使用滑桿篩選價格範圍
- 📱 響應式設計：適應各種設備尺寸
- 📝 詳細頁面：每個住宿都有專屬的詳細頁面
- ⭐ 評價系統：顯示住宿評價和評分

## 技術棧

- **框架**: Next.js
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **API**: Next.js API Routes

## 演示

### 在線演示
- GitHub 倉庫: https://github.com/morrispan/MyMoltBox

### 本地運行

1. **克隆代碼**：
   ```bash
   git clone https://github.com/morrispan/MyMoltBox.git
   cd MyMoltBox
   ```

2. **安裝依賴**：
   ```bash
   npm install
   ```

3. **運行應用程式**：
   ```bash
   npm run dev
   ```

4. **打開瀏覽器**：
   訪問 http://localhost:3000 查看應用程式

## 項目結構

```
MyMoltBox/
├── components/              # 可重複使用的組件
│   ├── AccommodationCard.tsx # 住宿卡片組件
│   └── Layout.tsx           # 頁面布局組件
├── data/                    # 應用程式數據
│   └── accommodations.ts    # 住宿數據文件
├── pages/                   # 頁面路由
│   ├── _app.tsx             # Next.js 全局配置
│   ├── accommodation/       # 單一住宿詳細頁面
│   │   └── [id].tsx
│   ├── api/                 # API 端點
│   │   └── accommodations.ts
│   └── index.tsx            # 主頁面
├── styles/                  # 樣式文件
│   └── globals.css          # 全局樣式
```

## 功能詳情

### 搜索功能
- 按城市、國家或住宿類型搜索
- 即時過濾結果

### 篩選功能
- 價格範圍篩選
- 日期選擇器

### 數據模型
- 包含 20 個模擬住宿數據
- 每個住宿都有詳細信息（價格、評價、設施等）

## 部署

此應用程式可以輕鬆部署到 Vercel、Netlify 或其他支持 Next.js 的平台。

要部署到 Vercel：
1. 登錄 https://vercel.com
2. 點擊 "New Project"
3. 導入您的 GitHub 倉庫
4. 點擊 "Deploy"

應用程式將自動構建並部署。