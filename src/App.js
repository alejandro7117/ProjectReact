// src/App.js
import React from 'react';
import { ImageProvider } from './context/ImageContext';
import SearchForm from './components/SearchForm';
import ImageList from './components/ImageList';

const App = () => {
    return (
        <ImageProvider>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Image Search</h1>
                <SearchForm />
                <ImageList />
            </div>
        </ImageProvider>
    );
};

export default App;
