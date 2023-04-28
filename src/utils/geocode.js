import {MAPBOX_TOKEN} from "../keys";

export const geocode = async search => {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    let results = await fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${MAPBOX_TOKEN}`);
    let data = await results.json();
    console.log(data);

    return data.features[0].center;
};