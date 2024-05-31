import React from 'react';
import MyNavbar from '../components/navbar';

const Gallery = () => {
  // Fetch and display gallery images
  return (
    <>
    <MyNavbar />
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      {/* Display images with popups */}
    </div>
    </>
  );
};

export default Gallery;