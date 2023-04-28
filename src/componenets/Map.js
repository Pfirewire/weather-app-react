import {MAPBOX_TOKEN} from "../keys";
import mapboxgl from "mapbox-gl";
import styled from "styled-components";
import {useEffect, useRef} from "react";
import {useSelector} from "react-redux";

function Map({mapObject, setMapObject}) {
    const {lng, lat, zoom} = useSelector(state => state.map);
    const {query} = useSelector(state => state.search);
    const mapContainer = useRef(null);
    mapboxgl.accessToken = MAPBOX_TOKEN;

    useEffect(() => {
        setMapObject(new mapboxgl.Map({
            container: mapContainer.current, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [lng, lat], // starting position [lng, lat]
            zoom: zoom // starting zoom
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