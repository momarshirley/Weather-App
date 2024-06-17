import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";

const allIcons = {
  "01d": clear_icon,
  "01n": clear_icon,
  "02d": cloud_icon,
  "02n": cloud_icon,
  "03d": cloud_icon,
  "03n": cloud_icon,
  "04d": drizzle_icon,
  "04n": drizzle_icon,
  "09d": rain_icon,
  "09n": rain_icon,
  "10d": rain_icon,
  "10n": rain_icon,
  "13d": snow_icon,
  "13n": snow_icon,
};

export const fetchWeatherData = async (cityName) => {
  if (cityName === "") {
    alert("Enter the city name");
    return;
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${
      import.meta.env.VITE_APP_ID
    }`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return null;
    }

    console.log(data);

    const icon = allIcons[data.weather[0].icon] || clear_icon;

    return {
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      temperature: Math.floor(data.main.temp),
      location: data.name,
      icon: icon,
    };
  } catch (error) {
    console.error("Error in fetching the weather data", error);
    alert("Error in fetching the weather data");
    return null;
  }
};
