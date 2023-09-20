"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Fuse from 'fuse.js'

const ItemType = 'IMAGE';

const options = {
  includeScore: true,
};

const DraggableImage = ({ image, index, moveImage }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedImage) => {
      if (draggedImage.index !== index) {
        moveImage(draggedImage.index, index);
        draggedImage.index = index;
      }
    },
  });
  
  const blurData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGNgMHaUC0nm9ktm4FVh2Hn+yPPfb21jMvX94wBhmgkwGRIDgwAAAABJRU5ErkJggg=='
  return (
    <div ref={(node) => ref(drop(node))}  className='ease-in-out hover:scale-110'>
      <div className='rounded-md border-2 border-gray-600 h-full'>
        <Image 
        title={image}
        src={`/images/${image}`} 
        alt={image}
        height={400}
        width={400}
        placeholder='blur'
        blurDataURL={blurData}
        />
      </div>
    </div>
  );
};

const ImageGallery = ({ images }) => {
  const [galleryImages, setGalleryImages] = useState(images);
  const fuse = new Fuse(images, options);
  const [searchImage, setSearchImage] = useState('');
  function getImages(e) {
    setSearchImage(e.target.value);
    const foundImages = fuse.search(searchImage).map(element => element.item);
    if (searchImage.length === 0) {
      setGalleryImages(images);
    } else {
      setGalleryImages(foundImages);
    }
  }

  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = [...galleryImages];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setGalleryImages(updatedImages);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <form className='grid p-px w-full'>
        <input 
        type='search'
        placeholder='Type to search for images'
        onKeyDown={getImages}
        name='search'
        className='bg-gray-900 justify-self-center text-xl m-4 text-center rounded-md border-2 border-white'
        />
      </form>
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
