import {useEffect, useState} from "react";
import {MAPBOX_TOKEN} from "../keys";


function SearchInput({mapObject, setMapCenter}) {
    const [search, setSearch] = useState("");
    const handleSearchChange = e => {
        setSearch(e.target.value);
    };

    const handleSearchEnter = async e => {
        if(e.key === 'Enter') {
            const baseUrl = 'https://api.mapbox.com';
            const endPoint = '/geocoding/v5/mapbox.places/';
            const results = await fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${MAPBOX_TOKEN}`);
            const data = await results.json();
            // mapRef.current.setCenter([lng, lat]);
            mapObject.flyTo({
                center: [
                    data.features[0].center[0],
                    data.features[0].center[1],
                ],
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
            setSearch("");
            setMapCenter({ lng: data.features[0].center[0], lat: data.features[0].center[1] })
        }
    };

    return(
        <div>
            <input value={search} onChange={handleSearchChange} onKeyDown={handleSearchEnter} />
        </div>
    );
}

export default SearchInput;