const URL = "https://api.openweathermap.org"
const BASE_URL = URL + "/data/2.5"

export const API_KEY = "69c63794911e374e47f74405691d7a8a";

// current API ENDPOINTS
export const weatherEndpoints = {
    FETCH_CURRENT_WEATHER_API: BASE_URL + "/weather",
    FETCH_FORECAST_API: BASE_URL + "/forecast",
}