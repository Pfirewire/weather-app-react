
export const geocode = async (search, token) => {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    let results = await fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`);
    let data = await results.json();
    return data.features[0].center;
};