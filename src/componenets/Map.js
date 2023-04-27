import {MAPBOX_TOKEN} from "../keys";
import mapboxgl from "mapbox-gl";
import styled from "styled-components";
import {useEffect, useRef} from "react";
import {useSelector} from "react-redux";
import {mapReducer} from "../store/slices/mapSlice";

function Map() {
    const {lng, lat, zoom} = useSelector(state => state.map);
    const {query} = useSelector(state => state.search);
    mapboxgl.accessToken = MAPBOX_TOKEN;
    const mapContainer = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [lng, lat], // starting position [lng, lat]
            zoom: zoom // starting zoom
        });

        mapRef.current = map;
    }, []);

    useEffect(() => {
        if(mapRef.current) {
            // mapRef.current.setCenter([lng, lat]);
            mapRef.current.flyTo({
                center: [lng, lat],
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
        }
    }, [query]);

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