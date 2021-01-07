import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const fetchYelpApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 20,
                    term : searchTerm,
                    location: 'san jose'
                }
            });
            console.log("hihihi");
            setResults(response.data.businesses);
        }
        catch (error) {
            setErrorMessage('Something went wrong');
        }
    };


    useEffect(() => {
        fetchYelpApi('pasta');
        // only run one time, when render 
    }, []);

    return [fetchYelpApi,results,errorMessage];
};