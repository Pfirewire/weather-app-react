import {useDispatch, useSelector} from "react-redux";
import {setCoords, setQuery} from "../store";
import {useState} from "react";
import {geocode} from "../utils/geocode";
import {MAPBOX_TOKEN} from "../keys";


function SearchInput() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const handleSearchChange = e => {
        setSearch(e.target.value);
    };

    const handleSearchEnter = async e => {
        if(e.key === 'Enter') {
            const baseUrl = 'https://api.mapbox.com';
            const endPoint = '/geocoding/v5/mapbox.places/';
            const results = await fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${MAPBOX_TOKEN}`);
            const data = await results.json();
            dispatch(setCoords(data.features[0].center));
            dispatch(setQuery(search));
            setSearch("");
        }
    };

    return(
        <div>
            <input value={search} onChange={handleSearchChange} onKeyDown={handleSearchEnter} />
        </div>
    );
}

export default SearchInput;