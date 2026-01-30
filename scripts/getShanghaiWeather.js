#!/usr/bin/env node

/**
 * Get Shanghai weather information
 * This script can be used with system cron to send hourly weather updates
 */

const https = require('https');

// Shanghai coordinates
const SHANGHAI_LAT = 31.2304;
const SHANGHAI_LON = 121.4737;

// Weather code descriptions
const WEATHER_CODES = {
  0: '晴',
  1: '晴間多雲',
  2: '多雲',
  3: '陰',
  45: '霧',
  48: '霜霧',
  51: '小毛毛雨',
  53: '毛毛雨',
  55: '大毛毛雨',
  56: '小凍毛毛雨',
  57: '凍毛毛雨',
  61: '小雨',
  63: '雨',
  65: '大雨',
  66: '小凍雨',
  67: '凍雨',
  71: '小雪',
  73: '雪',
  75: '大雪',
  77: '霰',
  80: '小陣雨',
  81: '陣雨',
  82: '大陣雨',
  85: '小陣雪',
  86: '陣雪',
  95: '小雷雨',
  96: '雷雨',
  99: '大雷雨'
};

function getShanghaiWeather() {
  return new Promise((resolve, reject) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${SHANGHAI_LAT}&longitude=${SHANGHAI_LON}&current_weather=true`;
    
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const weatherData = JSON.parse(data);
          const weather = weatherData.current_weather;
          
          if (!weather) {
            throw new Error('Invalid weather data received');
          }
          
          const weatherCondition = WEATHER_CODES[weather.weathercode] || '未知';
          
          const weatherInfo = `🌤️ 上海天氣 (${new Date().toLocaleString('zh-CN')})\n` +
                             `溫度: ${weather.temperature.toFixed(1)}°C\n` +
                             `天氣: ${weatherCondition}\n` +
                             `風速: ${weather.windspeed.toFixed(1)} km/h\n` +
                             `風向: ${weather.winddirection}°`;
          
          console.log(weatherInfo);
          resolve(weatherInfo);
        } catch (error) {
          console.error('解析天氣數據時出錯:', error);
          reject(error);
        }
      });
    }).on('error', (error) => {
      console.error('獲取天氣數據時出錯:', error);
      reject(error);
    });
  });
}

// Run if called directly
if (require.main === module) {
  getShanghaiWeather()
    .catch(error => {
      console.error('Failed to get weather:', error);
      process.exit(1);
    });
}

module.exports = { getShanghaiWeather };