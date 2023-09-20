import ImageGallery from '@/components/ImageGallery';
import list from '@/components/ImageList';
import fs from 'fs';

// blur('bottle.jpg')

const Home = () => {
  const images = fs.readdirSync('./public/images');
  
  return (
    <div>
    {/* {session ? */}
    <div>
      <h1 className='text-center'>Image Gallery</h1>
      
      <ImageGallery images={images} />
    </div>    
    {/* : <button onClick={() => signIn()}>Login please</button> */}
    {/* } */}
    </div>
  );
};

export default Home;
