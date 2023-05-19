import {useEffect} from "react";


function WeatherTest({ mapObject, mapCenter }) {

    const fetchCurrentWeather = async () => {
        console.log(mapCenter.lng);
        console.log(mapCenter.lat);
    };

    useEffect(() => {
        fetchCurrentWeather();
    }, [mapCenter]);

    return(
        <div></div>
    );
}

export default WeatherTest;