import ImageGallery from '../components/ImageGallery';
import fs from 'fs';

const Home = () => {
  const images = fs.readdirSync('./public/images');
  
  return (
    <div>      
      <ImageGallery images={images} />
    </div>
  );
};

export default Home;
