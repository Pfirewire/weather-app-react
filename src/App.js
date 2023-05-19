import Map from "./componenets/Map";
import "mapbox-gl/dist/mapbox-gl.css"
import {useState} from "react";
import SearchInput from "./componenets/SearchInput";
import {geocode} from "./utils/geocode";
import {MAPBOX_TOKEN} from "./keys";
import WeatherTest from "./componenets/WeatherTest";


function App() {
    const [mapObject, setMapObject] = useState(false);
    const [mapCenter, setMapCenter] = useState({ lng: -98.4946, lat: 29.4252 })

    return(
        <div>
            <SearchInput mapObject={mapObject} setMapCenter={setMapCenter} />
            <Map mapObject={mapObject} setMapObject={setMapObject} mapCenter={mapCenter} />
            <WeatherTest mapObject={mapObject} mapCenter={mapCenter} />
        </div>
    );
}

export default App;