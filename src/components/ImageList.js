// src/components/ImageList.js
import React, { useContext } from 'react';
import { ImageContext } from '../context/ImageContext';

const ImageList = () => {
    const { images, loading } = useContext(ImageContext);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
                <img key={image.id} src={image.urls.small} alt={image.alt_description} className="rounded" />
            ))}
        </div>
    );
};

export default ImageList;
