"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Fuse from 'fuse.js'
import { FcSearch } from 'react-icons/fc'

const ItemType = 'IMAGE';

const options = {
  includeScore: true,
};

const DraggableImage = ({ image, index, moveImage }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });
  // Change position of image on drop
  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedImage) => {
      if (draggedImage.index !== index) {
        moveImage(draggedImage.index, index);
        draggedImage.index = index;
      }
    },
  });
  
  // blurdata for the image skeleton placeholder
  const blurData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGNgMHaUC0nm9ktm4FVh2Hn+yPPfb21jMvX94wBhmgkwGRIDgwAAAABJRU5ErkJggg=='
  return (
    <div ref={(node) => ref(drop(node))}  className='ease-in-out hover:scale-105'>
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
  // Search function for filtering images according to typed criteria
  function getImages(e) {
    setSearchImage(e.target.value);
    const foundImages = fuse.search(searchImage).filter(element => element.score < 0.3).map(element => element.item);
    if (searchImage.length === 0) {
      setGalleryImages(images);
    } else {
      setGalleryImages(foundImages);
    }
  }
  // Drag and drop the images
  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = [...galleryImages];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setGalleryImages(updatedImages);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <form className='grid p-px w-full'
      >
        <div class='relative justify-self-center w-1/3'>
          <input 
          type='search'
          placeholder='Type to search for images'
          name='search'
          onKeyUp={getImages}
          className='bg-gray-900 text-xl m-4 text-center rounded-md border-2 border-white w-full'
          />
          <button className='absolute right-0 top-1/2 transform -translate-y-1/2' ><FcSearch size={24}/></button>
        </div>
      </form>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Create dragable image from array of images */}
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
