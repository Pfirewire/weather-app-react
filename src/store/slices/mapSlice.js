import {createSlice} from "@reduxjs/toolkit";


const mapSlice = createSlice({
    name: 'map',
    initialState: {
        lng: -98.4946,
        lat: 29.4252,
        zoom: 10,
    },
    reducers: {
        setLng(state, action) {
            state.lng = action.payload;
        },
        setLat(state, action) {
            state.lat = action.payload;
        },
        setCoords(state, action) {
            state.lng = action.payload[0];
            state.lat = action.payload[1];
        },
        setZoom(state, action) {
            state.zoom = action.payload;
        },
    },

});

export const {
    setLng,
    setLat,
    setCoords,
    setZoom,
} = mapSlice.actions;

export const mapReducer = mapSlice.reducer;