import {MAPBOX_TOKEN} from "../keys";
import mapboxgl from "mapbox-gl"
import styled from "styled-components";
import {useEffect, useRef} from "react";

function Map() {
    mapboxgl.accessToken = MAPBOX_TOKEN;
    const mapContainer = useRef();

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });
        return () => map.remove();
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