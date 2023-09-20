"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemType = 'IMAGE';

const DraggableImage = ({ image, index, moveImage }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [ loading, setLoading ] = useState(true)

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedImage) => {
      if (draggedImage.index !== index) {
        moveImage(draggedImage.index, index);
        draggedImage.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} style={{ cursor: 'grab' }} className=' hover:scale-105'>
      <div className='rounded-md border-2 border-gray-600 h-full'>
        <Image 
        title={image}
        src={image} 
        alt={image}
        height={400}
        width={400}
        // className='object-contain'
        />
      </div>
    </div>
  );
};

const ImageGallery = ({ images }) => {
  const [galleryImages, setGalleryImages] = useState(images);

  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = [...galleryImages];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setGalleryImages(updatedImages);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <DraggableImage
            key={index}
            index={index}
            image={image}
            moveImage={moveImage}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default ImageGallery;
