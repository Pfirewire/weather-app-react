import styled from "styled-components";
import {useGetFetch} from "../api/useGetFetch";
import {OPEN_WEATHER_KEY} from "../keys";


function CurrentWeatherCard({ mapCenter }) {
    const currentWeather = useGetFetch(`https://api.openweathermap.org/data/2.5/weather?lat=${mapCenter.lat}&lon=${mapCenter.lng}&appid=${OPEN_WEATHER_KEY}&units=imperial`);

    let content;
    if(currentWeather.loading) {
        content = (
            <div>
                Loading...
            </div>
        );
    } else if(currentWeather.error) {
        content = (
            <div>
                Error loading data
            </div>
        );
    } else {
        content = (
            <>
                <h3>Current Weather: {currentWeather.data.name}</h3>
                <div>Temperature: {currentWeather.data.main.temp} F</div>
                <div>Feels Like: {currentWeather.data.main.feels_like} F</div>
            </>
        );
    }

    return(
        <CurrentWeatherCardWrapper>
            {content}
        </CurrentWeatherCardWrapper>
    );
}

export default CurrentWeatherCard;

const CurrentWeatherCardWrapper = styled.div`
  flex-grow: 1;
`;