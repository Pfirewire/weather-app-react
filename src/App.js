import Map from "./componenets/Map";
import "mapbox-gl/dist/mapbox-gl.css"
import {useState} from "react";
import SearchInput from "./componenets/SearchInput";
import {geocode} from "./utils/geocode";
import {MAPBOX_TOKEN} from "./keys";


function App() {

    return(
        <div>
            <SearchInput />
            <Map />
        </div>
    );
}

export default App;