import React from 'react';
import Slider from 'react-slick';

const MainProjectShow = ({ images }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full text-center text-lg text-red-700 px-2 md:py-9 font-bold">
      <div className="hidden md:block">
        <div className="grid grid-cols-4 gap-4">
          {images.map((item) => (
            <div key={item.id}>
              <img
                src={item.img}
                alt=""
                className="w-full h-64 object-cover hover:scale-105 transition-all duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden">
        <Slider {...sliderSettings}>
          {images.map((item) => (
            <div key={item.id} className="px-2">
              <img
                src={item.img}
                alt=""
                className="w-full h-64 pb-5 object-cover hover:scale-105 transition-all duration-300 cursor-pointer"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MainProjectShow;
