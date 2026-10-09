
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ message: "PeekKavach Weather Service is running 🌦️" });
});

// Live weather endpoint
app.get("/api/weather", async (req, res) => {
  try {
    const latitude = Number(req.query.latitude);
    const longitude = Number(req.query.longitude);

    if (
      req.query.latitude === undefined ||
      req.query.longitude === undefined ||
      !Number.isFinite(latitude) ||
      !Number.isFinite(longitude) ||
      latitude < -90 ||
      latitude > 90 ||
      longitude < -180 ||
      longitude > 180
    ) {
      return res.status(400).json({
        error: "Provide valid latitude and longitude coordinates.",
      });
    }

    const url = new URL("https://api.open-meteo.com/v1/forecast");

    url.search = new URLSearchParams({
      latitude: String(latitude),
      longitude: String(longitude),
      current:
        "temperature_2m,relative_humidity_2m,precipitation,rain,wind_speed_10m,weather_code",
      daily: "precipitation_sum,temperature_2m_max,temperature_2m_min",
      timezone: "auto",
      forecast_days: "3",
    }).toString();

    const response = await fetch(url);

    if (!response.ok) {
      return res.status(502).json({
        error: "Weather provider could not return weather data.",
      });
    }

    const weather = await response.json();

    res.json({
      source: "Open-Meteo",
      location: {
        latitude,
        longitude,
        timezone: weather.timezone,
      },
      current: weather.current,
      daily: weather.daily,
      units: {
        current: weather.current_units,
        daily: weather.daily_units,
      },
      fetchedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Weather API error:", error.message);

    res.status(500).json({
      error: "Unable to fetch weather data. Please try again.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`PeekKavach Weather Service running at http://localhost:${PORT}`);
});
