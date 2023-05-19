import {MAPBOX_TOKEN} from "../keys";
import mapboxgl from "mapbox-gl";
import styled from "styled-components";
import {useEffect, useRef} from "react";

function Map({mapObject, setMapObject}) {
    const mapContainer = useRef(null);
    mapboxgl.accessToken = MAPBOX_TOKEN;

    useEffect(() => {
        setMapObject(new mapboxgl.Map({
            container: mapContainer.current, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [-98.4946, 29.4252], // starting position [lng, lat]
            zoom: 9 // starting zoom
        }));

    }, []);

    return(
        <MapWrapper ref={mapContainer}>
        </MapWrapper>
    );
}

export default Map;

const MapWrapper = styled.div`
  width: 600px;
  height: 600px;
`;