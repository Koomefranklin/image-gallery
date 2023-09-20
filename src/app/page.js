import React from 'react';
import ImageGallery from '@/components/ImageGallery';
import { useSession } from 'next-auth/client'

const images = ['/planet-astronomy.jpg', '/Earphones.jpg', '/moonfall-astronauts.jpg', '/brooklyn-bridge-manhattan-city-lights-night-cityscape-river-7680x4320-1703.jpg', '/pixabay.jpg', '/moon tree.jpg', '/Dark Nature.jpg', '/star-trails-night-sky.jpg', '/2490512.jpg', '/sunset-lake-body.jpg', '/couple-dream-earth-night-silhouette-together-romantic-7680x4320-1399.jpg', '/wallpaperflare.jpg', '/full-moon-night-time-lake-body-of-water-reflection-7680x4320-4610.jpg', '/bottle.jpg', '/City Night.jpg', '/Street.jpg', '/Blue Backlit Keyboard.jpg', '/sydney-harbour-bridge.jpg', '/Highway.jpg', '/home_background.jpg', '/loop.jpg', '/sea sunset.jpg', '/full-moon-forest-night-dark-starry-sky-5k-8k-7680x4320-1684.jpg', '/Empty Street Night.jpg', '/Coffee.jpg', '/i-dont.jpg', '/Friends.png', '/py.jpg', '/The 16 Most Photogenic Spots in Canada.jpg', '/3511467.jpg', '/dove-flying-bird-sunset-trees-silhouette-scenic-evening-7680x4320-1758.jpg', '/City Dawn.jpg', '/yosemite-national-park-sunrise-.jpg', '/1121317.png', '/Drive.jpg', '/surreal-alone-silhouette.jpg', '/Green Nature Lake.jpg', '/yosemite-national-park.jpg', '/opportunity.jpg', '/moon-planet-8k.jpg', '/Data Breach.jpg', '/hello-friend.jpg', '/New York City Manhattan Traffic Light LightTrails Night.jpg', '/Control.png'];
const session = useSession();
const user = session.user;
const Home = () => {
  return (
    <div>
    {user ?
    <div>
      <h1 className='text-center'>Image Gallery</h1>
      <ImageGallery images={images} />
    </div>    
    : <div>Loggin please</div>
    }
    </div>
  );
};

export default Home;
