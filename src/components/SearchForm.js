// src/components/SearchForm.js
import React, { useContext } from 'react';
import { ImageContext } from '../context/ImageContext';

const SearchForm = () => {
    const { setQuery } = useContext(ImageContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const query = e.target.elements.query.value;
        setQuery(query);
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                name="query"
                placeholder="Search for images..."
                className="border p-2 rounded w-full"
                required
            />
            <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">
                Search
            </button>
        </form>
    );
};

export default SearchForm;
