import Map from "./componenets/Map";
import "mapbox-gl/dist/mapbox-gl.css"
import {useState} from "react";
import SearchInput from "./componenets/SearchInput";


function App() {
    const [searchQuery, setSearchQuery] = useState();

    const handleSearchChange = query => {
        setSearchQuery(query);
    };

    return(
        <div>
            <SearchInput searchQuery={searchQuery} onSearchChange={handleSearchChange} />
            <Map />
        </div>
    );
}

export default App;