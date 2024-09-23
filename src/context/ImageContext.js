// src/context/ImageContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchImages = async (searchQuery) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.unsplash.com/search/photos`, {
                headers: {
                    Authorization: `DvvqIcSsA6ROWiUGakgrBiGttxqn8BQKEYsw5zgFJfY`
                },
                params: { query: searchQuery }
            });
            setImages(response.data.results);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (query) {
            fetchImages(query);
        }
    }, [query]);

    return (
        <ImageContext.Provider value={{ images, setQuery, loading }}>
            {children}
        </ImageContext.Provider>
    );
};
