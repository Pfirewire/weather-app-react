import {OPEN_WEATHER_KEY} from "../keys";
import {useEffect, useState} from "react";

export function useCurrentWeather({ lng, lat }) {
    const [data, setData] = useState({});

    useEffect(() => {
        setData(fetchCurrentWeather());
    }, []);
    const fetchCurrentWeather = async () => {
        const results = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${OPEN_WEATHER_KEY}`);
        console.log(results);
        const json = await results.json();
        console.log(json);
        return json;
    };

    return data;
}