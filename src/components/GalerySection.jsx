import { useState, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import { GALERY } from './constants';

export default function GalerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  // Crear la referencia
  const imageContainerRef = useRef();

  // Crear la función handleClick
  const handleClick = (e) => {
    if (!imageContainerRef.current.contains(e.target)) {
      setSelectedImage(null);
    }
  };

  return (
    <section
      id="galeria"
      className="flex flex-col items-center text-center w-full pt-10 pb-16 lg:my-6 lg:max-w-6xl border-b border-gray-300 px-2">
      <h2 className="font-courgette text-4xl lg:text-5xl mb-12">Galeria</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
        {GALERY.map((image, index) => (
          <div key={index}>
            <img
              className="block mx-auto w-full object-cover object-center rounded-lg shadow-md"
              src={image.imageSrc}
              alt={image.imageAlt}
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={handleClick}>
          <div className="relative" ref={imageContainerRef}>
            <img
              className="max-w-full max-h-full object-cover object-center rounded-lg"
              src={selectedImage.imageSrc}
              alt={selectedImage.imageAlt}
            />

            <div
              className="absolute top-2 right-2 bg-white rounded-full p-2 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}>
              <IoMdClose size={24} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
