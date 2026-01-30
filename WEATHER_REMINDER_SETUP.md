# 每小時上海天氣提醒設置指南

## 腳本說明

`scripts/getShanghaiWeather.js` 是一個用於獲取上海實時天氣信息的腳本。

## 如何設置每小時天氣提醒

### 方法 1: 使用系統 crontab (推薦)

1. **打開終端並編輯 crontab**：
   ```bash
   crontab -e
   ```

2. **添加以下行以每小時執行腳本**：
   ```
   0 * * * * cd /workspaces/MyMoltBox && node scripts/getShanghaiWeather.js
   ```

3. **保存並退出**，crontab 會自動生效。

### 方法 2: 使用完整路徑設置

如果上述方法不起作用，請使用完整路徑：

1. **找到 Node.js 路徑**：
   ```bash
   which node
   ```

2. **編輯 crontab**：
   ```bash
   crontab -e
   ```

3. **添加以下行**（替換路徑為您的實際路徑）：
   ```
   0 * * * * /usr/bin/node /workspaces/MyMoltBox/scripts/getShanghaiWeather.js
   ```

### 方法 3: 使用通知系統

如果您希望收到桌面或系統通知，可以修改腳本或使用通知工具：

```bash
0 * * * * /usr/bin/node /workspaces/MyMoltBox/scripts/getShanghaiWeather.js | mail -s "上海天氣預報" your-email@example.com
```

或者使用系統通知工具（如 notify-send）：

```bash
0 * * * * /bin/bash -c 'DISPLAY=:0 /usr/bin/notify-send "上海天氣" "$(cd /workspaces/MyMoltBox && node scripts/getShanghaiWeather.js)"'
```

## 驗證設置

1. **檢查 crontab 列表**：
   ```bash
   crontab -l
   ```

2. **測試腳本**：
   ```bash
   node scripts/getShanghaiWeather.js
   ```

## 注意事項

- 確保腳本路徑正確
- 確保 Node.js 已安裝且可在 PATH 中訪問
- 腳本依賴於免費的 Open-Meteo API，無需 API 密鑰
- 如果需要發送通知到特定應用程序，可能需要額外配置

## 停用提醒

要停止每小時提醒，可以使用以下命令移除所有 cron 任務：

```bash
crontab -r
```

或只編輯並刪除特定的行：

```bash
crontab -e
```