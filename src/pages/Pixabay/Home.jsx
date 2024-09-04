import React, { useEffect, useState } from 'react';

const Home = ({ searchQuery }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const fetchImages = async () => {
        try {
          const response = await fetch(`https://pixabay.com/api/?key=45797313-57fc2b24791b466da60ad5b39&q=${encodeURIComponent(searchQuery)}&image_type=photo`);
          const data = await response.json();
          setImages(data.hits);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };

      fetchImages();
    }
  }, [searchQuery]);

  return (
    <>
     <div className="container mx-auto py-20">
      {searchQuery && images.length === 0 ? (
        <p className="text-center text-gray-500">No images found. Try a different search.</p>
      ) : images.length === 0 ? (
        <p className="text-center text-gray-500">Search for images using the search bar above.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 gap-x-4">
          {images.map((image) => (
            <div key={image.id} className="relative w-72 h-72 mx-auto">
              <img 
                src={image.webformatURL} 
                alt={image.tags} 
                className="w-full h-full object-cover rounded-lg" 
              />
              <p className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 text-sm w-full text-center">{image.tags}</p>
            </div>
          ))}
        </div>
      )}
    </div>
</>
  );
}

export default Home;
