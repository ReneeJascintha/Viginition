import { useEffect, useState } from "react";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const apiKey = "1b4efd18e5017bdeef0f38b6b7fc3dfe"; // Use your API key
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch weather data.");
          }

          const data = await response.json();

          if (!data || !data.main || !data.weather) {
            throw new Error("Incomplete weather data received.");
          }

          setWeather(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      },
      (geoError) => {
        setError(`Geolocation error: ${geoError.message}`);
        setLoading(false);
      }
    );
  }, []);

  if (loading) {
    return <p>Loading weather...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  const temp = weather.main.temp;
  const icon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
  const description = weather.weather[0].description;

  return (
    <div className="weather-widget">
      <h2>Weather</h2>
      <img src={icon} alt="Weather Icon" className="weather-icon" />
      <p>{weather.name}</p>
      <p>{temp}°C</p>
      <p>{description}</p>
    </div>
  );
};

export default WeatherWidget;
