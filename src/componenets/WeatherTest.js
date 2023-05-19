import {useGetFetch} from "../api/useGetFetch";
import {OPEN_WEATHER_KEY} from "../keys";


function WeatherTest({ mapCenter }) {
    // const currentWeatherData = await useFetchCurrentWeather(mapCenter);
    const { data, error, loading } = useGetFetch(`https://api.openweathermap.org/data/2.5/weather?lat=${mapCenter.lat}&lon=${mapCenter.lng}&appid=${OPEN_WEATHER_KEY}`)

    if(loading) {
        console.log("loading...");
    } else if(error) {
        console.log("error...");
    } else {
        console.log(data);
    }

    return(
        <div></div>
    );
}

export default WeatherTest;