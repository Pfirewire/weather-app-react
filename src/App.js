import Map from "./componenets/Map";
import "mapbox-gl/dist/mapbox-gl.css"
import {useState} from "react";
import SearchInput from "./componenets/SearchInput";
import {geocode} from "./utils/geocode";
import {MAPBOX_TOKEN} from "./keys";
import WeatherTest from "./componenets/WeatherTest";
import styled from "styled-components";
import CurrentWeatherCard from "./componenets/CurrentWeatherCard";


function App() {
    const [mapObject, setMapObject] = useState(false);
    const [mapCenter, setMapCenter] = useState({ lng: -98.4946, lat: 29.4252 })

    return(
        <AppWrapper>
            <TopWrapper>
                <CurrentWeatherCard mapCenter={mapCenter} />
                <SearchAndMapWrapper>
                    <SearchInput mapObject={mapObject} setMapCenter={setMapCenter} />
                    <Map mapObject={mapObject} setMapObject={setMapObject} mapCenter={mapCenter} setMapCenter={setMapCenter} />
                </SearchAndMapWrapper>
            </TopWrapper>
            <WeatherTest mapCenter={mapCenter} />
        </AppWrapper>
    );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const TopWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const SearchAndMapWrapper = styled.div`
  flex-grow: 2;
`;