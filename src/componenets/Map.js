import {MAPBOX_TOKEN} from "../keys";
import mapboxgl from "mapbox-gl"
import styled from "styled-components";
import {useEffect, useRef} from "react";
import {useSelector} from "react-redux";

function Map() {
    const {lng, lat, zoom} = useSelector(state => state.map);
    mapboxgl.accessToken = MAPBOX_TOKEN;
    const mapContainer = useRef();

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [lng, lat], // starting position [lng, lat]
            zoom: zoom // starting zoom
        });
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