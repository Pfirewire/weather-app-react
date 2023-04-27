import Map from "./componenets/Map";
import "mapbox-gl/dist/mapbox-gl.css"
import {useState} from "react";
import SearchInput from "./componenets/SearchInput";
import {geocode} from "./utils/geocode";
import {MAPBOX_TOKEN} from "./keys";


function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [map, setMap] = useState(null);

    const handleMapLoad = map => {
        setMap(map);
    };

    const handleSearchChange = query => {
        setSearchQuery(query);
    };

    const handleSearchEnter = async () => {
        let result = await geocode(searchQuery, MAPBOX_TOKEN);
        map.setCenter(result);
    }

    return(
        <div>
            <SearchInput searchQuery={searchQuery} onEnter={handleSearchEnter} onSearchChange={handleSearchChange} />
            <Map onLoad={handleMapLoad} />
        </div>
    );
}

export default App;