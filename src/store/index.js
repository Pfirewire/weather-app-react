import {configureStore} from "@reduxjs/toolkit";
import {
    mapReducer,
    setLng,
    setLat,
    setZoom,
} from "./slices/mapSlice";
import {setupListeners} from "@reduxjs/toolkit/query";


const store = configureStore({
    reducer: {
        map: mapReducer,
    },
});

setupListeners(store.dispatch);

export {
    store,
    setLng,
    setLat,
    setZoom,
};