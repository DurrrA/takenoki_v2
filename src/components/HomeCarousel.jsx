import { Carousel, Typography, Button } from "@material-tailwind/react";
import './Carousel.css';

const CarouselWithContent = () => {
  return (
    <Carousel autoplay className="custom-carousel">
      <div className="relative h-full w-full">
        <img
          src="/assets/durian.jpg"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 text-center bg-white bg-opacity-20 rounded-lg p-4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Gardenesia
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 gap-8"
            >
              "Manfaatkan potensi pertanian buah tropis di Bogor. Durian, mangga, dan rambutan tumbuh subur di iklim yang mendukung, menghasilkan buah berkualitas tinggi."
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="/assets/durian.jpg"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/75">
        <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 text-center bg-white bg-opacity-20 rounded-lg p-4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Gardenesia
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 gap-8"
            >
              "Manfaatkan potensi pertanian buah tropis di Bogor. Durian, mangga, dan rambutan tumbuh subur di iklim yang mendukung, menghasilkan buah berkualitas tinggi."
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="/assets/jahe.jpg"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/75">
        <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 text-center bg-white bg-opacity-20 rounded-lg p-4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Gardenesia
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 gap-8"
            >
              "Tanam dan rawat tanaman herbal di rumah Anda. Jahe, kunyit, dan serai tidak hanya memperkaya masakan, tetapi juga memiliki manfaat kesehatan yang luar biasa."
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default CarouselWithContent;
