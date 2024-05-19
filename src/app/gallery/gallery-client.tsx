import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch('/api/photo_gallery')
      .then(response => response.json())
      .then(data => setGallery(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      {/* Render your gallery data here */}
    </div>
  );
}
export default Gallery;