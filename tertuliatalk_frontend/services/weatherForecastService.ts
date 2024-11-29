import { EnvVars } from '../env';

const getWeatherForecast = async () => {
  try {
    const response = await fetch(`${EnvVars.API_URL}/WeatherForecast/ww`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },

    });
    return await response.json()
  } catch (error) {
    console.log(error);
  }
};

export { getWeatherForecast };