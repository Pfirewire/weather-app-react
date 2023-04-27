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
        setZoom(state, action) {
            state.zoom = action.payload;
        },
    },

});

export const {
    setLng,
    setLat,
    setZoom,
} = mapSlice.actions;

export const mapReducer = mapSlice.reducer;