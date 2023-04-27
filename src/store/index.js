import {configureStore} from "@reduxjs/toolkit";
import {
    mapReducer,
    setLng,
    setLat,
    setZoom,
} from "./slices/mapSlice";
import {
    searchReducer,
    setQuery,
} from "./slices/searchSlice";
import {setupListeners} from "@reduxjs/toolkit/query";


const store = configureStore({
    reducer: {
        map: mapReducer,
        search: searchReducer,
    },
});

setupListeners(store.dispatch);

export {
    store,
    setLng,
    setLat,
    setZoom,
    setQuery
};