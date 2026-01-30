#!/usr/bin/env node

/**
 * Get Shanghai weather information
 * This script can be used with system cron to send hourly weather updates
 */

import axios from 'axios';

interface WeatherResponse {
  latitude: number;
  longitude: number;
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: string;
  };
}

// Shanghai coordinates
const SHANGHAI_LAT = 31.2304;
const SHANGHAI_LON = 121.4737;

// Weather code descriptions
const WEATHER_CODES: { [key: number]: string } = {
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

async function getShanghaiWeather(): Promise<string> {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${SHANGHAI_LAT}&longitude=${SHANGHAI_LON}&current_weather=true`;
    
    const response: { data: WeatherResponse } = await axios.get(url);
    const weather = response.data.current_weather;
    
    const weatherCondition = WEATHER_CODES[weather.weathercode] || '未知';
    
    const weatherInfo = `🌤️ 上海天氣 (${new Date().toLocaleString('zh-CN')})\n` +
                       `溫度: ${weather.temperature.toFixed(1)}°C\n` +
                       `天氣: ${weatherCondition}\n` +
                       `風速: ${weather.windspeed.toFixed(1)} km/h\n` +
                       `風向: ${weather.winddirection}°`;
    
    console.log(weatherInfo);
    return weatherInfo;
  } catch (error) {
    console.error('獲取天氣數據時出錯:', error);
    return `⛈️ 無法獲取上海天氣信息 (${new Date().toLocaleString('zh-CN')})`;
  }
}

// Run if called directly
if (typeof require !== 'undefined' && require.main === module) {
  getShanghaiWeather();
}

export { getShanghaiWeather, WEATHER_CODES };