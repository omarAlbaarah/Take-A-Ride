import './OurCars.scss'
import ImageGallery from 'react-image-gallery';

const OurCars = () => {
    const images = [
        {
            original: 'assets/cars.png',
            thumbnail: 'assets/cars.png',
        },
        {
            original: 'assets/cars2.png',
            thumbnail: 'assets/cars2.png',
        },
        {
            original: 'assets/1.png',
            thumbnail: 'assets/1.png',
        },
        {
            original: 'assets/2.png',
            thumbnail: 'assets/2.png',
        },
        {
            original: 'assets/3.png',
            thumbnail: 'assets/3.png',
        },
        {
            original: 'assets/4.png',
            thumbnail: 'assets/4.png',
        },
        {
            original: 'assets/lux4.png',
            thumbnail: 'assets/lux4.png',
        },
        {
            original: 'assets/lux3.png',
            thumbnail: 'assets/lux3.png',
        },
    ];
    return (
        <div id='ourCars' className='cars-wrapper'>
            <ImageGallery items={images}  />
        </div>
    );
}

export default OurCars;