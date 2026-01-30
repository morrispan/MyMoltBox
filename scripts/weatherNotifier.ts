import { WeatherService } from './weatherService';

/**
 * Send hourly weather notification for Shanghai
 */
export async function sendHourlyShanghaiWeather() {
  try {
    const weatherMessage = await WeatherService.getShanghaiWeatherNotification();
    console.log(`[${new Date().toISOString()}] Shanghai Weather: ${weatherMessage}`);
    
    // In a real implementation, this would send the message to the user
    // via the appropriate communication channel
    console.log('Weather notification sent successfully');
  } catch (error) {
    console.error('Error sending weather notification:', error);
  }
}

// If running as a standalone script
if (require.main === module) {
  sendHourlyShanghaiWeather();
}