import axios from 'axios';

interface WeatherData {
  location: string;
  temperature: string;
  condition: string;
  humidity: string;
  windSpeed: string;
  forecast: Array<{
    day: string;
    high: string;
    low: string;
    condition: string;
  }>;
}

export class WeatherService {
  private static readonly OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY || '';
  private static readonly BASE_URL = 'https://api.openweathermap.org/data/2.5';

  /**
   * Get current weather for Shanghai
   */
  static async getCurrentShanghaiWeather(): Promise<WeatherData> {
    try {
      // Using Shanghai coordinates
      const lat = 31.2304;
      const lon = 121.4737;
      
      const response = await axios.get(`${this.BASE_URL}/weather`, {
        params: {
          lat,
          lon,
          appid: this.OPENWEATHER_API_KEY,
          units: 'metric',
          lang: 'zh_cn'
        }
      });

      const data = response.data;

      return {
        location: data.name,
        temperature: `${Math.round(data.main.temp)}°C`,
        condition: data.weather[0].description,
        humidity: `${data.main.humidity}%`,
        windSpeed: `${data.wind.speed} m/s`,
        forecast: [] // Will implement if needed
      };
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  }

  /**
   * Get formatted weather message for notification
   */
  static async getShanghaiWeatherNotification(): Promise<string> {
    try {
      const weather = await this.getCurrentShanghaiWeather();
      
      return `🌤️ 上海天氣預報\n` +
             `溫度: ${weather.temperature}\n` +
             `天氣: ${weather.condition}\n` +
             `濕度: ${weather.humidity}\n` +
             `風速: ${weather.windSpeed}`;
    } catch (error) {
      console.error('Error generating weather notification:', error);
      return '⛈️ 無法獲取上海天氣信息';
    }
  }
}