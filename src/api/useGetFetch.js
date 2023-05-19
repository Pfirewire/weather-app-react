import {useEffect, useState} from "react";


export function useGetFetch(url) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);


    useEffect(() => {
        const startFetch = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const json = await response.json();
                setLoading(false);
                setData(json);
                setError(null);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        startFetch();
    }, [url]);

    return { data, error, loading };
}