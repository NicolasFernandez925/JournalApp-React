import { useEffect, useState } from "react"

export const useFetch = (url,options) => {

    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        (async() =>{
            try {

                const res = await fetch(url);
                const resJson = await res.json();
                setResult(resJson);
                setLoading(false);
                
            } catch (error) {
                setLoading(false);
                setError(error);
            }

        })()
        
    }, [options,url]);

    return { loading, result, error };
    
}
