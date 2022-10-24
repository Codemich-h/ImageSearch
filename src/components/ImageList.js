import './Image.css';
import React from 'react';
import ImageCard from './ImageCard';



const ImageList = props => {
    const Imagess = props.images.map(image => {
        return <ImageCard  key={image.id} image={image} />
    });
    return <div className="image-list">{Imagess}</div>;
}

export default ImageList;
