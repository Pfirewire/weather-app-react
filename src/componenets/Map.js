import {MAPBOX_TOKEN} from "../keys";
import mapboxgl from "mapbox-gl";
import styled from "styled-components";
import {useEffect, useRef} from "react";

function Map({ mapObject, setMapObject, mapCenter, setMapCenter }) {
    const mapContainer = useRef(null);
    mapboxgl.accessToken = MAPBOX_TOKEN;

    const handleMouseUp = () => {
        if(mapCenter.lng !== mapObject.getCenter().lng || mapCenter.lat !== mapObject.getCenter().lat) {
            setMapCenter(mapObject.getCenter());
            console.log(mapObject.getCenter());
        }
    }

    useEffect(() => {
        setMapObject(new mapboxgl.Map({
            container: mapContainer.current, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [mapCenter.lng, mapCenter.lat], // starting position [lng, lat]
            zoom: 9 // starting zoom
        }));

    }, []);

    return(
        <MapWrapper onMouseUp={handleMouseUp} onMouseOut={handleMouseUp} ref={mapContainer}>
        </MapWrapper>
    );
}

export default Map;

const MapWrapper = styled.div`
  width: 100%;
  height: 60vh;
`;