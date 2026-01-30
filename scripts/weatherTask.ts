/**
 * Hourly Weather Notification Task
 * This script can be scheduled to run every hour to get Shanghai weather
 */

import axios from 'axios';

interface WeatherData {
  location: string;
  temperature: string;
  condition: string;
  humidity: string;
  windSpeed: string;
}

async function getShanghaiWeather(): Promise<WeatherData> {
  try {
    // Using OpenWeatherMap API to get current weather for Shanghai
    // Note: This requires an API key in a production environment
    console.log(`[${new Date().toISOString()}] Getting Shanghai weather...`);
    
    // In a real implementation, we would call the API
    // For demonstration, we'll return mock data
    return {
      location: "上海",
      temperature: `${Math.floor(Math.random() * 15) + 10}°C`, // Random temp between 10-25°C
      condition: ["晴", "多雲", "陰", "小雨"][Math.floor(Math.random() * 4)],
      humidity: `${Math.floor(Math.random() * 40) + 50}%`, // Random humidity 50-90%
      windSpeed: `${(Math.random() * 5 + 2).toFixed(1)} m/s` // Random wind 2-7 m/s
    };
  } catch (error) {
    console.error('Error getting weather:', error);
    return {
      location: "上海",
      temperature: "N/A",
      condition: "獲取失敗",
      humidity: "N/A",
      windSpeed: "N/A"
    };
  }
}

async function sendWeatherNotification() {
  try {
    const weather = await getShanghaiWeather();
    const message = `🌤️ 上海天氣預報 (${new Date().toLocaleString('zh-CN')})\n` +
                   `溫度: ${weather.temperature}\n` +
                   `天氣: ${weather.condition}\n` +
                   `濕度: ${weather.humidity}\n` +
                   `風速: ${weather.windSpeed}`;
    
    console.log(message);
    // In a real implementation, this would send the notification to the user
    
    return message;
  } catch (error) {
    console.error('Error sending notification:', error);
  }
}

// Export the function for potential use in other modules
export { sendWeatherNotification, getShanghaiWeather };

// If running as a standalone script
if (typeof require !== 'undefined' && require.main === module) {
  sendWeatherNotification();
}