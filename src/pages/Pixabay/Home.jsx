import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Home = ({ searchQuery }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      if (searchQuery) {
        try {
          setLoading(true);
          const response = await fetch(`https://pixabay.com/api/?key=45797313-57fc2b24791b466da60ad5b39&q=${encodeURIComponent(searchQuery)}&image_type=photo`);
          const data = await response.json();
          setImages(data.hits);
        } catch (error) {
          console.error('Error fetching images:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
        setImages([]); // Clear images when there's no search query
      }
    };

    fetchImages();
  }, [searchQuery]);

  // Define a number of skeletons to show while loading
  const skeletonCount = 8;

  return (
    <div className="container mx-auto py-20">
      {loading ? (
        // Show skeletons while loading
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <div key={index} className="relative w-72 h-72 mx-auto">
              <Skeleton height="100%" width="100%" />
              <p className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 text-sm w-full text-center">
                <Skeleton width={100} />
              </p>
            </div>
          ))}
        </div>
      ) : images.length === 0 ? (
        // Display message when no images are found
        <p className="text-center text-gray-500">
          {searchQuery ? 'No images found. Try a different search.' : 'Search for images using the search bar above.'}
        </p>
      ) : (
        // Display images when they are available
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
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
  );
};

export default Home;
    