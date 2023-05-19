import {useEffect} from "react";
import {useCurrentWeather} from "../api/useCurrentWeather";


function WeatherTest({ mapObject, mapCenter }) {
    const data = useCurrentWeather(mapCenter);


    console.log(data);
    // const fetchCurrentWeather = async () => {
    //     console.log(mapCenter.lng);
    //     console.log(mapCenter.lat);
    //     console.log(data);
    // };
    //
    // useEffect(() => {
    //     fetchCurrentWeather();
    // }, [mapCenter]);

    return(
        <div></div>
    );
}

export default WeatherTest;