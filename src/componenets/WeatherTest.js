import {useGetFetch} from "../api/useGetFetch";
import {OPEN_WEATHER_KEY} from "../keys";


function WeatherTest({ mapCenter }) {
    // const currentWeatherData = await useFetchCurrentWeather(mapCenter);
    const currentWeather = useGetFetch(`https://api.openweathermap.org/data/2.5/weather?lat=${mapCenter.lat}&lon=${mapCenter.lng}&appid=${OPEN_WEATHER_KEY}`);
    const forecastWeather = useGetFetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${mapCenter.lat}&lon=${mapCenter.lng}&appid=${OPEN_WEATHER_KEY}`);

    console.log("Current Weather:");
    if(currentWeather.loading) {
        console.log("loading...");
    } else if(currentWeather.error) {
        console.log("error...");
    } else {
        console.log(currentWeather.data);
    }

    console.log("Forecast Weather:");
    if(forecastWeather.loading) {
        console.log("loading...");
    } else if(forecastWeather.error) {
        console.log("error...");
    } else {
        console.log(forecastWeather.data);
    }

    return(
        <div></div>
    );
}

export default WeatherTest;